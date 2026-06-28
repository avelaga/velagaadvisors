import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Insights.module.css";
import { getAllPosts, postMeta, listExcerpt } from "@/data/insights";
import { client } from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export async function getStaticProps() {
  const posts = await getAllPosts();
  const res = await client.queries.insightsPage({ relativePath: "insights.json" });
  return {
    props: {
      posts,
      data: res.data,
      query: res.query,
      variables: res.variables,
    },
  };
}

// Hero from og_image when present, otherwise a styled placeholder.
function Hero({ post, className }) {
  return (
    <div className={className}>
      {post.og_image ? (
        <img src={post.og_image} alt={post.title} className={styles.heroImg} />
      ) : (
        <div className={styles.heroPlaceholder} />
      )}
    </div>
  );
}

export default function Insights({ posts, query, variables, data: tinaData }) {
  const { data } = useTina({ query, variables, data: tinaData });
  const page = data.insightsPage;

  return (
    <>
      <Head>
        <title>Velaga Advisors - Insights</title>
        <meta property="title" content="Velaga Advisors" />
        <meta name="description" content="Insights from Velaga Advisors" />
        <meta name="og:description" content="Insights from Velaga Advisors" />
        <meta property="og:title" content="Velaga Advisors" />
        <meta property="og:site_name" content="Velaga Advisors" />
        <meta property="og:image" content="./logoPreview.webp" />
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

      <div className={styles.list}>
        <div className={styles.intro}>
          <h1 className={styles.title} data-tina-field={tinaField(page, "title")}>{page.title}</h1>
        </div>

        <div className={styles.introBlock}>
          <div className={styles.introBody} data-tina-field={tinaField(page, "intro")}>
            <TinaMarkdown content={page.intro} />
          </div>
        </div>

        <div className={styles.rule} />

        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.slug}`}
                className={`${styles.row} ${post.og_image ? "" : styles.rowNoHero}`}
              >
                {post.og_image && <Hero post={post} className={styles.rowHero} />}
                <div>
                  <h2 className={styles.rowTitle}>{post.title}</h2>
                  {post.subtitle && (
                    <div className={styles.rowSubtitle}>{post.subtitle}</div>
                  )}
                  <div className={styles.rowMeta}>{postMeta(post)}</div>
                  {listExcerpt(post) && (
                    <p className={styles.rowExcerpt}>{listExcerpt(post)}</p>
                  )}
                  <div className={styles.readMoreRow}>READ MORE<svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>No posts yet.</div>
          </div>
        )}
      </div>
    </>
  );
}
