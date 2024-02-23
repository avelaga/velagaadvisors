import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Velaga Advisors</title>
        <meta property="title" content="Velaga Advisors" />
        <meta name="description" content="Velaga Advisors" />
        <meta name="og:description" content="Velaga Advisors" />
        <meta property="og:title" content="Velaga Advisors" />
        <meta property="og:site_name" content="Velaga Advisors" />
        <meta property="og:image" content="./krishna.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        {/* google tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0GC6KBE56"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-Y0GC6KBE56');
        </script>
      </Head>
      <main className={styles.home}>
        <div className={styles.content}>
          <div className={styles.header}>Investment Management & Financial Planning</div>
          <div className={styles.subheader}>Your Partner in the Pursuit of Wealth and Prosperity</div>
          <div className={styles.body}>
            <div className={styles.bodyText}>We design personalized financial solutions that resonate with your values and objectives, guiding you towards a future marked by financial security and enduring success.
            </div>
            <Image src="/skylineAI.png" width={200} height={0} style={{ width: '600px', height: 'auto' }} className={styles.bodyImage} />
          </div>
          <div className={styles.whyChooseUsHeader}>Why Choose Us</div>
          <div className={styles.whyChooseUs}>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Simplified Approach</div>
              <div className={styles.reasonBody}>We break down complex financial concepts into easy-to-understand financial strategies tailored to your needs and risk tolerance.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Your Values Matter</div>
              <div className={styles.reasonBody}>We collaborate with you, ensuring your financial strategies and plans reflect the values that matter the most to you.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Communication</div>
              <div className={styles.reasonBody}>We believe in open and honest communication. Stay informed and empowered throughout our journey.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Partnership</div>
              <div className={styles.reasonBody}>We are committed to fostering a relationship built on trust & reliability and being your partner on the journey to financial success.
              </div>
            </div>
          </div>
          {/* <a href="https://docs.google.com/forms/d/18oA11rmQZ94HzUDiNUoW-95oIC-rVxt0POIYccwZRT8/edit" target="blank" className={styles.button} >Get Started Today</a> */}
        </div>
      </main>
    </>
  );
}
