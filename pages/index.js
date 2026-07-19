import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { client } from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const res = await client.queries.home({ relativePath: "home.json" });
  return {
    props: {
      data: res.data,
      query: res.query,
      variables: res.variables,
    },
  };
}

export default function Home(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const home = data.home;

  return (
    <>
      <Head>
        <title>Velaga Advisors</title>
        <meta property="title" content="Velaga Advisors" />
        <meta name="description" content="Velaga Advisors" />
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
      <main className={styles.home}>
        <div className={styles.content}>
          <div className={styles.header} data-tina-field={tinaField(home, "header")}>{home.header}</div>
          <div className={styles.subheader} data-tina-field={tinaField(home, "subheader")}>{home.subheader}</div>
          <div className={styles.body}>
            <div className={styles.bodyText} data-tina-field={tinaField(home, "bodyText")}>{home.bodyText}
            </div>
            <Image src={home.bodyImage} width={200} height={0} style={{ width: '200px', height: 'auto' }} className={styles.bodyImage} alt="graphic showing holistic services" data-tina-field={tinaField(home, "bodyImage")}/>
          </div>
          <div className={styles.whyChooseUsHeader} data-tina-field={tinaField(home, "whyChooseUsHeader")}>{home.whyChooseUsHeader}</div>
          <div className={styles.whyChooseUs}>
            {home.reasons?.map((reason, i) => (
               <div className={styles.reason} key={i}>
              <div className={styles.reasonHeader} data-tina-field={tinaField(reason, "title")}>{reason.title}</div>
              <div className={styles.reasonBody} data-tina-field={tinaField(reason, "body")}>{reason.body}
              </div>
            </div>
            ))}
          </div>
          {/* <a href="https://docs.google.com/forms/d/18oA11rmQZ94HzUDiNUoW-95oIC-rVxt0POIYccwZRT8/edit" target="blank" className={styles.button} >Get Started Today</a> */}

          <div className={styles.whoWeServeHeading} data-tina-field={tinaField(home, "whoWeServeHeader")}>{home.whoWeServeHeader}</div>
          <div className={styles.whoWeServeIntro} data-tina-field={tinaField(home, "whoWeServeIntro")}>{home.whoWeServeIntro}</div>
          <ul className={styles.whoWeServeList}>
            {[
              { labelField: "whoWeServeBullet1Label", sep: " ", textField: "whoWeServeBullet1Text" },
              { labelField: "whoWeServeBullet2Label", sep: " ", textField: "whoWeServeBullet2Text" },
              { labelField: "whoWeServeBullet3Label", sep: " ", textField: "whoWeServeBullet3Text" },
              { labelField: "whoWeServeBullet4Label", sep: ", ", textField: "whoWeServeBullet4Text" },
            ].map((b) => (
              <li key={b.textField} className={styles.whoWeServeBullet}>
                <b data-tina-field={tinaField(home, b.labelField)}>{home[b.labelField]}</b>{b.sep}
                <span data-tina-field={tinaField(home, b.textField)}>{home[b.textField]}</span>
              </li>
            ))}
          </ul>
          {home.whoWeServeFootnote && (
            <div className={styles.footnote} data-tina-field={tinaField(home, "whoWeServeFootnote")}>
              {home.whoWeServeFootnote}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
