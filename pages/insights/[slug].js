import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Insights.module.css";
import { getPost, getAllSlugs, postMeta, postExcerpt } from "@/data/insights";

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
        <div className={styles.postMeta}>{postMeta(post)}</div>

        {post.og_image && (
          <div className={styles.postHero}>
            <img src={post.og_image} alt={post.title} className={styles.heroImg} />
          </div>
        )}

        <div
          className={styles.postBody}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>
  );
}
