// Writes public/sitemap.xml and public/robots.txt before `next build` copies
// public/ into the static export. The blog lives in an external CMS, so the post
// URLs have to be pulled from the API the same way the pages are built.

import { writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://www.velagaadvisors.com";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://velagaadvisors-pebble-api.abvelaga.workers.dev";

// Static routes worth indexing, with a rough priority ordering.
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/insights", priority: "0.9", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
  { path: "/client-hub", priority: "0.5", changefreq: "yearly" },
  { path: "/disclaimer", priority: "0.3", changefreq: "yearly" },
];

// created_at/updated_at are "YYYY-MM-DD HH:MM:SS" (UTC); <lastmod> wants the
// date alone, which sidesteps timezone formatting entirely.
function lastmod(post) {
  const stamp = post.updated_at || post.created_at || "";
  const day = stamp.split(" ")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : null;
}

function urlEntry({ loc, changefreq, priority, mod }) {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    mod ? `    <lastmod>${mod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

async function fetchPosts() {
  const res = await fetch(`${API_BASE}/api/posts?status=published&limit=100`);
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
  const data = await res.json();
  return data.posts || [];
}

async function main() {
  const posts = await fetchPosts();

  const entries = [
    ...STATIC_ROUTES.map((route) => ({
      loc: SITE_URL + (route.path === "/" ? "/" : route.path),
      changefreq: route.changefreq,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/insights/${post.slug}`,
      mod: lastmod(post),
      changefreq: "yearly",
      priority: "0.7",
    })),
  ];

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(urlEntry),
    "</urlset>",
    "",
  ].join("\n");

  const robots = [
    "User-agent: *",
    "Allow: /",
    "",
    // The CMS edit UI is a private app shell with nothing to index.
    "Disallow: /edit",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  const publicDir = path.join(process.cwd(), "public");
  await writeFile(path.join(publicDir, "sitemap.xml"), sitemap);
  await writeFile(path.join(publicDir, "robots.txt"), robots);

  console.log(
    `generate-seo: wrote sitemap.xml (${entries.length} urls) and robots.txt`
  );
}

main().catch((err) => {
  console.error("generate-seo failed:", err);
  process.exit(1);
});
