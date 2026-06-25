import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Insights.module.css";
import { getPost, getAllSlugs, postMeta } from "@/data/insights";

export async function getStaticPaths() {
  return {
    paths: getAllSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { post: getPost(params.slug) } };
}

function Block({ block }) {
  switch (block.type) {
    case "lead":
      return <p className={styles.lead}>{block.text}</p>;
    case "h":
      return <h3 className={styles.subhead}>{block.text}</h3>;
    case "quote":
      return <blockquote className={styles.quote}>{block.text}</blockquote>;
    case "ul":
      return (
        <ul className={styles.bullets}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "p":
    default:
      return <p className={styles.paragraph}>{block.text}</p>;
  }
}

export default function InsightPost({ post }) {
  return (
    <>
      <Head>
        <title>{`Velaga Advisors - ${post.title}`}</title>
        <meta property="title" content={post.title} />
        <meta name="description" content={post.excerpt} />
        <meta name="og:description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
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

      <div className={styles.post}>
        <Link href="/insights" className={styles.back}>← BACK TO INSIGHTS</Link>

        <h1 className={styles.postTitle}>{post.title}</h1>
        <div className={styles.postMeta}>{postMeta(post)}</div>

        <div className={styles.postHero}>
          {post.image ? (
            <img src={post.image} alt={post.title} className={styles.heroImg} />
          ) : (
            <div className={styles.heroPlaceholder} />
          )}
        </div>

        <div className={styles.postBody}>
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className={styles.postRule} />
        <div className={styles.byline}>
          Written by <b>{post.author}</b>{post.authorRole}
        </div>
      </div>
    </>
  );
}
