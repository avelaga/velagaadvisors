import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Services.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {

  const whoWeServeContent = [
    {
      header: "High-Net-Worth Families",
      focus: "Preservation & Resilience",
      body: "Seeking sophisticated risk mitigation and capital growth through an institutional-grade framework."
    },
    {
      header: "High-Income Professionals",
      focus: "Acceleration & Tax Efficiency",
      body: "Focused on intentional wealth accumulation for physicians, tech leaders, and executives seeking tax efficiency."
    },
    {
      header: "Business Owners",
      focus: "Strategic Synchronization",
      body: "Navigating the complexities of tax-efficient retirement plans and business-to-personal synchronization."
    },
    {
      header: "Early Career Professionals",
      focus: "The Structural Roadmap",
      body: "Establishing a disciplined, process-oriented framework to position for long-term financial independence."
    }
  ]

  return (
    <>
      <Head>
        <title>Velaga Advisors - Services</title>
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
          <h1 className={styles.header}>
            Private Wealth Management
          </h1>
          <div className={styles.midheader}>
            Who We Serve
          </div>
          <div className={styles.body}>
            We partner with a limited number of households to ensure the depth of our expertise adds the maximum value to each family's total wealth structure.
          </div>
          <div className={styles.whoWeServe}>
            {whoWeServeContent.map(card => (
              <div className={styles.whoWeServeItem}>
                <div className={styles.whoWeServeTop}>
                  <div className={styles.whoWeServeHeader}>{card.header}</div>
                  <div className={styles.whoWeServeFocus}><b>Focus: </b>{card.focus}</div>
                </div>
                <div className={styles.divider} />
                <div className={styles.whoWeServeBody}>{card.body}</div>
              </div>
            ))}
          </div>
          <div className={styles.divider} />
          <div className={`${styles.midheader} ${styles.servicesTitleSpace}`}>
            Our Approach
          </div>
          <div className={styles.body}>
            Velaga Advisors provides an integrated wealth management service designed for families seeking dedicated stewardship of their portfolios. We work to ensure every investment decision is perfectly aligned with your long-term objectives.
            <br /><br/>
            We believe that true wealth management goes beyond mere asset accumulation; it requires a unified framework where portfolio soundness, tax coordination, and financial planning operate together.
          </div>
        </div>
      </main>
    </>
  );
}
