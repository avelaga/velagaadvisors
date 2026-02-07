import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const whyChooseUs = [
    {
      title: "Unbiased Fiduciary Roots",
      body: "Fee-only and independent. No products or commissions are accepted, ensuring advice is aligned exclusively with client objectives."
    },
    {
      title: "Institutional Portfolio Design",
      body: "We construct portfolios utilizing a Liquidity Waterfall to prioritize immediate cash flow needs while protecting long-term capital compounding."
    },
    {
      title: "Tax-Optimized Strategies",
      body: "We drive structural alpha through advanced portfolio design. For qualifying portfolios, we integrate Option Overlays, Equity Hedging, and Direct Indexing to optimize tax outcomes."
    },
    {
      title: "Boutique Service",
      body: "We combine institutional rigor with personal accessibility. Client is never a number; but a family we are proud to serve."
    }
  ]

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
          <div className={styles.header}>Private Wealth Management</div>
          <div className={styles.subheader}>Strategic Architecture. Personal Stewardship.</div>
          <div className={styles.body}>
            <div className={styles.bodyText}>We are a boutique investment office defined by analytical rigor and a passion for architecting resilient family portfolios. As a Strategic Anchor for our clients, we move beyond traditional management to provide the dedicated oversight required to grow and protect their family legacies.
            </div>
            <Image src="/homegraphic.png" width={200} height={0} style={{ width: '200px', height: 'auto' }} className={styles.bodyImage} />
          </div>
          <div className={styles.whyChooseUsHeader}>Why Choose Us</div>
          <div className={styles.whyChooseUs}>
            {whyChooseUs.map(reason => (
               <div className={styles.reason}>
              <div className={styles.reasonHeader}>{reason.title}</div>
              <div className={styles.reasonBody}>{reason.body}
              </div>
            </div>
            ))}
          </div>
          {/* <a href="https://docs.google.com/forms/d/18oA11rmQZ94HzUDiNUoW-95oIC-rVxt0POIYccwZRT8/edit" target="blank" className={styles.button} >Get Started Today</a> */}
        </div>
      </main>
    </>
  );
}
