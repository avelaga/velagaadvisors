import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "@/styles/Insights.module.css";
import { getPost, getAllSlugs, postMeta, postExcerpt } from "@/data/insights";
import { isFullDocument, preparePostHtml, POST_SCOPE } from "@/data/postHtml";
import { absoluteUrl } from "@/data/site";

// A post written in the CMS's HTML mode is a complete <!DOCTYPE html> document
// with its own global <style> block. It is taken apart at build time so it can
// be rendered as real page markup — its stylesheet rewritten to reach no further
// than the post container. It used to render in an iframe, which contained the
// CSS but also hid the entire article body from search engines.
function PostDocument({ doc }) {
  const scriptHost = useRef(null);

  useEffect(() => {
    const host = scriptHost.current;
    if (!host || !doc.scripts.length) return;

    // Markup injected as a string never runs its own <script> tags, so the
    // article's charts and calculators are replayed here in source order,
    // waiting on each external script before the inline code that uses it.
    let cancelled = false;

    (async () => {
      for (const script of doc.scripts) {
        if (cancelled) return;
        const el = document.createElement("script");
        if (script.src) {
          await new Promise((done) => {
            el.src = script.src;
            el.async = false;
            el.onload = done;
            el.onerror = done;
            host.appendChild(el);
          });
        } else {
          el.textContent = script.code;
          host.appendChild(el);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [doc]);

  return (
    <>
      <Head>
        <style key="post-css" dangerouslySetInnerHTML={{ __html: doc.css }} />
      </Head>
      <div className={POST_SCOPE} dangerouslySetInnerHTML={{ __html: doc.html }} />
      <div ref={scriptHost} hidden />
    </>
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

  // Only the prepared parts are serialized for a full document — shipping the
  // raw source as well would put the whole article in the page twice.
  if (isFullDocument(post.content)) {
    const { content, ...meta } = post;
    return { props: { post: meta, doc: preparePostHtml(content) } };
  }

  return { props: { post, doc: null } };
}

export default function InsightPost({ post, doc }) {
  const canonical = absoluteUrl(`/insights/${post.slug}`);

  return (
    <>
      <Head>
        <title>{`Velaga Advisors - ${post.title}`}</title>
        <meta property="title" content={post.title} />
        <meta name="description" content={postExcerpt(post)} />
        <meta name="og:description" content={postExcerpt(post)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:site_name" content="Velaga Advisors" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={absoluteUrl(post.og_image || "/logoPreview.webp")} />
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
        <Link href="/insights" className={styles.back}><svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>BACK TO INSIGHTS</Link>

        <h1 className={styles.postTitle}>{post.title}</h1>
        {post.subtitle && (
          <p className={styles.postSubtitle}>{post.subtitle}</p>
        )}
        <div className={styles.postMeta}>{postMeta(post)}</div>
        {post.tags?.length > 0 && (
          <div className={styles.tagRow}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}

        {doc ? (
          <PostDocument doc={doc} />
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
