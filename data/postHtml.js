// Turns a self-contained HTML article from the CMS into something that can be
// rendered inline in the page.
//
// Posts written in the editor's HTML mode are complete <!DOCTYPE html>
// documents carrying their own global stylesheet. They used to be dropped into
// an <iframe srcDoc> so that stylesheet could not leak onto the site, but iframe
// content is a separate document that search engines do not index as part of the
// page — the whole article body was invisible to crawlers. Instead, the document
// is taken apart at build time: its CSS is rewritten so every selector is
// confined to the post container, and its body is rendered as real page markup.

// Selector-scoping is only needed for full documents; rich-text posts are
// partial HTML with no styles of their own.
export function isFullDocument(html) {
  return /<!doctype\s+html|<html[\s>]/i.test(html || "");
}

// The class the scoped CSS is anchored to. Global (not a CSS module) because the
// rewritten selectors are raw strings that never pass through the module hasher.
export const POST_SCOPE = "va-post";

// At-rules whose contents are not a rule list, or whose selectors must not be
// touched (@page's margin boxes, keyframe stops, font descriptors).
const OPAQUE_AT =
  /^@(?:keyframes|-webkit-keyframes|font-face|page|counter-style|property|font-feature-values|viewport|charset|import|namespace)\b/i;

// At-rules that wrap a normal rule list, so their contents still need scoping.
const NESTED_AT = /^@(?:media|supports|container|layer|scope|document)\b/i;

// A leading :root/html/body chain addresses the document root, which is now the
// post container itself rather than an ancestor of it.
const ROOT_PREFIX =
  /^(?:(?::root|html|body)(?=$|[\s>+~])\s*(?:>\s*(?=(?::root|html|body)\b))?)+/i;

// Splits CSS into top-level nodes, dropping comments and respecting strings so a
// brace or semicolon inside a quoted value (e.g. content: "}") is not treated as
// structure.
function splitBlocks(css) {
  const nodes = [];
  let buf = "";
  let i = 0;

  const readString = (from) => {
    const quote = css[from];
    let out = quote;
    let j = from + 1;
    while (j < css.length) {
      if (css[j] === "\\") {
        out += css.slice(j, j + 2);
        j += 2;
        continue;
      }
      out += css[j];
      if (css[j] === quote) {
        j++;
        break;
      }
      j++;
    }
    return [out, j];
  };

  while (i < css.length) {
    const ch = css[i];

    if (ch === "/" && css[i + 1] === "*") {
      const end = css.indexOf("*/", i + 2);
      i = end === -1 ? css.length : end + 2;
      continue;
    }

    if (ch === '"' || ch === "'") {
      const [text, next] = readString(i);
      buf += text;
      i = next;
      continue;
    }

    if (ch === ";") {
      const text = buf.trim();
      if (text) nodes.push({ type: "statement", text: text + ";" });
      buf = "";
      i++;
      continue;
    }

    if (ch === "{") {
      let depth = 1;
      let body = "";
      let j = i + 1;
      while (j < css.length && depth > 0) {
        const c = css[j];
        if (c === "/" && css[j + 1] === "*") {
          const end = css.indexOf("*/", j + 2);
          j = end === -1 ? css.length : end + 2;
          continue;
        }
        if (c === '"' || c === "'") {
          const [text, next] = readString(j);
          body += text;
          j = next;
          continue;
        }
        if (c === "{") depth++;
        if (c === "}") {
          depth--;
          if (depth === 0) {
            j++;
            break;
          }
        }
        body += c;
        j++;
      }
      nodes.push({ type: "block", prelude: buf.trim(), body });
      buf = "";
      i = j;
      continue;
    }

    buf += ch;
    i++;
  }

  const tail = buf.trim();
  if (tail) nodes.push({ type: "statement", text: tail });
  return nodes;
}

