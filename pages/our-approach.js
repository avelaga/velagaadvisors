import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/OurApproach.module.css";
import { client } from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await client.queries.ourApproach({ relativePath: "our-approach.json" });
  return {
    props: {
      data: res.data,
      query: res.query,
      variables: res.variables,
    },
  };
}

// Renders blank-line-separated paragraphs into <br/><br/> breaks.
function MultilineText({ value }) {
  const parts = (value || "").split(/\n\n+/);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <><br /><br /></>}
    </span>
  ));
}

export default function Services(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const page = data.ourApproach;

  return (
    <>
      <Head>
        <title>Velaga Advisors - Our Approach</title>
        <meta property="title" content="Velaga Advisors" />
        <meta name="description" content="Velaga Advisorss" />
        <meta name="og:description" content="Velaga Advisors" />
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
      <main className={styles.services}>
        <div className={styles.content}>
          <h1 className={styles.header} data-tina-field={tinaField(page, "header")}>
            {page.header}
          </h1>
          <div className={styles.body} data-tina-field={tinaField(page, "intro")}>
            <MultilineText value={page.intro} />
          </div>
          <div className={styles.divider} />
          <div className={styles.midheader} data-tina-field={tinaField(page, "whoWeServeHeader")}>
            {page.whoWeServeHeader}
          </div>
          <div className={styles.body} data-tina-field={tinaField(page, "whoWeServeIntro")}>
            {page.whoWeServeIntro}
          </div>
          <div className={styles.whoWeServe}>
            {page.cards?.map((card, i) => (
              <div className={styles.whoWeServeItem} key={i}>
                <div className={styles.whoWeServeTop}>
                  <div className={styles.whoWeServeHeader} data-tina-field={tinaField(card, "header")}>{card.header}</div>
                  <div className={styles.whoWeServeFocus}><b>Focus: </b><span data-tina-field={tinaField(card, "focus")}>{card.focus}</span></div>
                </div>
                <div className={styles.divider} />
                <div className={styles.whoWeServeBody} data-tina-field={tinaField(card, "body")}>{card.body}</div>
              </div>
            ))}
          </div>
          {page.whoWeServeFootnote && (
            <div className={styles.footnote} data-tina-field={tinaField(page, "whoWeServeFootnote")}>
              {page.whoWeServeFootnote}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
