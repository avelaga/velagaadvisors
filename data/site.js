// Canonical origin for the site. The apex redirects to www, so www is the form
// that belongs in canonical tags, the sitemap, and absolute og: URLs.
export const SITE_URL = "https://www.velagaadvisors.com";

// Absolute URL for a site-relative path, for metadata that must not be relative.
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_URL + (path.startsWith("/") ? path : `/${path}`);
}
