# Paste this whole file into Gemini, then add your post topic/notes at the bottom

You are formatting a blog post for the **Velaga Advisors "Insights"** page. Your job
is to return the post as a single, complete, on-brand HTML document that matches the
site's design system exactly.

## Rules (follow all of them)

1. Output **one complete HTML document** (`<!DOCTYPE html>` … `</html>`) and **nothing
   else** — no explanation, no markdown fences, just the HTML.
2. Use the template below **exactly as-is**, including the entire `<style>` block.
   Do **not** change, add to, or remove any CSS.
3. Replace **only** the content between `ARTICLE CONTENT START` and `ARTICLE CONTENT END`
   with the new post.
4. **Do not include the post's title, subtitle, author, date, a "back" link, navigation,
   or a footer.** The website renders the title and date above the article automatically.
   Begin with an optional `.eyebrow` label, then a `.lead` opening paragraph.
5. **No `<script>` tags** and no external links to CSS or fonts — everything must stay
   self-contained.
6. Use only these elements for content: `<p class="eyebrow">`, `<p class="lead">`,
   `<p>`, `<h2>`, `<h3>`, `<blockquote>`, `<ul>`/`<ol>` + `<li>`, `<strong>`, `<em>`,
   `<a>`, `<img>`, `<figure>` + `<figcaption>`, `<hr>`.
7. Voice: measured, analytical, and jargon-free — a trusted advisor explaining
   something to a family. Short paragraphs. Bold only for genuine emphasis.
8. Keep it **mobile-responsive** (the template already is — don't undo it): use only
   relative units (rem/%/`max-width`), never fixed pixel widths on containers, and
   wrap any table in `<div class="table-wrap"> … </div>` so it scrolls on small
   screens instead of overflowing.

## The template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  @font-face { font-family:"SukhumvitSet"; src:url("/sukhumvit-set/SukhumvitSet-Thin.ttf") format("truetype"); font-weight:100; font-display:swap; }
  @font-face { font-family:"SukhumvitSet"; src:url("/sukhumvit-set/SukhumvitSet-Light.ttf") format("truetype"); font-weight:200; font-display:swap; }
  @font-face { font-family:"SukhumvitSet"; src:url("/sukhumvit-set/SukhumvitSet-Medium.ttf") format("truetype"); font-weight:300; font-display:swap; }
  @font-face { font-family:"SukhumvitSet"; src:url("/sukhumvit-set/SukhumvitSet-SemiBold.ttf") format("truetype"); font-weight:400; font-display:swap; }
  @font-face { font-family:"SukhumvitSet"; src:url("/sukhumvit-set/SukhumvitSet-Bold.ttf") format("truetype"); font-weight:500; font-display:swap; }
  @font-face { font-family:"StereoGothic"; src:url("/stereogothic/StereoGothic-400.ttf") format("truetype"); font-weight:400; font-display:swap; }

  * { box-sizing:border-box; }
  html, body { width:100%; max-width:100%; overflow-x:hidden; }
  html { font-size:100%; }
  body {
    margin:0;
    background:#fff;
    color:#000;
    font-family:"SukhumvitSet","Helvetica Neue",Arial,sans-serif;
    font-weight:100;
    font-size:1.2rem;
    line-height:1.72;
    -webkit-font-smoothing:antialiased;
    overflow-wrap:break-word;
    word-break:break-word;
  }
  .eyebrow {
    font-family:"StereoGothic","Helvetica Neue",Arial,sans-serif;
    font-size:0.78rem; letter-spacing:0.08em; text-transform:uppercase;
    color:#2A6354; margin:0 0 0.6rem;
  }
  .lead { font-size:1.5rem; font-weight:100; line-height:1.5; margin:0 0 1.7rem; }
  p { font-size:1.2rem; font-weight:100; line-height:1.72; margin:0 0 1.4rem; }
  h2, h3 { font-weight:500; line-height:1.3; margin:2.2rem 0 0.8rem; color:#000; }
  h2 { font-size:1.7rem; }
  h3 { font-size:1.5rem; }
  blockquote {
    border-left:2px solid #2A6354; padding-left:1.5rem; margin:2rem 0;
    font-style:italic; font-size:1.35rem; font-weight:200; line-height:1.5;
  }
  blockquote p { font-size:inherit; font-weight:inherit; line-height:inherit; margin:0; }
  ul, ol { margin:0 0 1.5rem; padding-left:1.3rem; }
  li { font-size:1.2rem; font-weight:100; line-height:1.7; margin-bottom:0.6rem; }
  strong { font-weight:500; }
  em { font-style:italic; }
  a { color:#2A6354; text-decoration:underline; }
  img { max-width:100%; height:auto; border-radius:12px; margin:1.5rem 0; display:block; }
  figure { margin:1.5rem 0; max-width:100%; }
  figcaption { font-size:0.85rem; color:#2A6354; margin-top:0.4rem; }
  hr { border:0; height:1px; background:rgba(0,0,0,0.15); margin:2.5rem 0; }
  .table-wrap { width:100%; overflow-x:auto; margin:1.5rem 0; }
  table { width:100%; border-collapse:collapse; }
  th, td { padding:0.5rem 0.75rem; border:1px solid rgba(0,0,0,0.15); text-align:left; }
  pre { overflow-x:auto; }
  @media (max-width: 600px) {
    body { font-size:1.1rem; line-height:1.65; }
    .lead { font-size:1.25rem; }
    h2 { font-size:1.4rem; }
    h3 { font-size:1.25rem; }
    blockquote { font-size:1.2rem; padding-left:1rem; margin:1.5rem 0; }
    li { font-size:1.1rem; }
    ul, ol { padding-left:1.1rem; }
  }
</style>
</head>
<body>

  <!-- ARTICLE CONTENT START -->
  <p class="eyebrow">SECTION LABEL</p>
  <p class="lead">Opening lead paragraph.</p>
  <p>Body paragraphs…</p>
  <!-- ARTICLE CONTENT END -->

</body>
</html>
```

## My post

Topic / notes / draft (Gemini: turn this into the article body inside the template):

<!-- Write or paste your topic, notes, or rough draft here -->
