import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Services.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  return (
    <>
      <Head>
        <title>Velaga Advisors - Services</title>
        <meta property="title" content="Velaga Advisors" />
        <meta name="description" content="Velaga Advisorss" />
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
      <main className={styles.services}>
        <div className={styles.content}>
          <div className={styles.header}>
            Who Do We Serve?
          </div>
          <div className={styles.whoWeServe}>
            <div className={styles.whoWeServeItem}>
              <div className={styles.whoWeServeHeader}>High Net Worth Individuals</div>
              <div className={styles.whoWeServeBody}>Preservation of wealth, Risk mitigation, Wealth transfer, and Tax optimization strategies
              </div>
            </div>
            <div className={styles.whoWeServeItem}>
              <div className={styles.whoWeServeHeader}>High Income Earners</div>
              <div className={styles.whoWeServeBody}>Wealth accumulation, Tax optimization, and College savings strategies
              </div>
            </div>
            <div className={styles.whoWeServeItem}>
              <div className={styles.whoWeServeHeader}>Early Career Professionals</div>
              <div className={styles.whoWeServeBody}>Getting on the right path for long term financial success
              </div>
            </div>
          </div>
          <div className={styles.header}>
            Services We Offer
          </div>
          <div className={styles.subheader}>
            Investment Management
          </div>
          <div className={styles.body}>
            We offer clients ongoing asset management services through determining individual investment goals, time horizons, objectives, and risk tolerance. Investment strategies, investment selection, asset allocation, portfolio monitoring, and the overall investment program will be based on the above factors to ensure a healthy and resilient portfolio.
          </div>
          <div className={styles.subheader}>
            Financial Planning
          </div>
          <div className={`${styles.body} ${styles.finPlan}`} >
            Our holistic approach to financial planning involves a thorough evaluation of the client's current financial situation, earning & saving potential, goals & aspirations, and creating a robust plan - helping the client navigate through the life stages, achieve those goals, and have a financially secure retirement.
            <br />
          </div>
          <div className={styles.cardHeader}>Typical topics included in a Financial Plan include:</div>
          <div className={styles.cardList}>
            <div className={styles.card}>Financial Goals</div>
            <div className={styles.card}>Personal Net worth</div>
            <div className={styles.card}>Cash Flow Analysis</div>
            <div className={styles.card}>Employee Benefits</div>
            <div className={styles.card}>Education Planning</div>
            <div className={styles.card}>Risk Management</div>
            <div className={styles.card}>Retirement Planning</div>
            <div className={styles.card}>Investment Planning</div>
            <div className={styles.card}>Tax Planning</div>
            <div className={styles.card}>Estate Preservation</div>
          </div>

          <div className={styles.subheader}>
            Consultation Services
          </div>
          <div className={styles.body}>
            We also offer consultation services on individual topics within the Financial Plan above or additional topics as desired.
          </div>
          <div className={styles.disclaimer}>
            As a Registered Investment Advisor, Velaga Advisors and its associates have a fiduciary duty to our clients to act in their best interests. We neither sell any insurance products nor do we receive any commissions or compensation other than the fee that our clients pay for our services.
          </div>
        </div>
      </main>
    </>
  );
}
