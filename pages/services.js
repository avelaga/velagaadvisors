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
          <h1 className={styles.header}>
            Our Services & Engagement
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
            Engagement Models
          </div>
          <div className={styles.body}>
            We offer three ways to engage with the firm, allowing for a level of integration that fits the specific financial complexity of each family.
          </div>
          <div className={styles.subheader}>
            Private Wealth Management (The Unified Package)
          </div>
          <div className={styles.body}>
            This is our most integrated engagement, designed for families seeking a comprehensive "family CIO" experience. We serve as a <b>strategic anchor</b> for your entire financial life, combining institutional portfolio design, strategic planning, and tax optimization into a single, synchronized service. This model ensures that your investment architecture and life goals are managed with absolute alignment.
          </div>
          <div className={styles.subheader}>
            Strategic Financial Planning
          </div>
          <div className={styles.body} >
            This is a standalone service for clients who require a high-precision roadmap but wish to maintain their current investment holdings. We develop a comprehensive plan addressing cash flow, retirement modeling, tax efficiency, and estate coordination.
          </div>
          <div className={styles.subheader}>
            Strategic Consultation
          </div>
          <div className={styles.body}>
            This is a bespoke advisory service for complex, project-based financial needs that fall outside of traditional wealth management.
          </div>
        </div>
      </main>
    </>
  );
}
