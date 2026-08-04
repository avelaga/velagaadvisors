---
name: insights-post-html
description: Generate on-brand, self-contained HTML for a Velaga Advisors "Insights" blog post. Use whenever writing, formatting, or fixing a blog/Insights post that will be pasted into the pebble editor's HTML upload option, so it matches the site's design system (white theme, SukhumvitSet font, brand-green accents, type scale) instead of looking out of place. Also the source for the Gemini prompt the editor uses.
---

# Insights post HTML

Produce a **complete, self-contained HTML document** for a Velaga Advisors Insights
post that visually matches the site.

## Why this is needed (the key constraint)

On the site, a full HTML-document post (`<!DOCTYPE html>` / `<html>`) is rendered
inside an **isolated `<iframe>`** ([pages/insights/[slug].js](../../../pages/insights/[slug].js) → `PostFrame`).
That isolation is deliberate — it stops a post's CSS from leaking onto the rest of
the site — but it also means **none of the site's styles reach the post**. So every
style the post needs must be baked into the document itself. A post that doesn't
bring the design system with it renders as raw, unstyled HTML and looks out of place.

## Hard rules

1. **Output one complete HTML document** (`<!DOCTYPE html>` … `</html>`) with all
   styling inside a single `<style>` block. Self-contained, no external CSS.
2. **Body content only — no title, subtitle, author, date, "back" link, nav, or
   footer.** The site already renders the title + subtitle + meta directly above the
   article. Start the `<body>` with the article itself (optionally an `.eyebrow`,
   then a `.lead` paragraph).
3. **No `<script>`** — the iframe is sandboxed (`allow-same-origin allow-popups`)
   and will not execute scripts.
4. **Use the design tokens below verbatim.** Do not invent colors, fonts, or sizes.
5. Keep it **mobile-responsive**. The template's `<style>` already handles this — a
   `@media (max-width:600px)` block scales the lead/headings down, `overflow-wrap`
   stops long words/URLs from overflowing, and images are fluid. Preserve it: use
   only relative units (rem/%/`max-width`), never fixed pixel widths on containers,
   and wrap any table in `<div class="table-wrap"> … </div>` so it scrolls on phones.

## Design tokens (Insights = light theme)

| Token | Value | Use |
|---|---|---|
| Background | `#fff` | page/post background |
| Body text | `#000` | paragraphs, headings |
| Brand green | `#2A6354` | links, blockquote rule, eyebrow, captions |
| Body font | `SukhumvitSet`, fallback `"Helvetica Neue",Arial,sans-serif` | everything |
| Label font | `StereoGothic` | small uppercase eyebrows only |
| Radius | `12px` | images |

Fonts are served from `/sukhumvit-set/*.ttf` (weights 100/200/300/400/500) and
`/stereogothic/StereoGothic-400.ttf`. Because the iframe is same-origin, the
`@font-face` rules in the template load them for an exact match; if the file is
viewed standalone they fall back to Helvetica/Arial.

**Type scale:** lead `1.5rem`/weight 100 · body `1.2rem`/weight 100/line-height
1.72 · h2 `1.7rem`/weight 500 · h3 `1.5rem`/weight 500 · blockquote `1.35rem`
italic/weight 200 · list items `1.2rem`/weight 100. Bold = weight 500.

## How to generate

Start from [template.html](template.html) — it already contains the complete
`<style>` block (do not change it) and a worked content example. Replace only the
content between the `ARTICLE CONTENT START/END` markers with the new post, using
these elements: `.eyebrow` (optional kicker), `.lead` (opening paragraph), `<p>`,
`<h2>`/`<h3>`, `<blockquote>`, `<ul>`/`<ol>`, `<strong>`/`<em>`, `<a>`, `<img>`,
`<figure>`/`<figcaption>`, `<hr>`.

Voice: measured, analytical, jargon-free — an advisor explaining to a family.

## For the editor using Gemini

The file [gemini-prompt.md](gemini-prompt.md) is a single, self-contained prompt
(rules + full template) to paste into Gemini. Paste it, then add the topic/notes
for the post; Gemini returns ready-to-upload HTML. Paste that into the editor's
HTML option.
