import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "@/styles/Insights.module.css";
import { getPost, getAllSlugs, postMeta, postExcerpt } from "@/data/insights";

// A post written in the CMS's HTML mode can be a complete <!DOCTYPE html>
// document with its own <style> block. Injecting that inline would leak its
// global CSS onto the whole site, so render it in an isolated, auto-sized
// iframe instead. Rich-text posts are partial HTML and render inline.
function isFullDocument(html) {
  return /<!doctype\s+html|<html[\s>]/i.test(html || "");
}

// Neutralize the embedded document's own page background/margins so its sides
// blend into the site instead of showing the document's body color as gray
// boxes around a narrower centered container.
const FRAME_RESET =
  "<style>html,body{background:transparent !important;margin:0 !important;}</style>";

function PostFrame({ html, title }) {
  const ref = useRef(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    function resize() {
      try {
        const doc = iframe.contentDocument;
        if (doc?.documentElement) {
          iframe.style.height = doc.documentElement.scrollHeight + "px";
        }
      } catch {
        /* same-origin srcdoc, but guard anyway */
      }
    }

    resize();
    iframe.addEventListener("load", resize);
    window.addEventListener("resize", resize);
    // Late layout shifts (web fonts, images) — recheck briefly after load.
    const poll = setInterval(resize, 400);
    const stop = setTimeout(() => clearInterval(poll), 4000);

    return () => {
      iframe.removeEventListener("load", resize);
      window.removeEventListener("resize", resize);
      clearInterval(poll);
      clearTimeout(stop);
    };
  }, [html]);

  return (
    <iframe
      ref={ref}
      title={title}
      srcDoc={html + FRAME_RESET}
      className={styles.postFrame}
      sandbox="allow-same-origin allow-popups"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: (await getAllSlugs()).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
}

export default function InsightPost({ post }) {
  return (
    <>
      <Head>
        <title>{`Velaga Advisors - ${post.title}`}</title>
        <meta property="title" content={post.title} />
        <meta name="description" content={postExcerpt(post)} />
        <meta name="og:description" content={postExcerpt(post)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:site_name" content="Velaga Advisors" />
        <meta property="og:image" content={post.og_image || "./logoPreview.webp"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
        {/* google tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0GC6KBE56"></script>
        <script>
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-Y0GC6KBE56');
                    `}
        </script>
      </Head>

      <div className={styles.post}>
        <Link href="/insights" className={styles.back}>← BACK TO INSIGHTS</Link>

        <h1 className={styles.postTitle}>{post.title}</h1>
        {post.subtitle && (
          <p className={styles.postSubtitle}>{post.subtitle}</p>
        )}
        <div className={styles.postMeta}>{postMeta(post)}</div>

        {isFullDocument(post.content) ? (
          // Self-contained HTML document: render its body in an isolated iframe
          // so its global CSS can't leak onto the site.
          <PostFrame html={post.content} title={post.title} />
        ) : (
          <>
            {post.og_image && (
              <div className={styles.postHero}>
                <img src={post.og_image} alt={post.title} className={styles.heroImg} />
              </div>
            )}

            <div
              className={styles.postBody}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </>
        )}
      </div>
    </>
  );
}
