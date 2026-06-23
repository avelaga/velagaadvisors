import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const whyChooseUs = [
    {
      title: "Fiduciary Foundation",
      body: "Fee-only and independent. We do not sell insurance or any other financial products, nor do we accept commissions, ensuring our advice is aligned exclusively with client objectives."
    },
    {
      title: "Institutional Portfolio Design",
      body: "We move beyond traditional stock and bond models to access a broader investment universe, including private markets and real estate. This institutional breadth provides the structural stability required for enduring financial resilience."
    },
    {
      title: "Tax-Optimized Strategies",
      body: "We drive structural alpha by viewing every investment decision through a tax lens. For complex portfolios, we integrate Direct Indexing, Equity Hedging, and Option Overlays to maximize after-tax retention and enhance long-term wealth."
    },
    {
      title: "Boutique Service",
      body: "We combine institutional rigor with personal accessibility. A client is never a number, but a family we are proud to serve."
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
          <div className={styles.header}>Private Wealth Management</div>
          <div className={styles.subheader}>Portfolio Architecture | Personal Stewardship</div>
          <div className={styles.body}>
            <div className={styles.bodyText}>We are a boutique investment office defined by analytical rigor and a passion for architecting resilient family portfolios. As a steady partner for our clients, we move beyond traditional management to provide the dedicated oversight required to grow and protect their family legacy.
            </div>
            <Image src="/homegraphic.png" width={200} height={0} style={{ width: '200px', height: 'auto' }} className={styles.bodyImage} alt="graphic showing holistic services"/>
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
