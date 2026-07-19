// Data layer for the Insights blog, backed by the pebble CMS API.
// Reads happen at build time (static export); publishing a post triggers a
// rebuild via the API's deploy hook.

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://velagaadvisors-pebble-api.abvelaga.workers.dev";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// created_at is "YYYY-MM-DD HH:MM:SS" (UTC). Format the date part without
// timezone math so the displayed day never shifts.
export function formatDate(s) {
  if (!s) return "";
  const [y, m, d] = s.split(" ")[0].split("-").map(Number);
  if (!y || !m || !d) return "";
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// Meta line: "Author · Date" when an author is set, otherwise just the date.
export function postMeta(p) {
  return [p.author, formatDate(p.created_at)].filter(Boolean).join(" · ");
}

// List cards use the same byline as the post page.
export function listMeta(p) {
  return postMeta(p);
}

// List excerpt: the editor-provided preview text only — no fallbacks.
export function listExcerpt(p) {
  return p.preview_text || "";
}

// SEO/meta description for a single post.
export function postExcerpt(p) {
  return p.preview_text || p.meta_description || p.content_preview || "";
}

export async function getAllPosts() {
  const res = await fetch(`${API_BASE}/api/posts?status=published&limit=100`);
  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
  const data = await res.json();
  return data.posts || [];
}

export async function getPost(slug) {
  const res = await fetch(
    `${API_BASE}/api/posts/by-slug/${encodeURIComponent(slug)}`
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch post ${slug}: ${res.status}`);
  return await res.json();
}

export async function getAllSlugs() {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}
