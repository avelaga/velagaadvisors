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
        <meta property="og:image" content="./logoPreview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
          <div className={styles.header}>Investment Management & Financial Planning</div>
          <div className={styles.subheader}>Your Partner in the Pursuit of Wealth and Prosperity</div>
          <div className={styles.body}>
            <div className={styles.bodyText}>We design personalized financial solutions that resonate with your values and objectives, guiding you towards a future marked by financial security and enduring success.
            </div>
            <Image src="/homestock.png" width={200} height={0} style={{ width: '600px', height: 'auto' }} className={styles.bodyImage} />
          </div>
          <div className={styles.whyChooseUsHeader}>Why Choose Us</div>
          <div className={styles.whyChooseUs}>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Independent Advisor</div>
              <div className={styles.reasonBody}>We are fiduciaries,
                committed to acting exclusively in our clients’
                best interests. Our fee-only structure ensures
                unbiased advice, free from insurance sales or
                commissions.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Strategic Asset Allocation</div>
              <div className={styles.reasonBody}>We construct
                customized portfolios, blending public and
                private investments, that we manage to a
                particular risk, return and liquidity target that is
                appropriate for each client.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Holistic Wealth Management</div>
              <div className={styles.reasonBody}>By
                integrating investment management with
                financial planning and tax strategies, we plan to
                deliver better outcomes to achieve clients’
                individual financial goals, offering a very
                compelling value proposition.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonHeader}>Client Experience</div>
              <div className={styles.reasonBody}>Clients benefit from easy
                advisor access, technology-enabled seamless
                digital onboarding, and a client portal for on-
                demand performance reports and secure
                document exchange.
              </div>
            </div>
          </div>
          {/* <a href="https://docs.google.com/forms/d/18oA11rmQZ94HzUDiNUoW-95oIC-rVxt0POIYccwZRT8/edit" target="blank" className={styles.button} >Get Started Today</a> */}
        </div>
      </main>
    </>
  );
}