// Splits on commas that sit outside parentheses/brackets/strings, so selector
// lists like `:is(a, b), c` survive intact.
function splitSelectorList(list) {
  const parts = [];
  let depth = 0;
  let quote = null;
  let buf = "";

  for (let i = 0; i < list.length; i++) {
    const ch = list[i];
    if (quote) {
      buf += ch;
      if (ch === "\\") {
        buf += list[++i] || "";
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      buf += ch;
      continue;
    }
    if (ch === "(" || ch === "[") depth++;
    if (ch === ")" || ch === "]") depth--;
    if (ch === "," && depth === 0) {
      parts.push(buf);
      buf = "";
      continue;
    }
    buf += ch;
  }
  parts.push(buf);
  return parts;
}

function scopeSelector(selector, scope) {
  const sel = selector.trim();
  if (!sel) return "";

  // The universal selector covers the container as well as its descendants.
  if (sel === "*") return `${scope}, ${scope} *`;

  const rest = sel.replace(ROOT_PREFIX, "").trim();
  if (!rest) return scope;
  return `${scope} ${rest}`;
}

function scopeSelectorList(list, scope) {
  return splitSelectorList(list)
    .map((sel) => scopeSelector(sel, scope))
    .filter(Boolean)
    .join(", ");
}

// Rewrites a stylesheet so nothing in it can match outside `scope`.
export function scopeCss(css, scope) {
  return splitBlocks(css)
    .map((node) => {
      if (node.type === "statement") return node.text;
      if (OPAQUE_AT.test(node.prelude)) return `${node.prelude}{${node.body}}`;
      if (NESTED_AT.test(node.prelude)) {
        return `${node.prelude}{${scopeCss(node.body, scope)}}`;
      }
      return `${scopeSelectorList(node.prelude, scope)}{${node.body}}`;
    })
    .filter(Boolean)
    .join("\n");
}

// The document's own page background and margins would otherwise show up as a
// slab behind the article. The iframe used to get the same treatment injected
// into it; this reproduces it.
const CONTAINER_RESET = (scope) =>
  `\n${scope}{background:transparent !important;margin:0 !important;padding:0 !important;}`;

// Inside the iframe the site's global stylesheet did not apply. Inline, it does,
// so the few element defaults that would visibly change the article are put back
// first — before the scoped rules, which override them where the article cares.
const SITE_RESET = (scope) =>
  `${scope} a{display:inline;text-decoration:underline;}\n`;

// Removes every element carrying `className`, contents included, tracking
// nesting so an inner element of the same tag does not end the match early.
function stripElementsByClass(html, className) {
  const opening = new RegExp(
    `<([a-z][\\w-]*)\\b[^>]*\\bclass\\s*=\\s*["'][^"']*\\b${className}\\b[^"']*["'][^>]*>`,
    "i"
  );

  let out = html;
  let match;
  while ((match = opening.exec(out))) {
    const tag = match[1];
    const scanner = new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi");
    scanner.lastIndex = match.index + match[0].length;

    let depth = 1;
    let end = out.length;
    let step;
    while ((step = scanner.exec(out))) {
      depth += step[1] ? -1 : 1;
      if (depth === 0) {
        end = scanner.lastIndex;
        break;
      }
    }

    out = out.slice(0, match.index) + out.slice(end);
  }
  return out;
}

// The article template carries a print-only header repeating the title,
// subtitle, and byline. It is display:none on screen, and the page renders all
// three itself, so inline it would only add hidden duplicate text — including a
// second <h1> — to every post.
const PRINT_HEADER_CLASS = "pdf-header-block";

/**
 * Splits a CMS HTML document into inline-renderable parts.
 *
 * @returns {{html: string, css: string, scripts: Array<{src?: string, code?: string}>}}
 *   `html` is the document body with <style>/<script> removed, `css` is every
 *   stylesheet rewritten to the post scope, and `scripts` are the document's
 *   scripts in source order, to be replayed after mount.
 */
export function preparePostHtml(raw, scope = POST_SCOPE) {
  const doc = String(raw || "");
  const selector = `.${scope}`;

  const styles = [];
  for (const m of doc.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    styles.push(m[1]);
  }

  // Injected markup never executes its scripts, so they are pulled out here and
  // replayed by the page. Order matters: a CDN <script src> has to run before
  // the inline code that uses it.
  const scripts = [];
  for (const m of doc.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const src = /\bsrc\s*=\s*["']([^"']+)["']/i.exec(m[1]);
    if (src) scripts.push({ src: src[1] });
    else if (m[2].trim()) scripts.push({ code: m[2] });
  }

  const body = /<body\b[^>]*>([\s\S]*)<\/body>/i.exec(doc);
  let html = body
    ? body[1]
    : doc
        .replace(/<!doctype[^>]*>/gi, "")
        .replace(/<head\b[\s\S]*?<\/head>/gi, "")
        .replace(/<\/?html\b[^>]*>/gi, "");

  html = stripElementsByClass(html, PRINT_HEADER_CLASS)
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .trim();

  const css =
    SITE_RESET(selector) +
    styles.map((s) => scopeCss(s, selector)).join("\n") +
    CONTAINER_RESET(selector);

  return { html, css, scripts };
}
