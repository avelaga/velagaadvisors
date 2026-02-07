import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Services.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {

  const whoWeServeContent = [
    {
      header: "High Net Worth Families",
      focus: "Preservation & Resilience",
      body: "Comprehensive oversight for Physicians and Executives in their peak wealth phase, with an emphasis on risk mitigation and tax-efficient structures."
    },
    {
      header: "Specialized Medical & Technical Pros",
      focus: "Acceleration & Optimization",
      body: "Data-driven accumulation strategies for Physicians and Tech Leaders focused on tax efficiency and aggressive wealth building."
    },
    {
      header: "Business Owners",
      focus: "Strategic Synchronization",
      body: "Integrating corporate success with personal wealth through retirement plan optimization and tax-efficient business-to-personal synchronization."
    },
    {
      header: "Emerging Professionals",
      focus: "The Structural Roadmap",
      body: "Future-proofing for Residents, Fellows, and High-Potential Associates through benefit optimization and early-stage structural planning."
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
            Who Do We Serve?
          </div>
          <div className={styles.body}>
            We work with clients who value a data-driven approach to wealth. Our process is designed for those who recognize that their financial complexity - or their future earning potential - demands a professional architectural framework.
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
            We offer three ways to engage with our firm, allowing you to choose the level of integration that fits your financial complexity.
          </div>
          <div className={styles.subheader}>
            1. Private Wealth Management (The Unified Package)
          </div>
          <div className={styles.body}>
            Our core offering for families seeking a comprehensive "Family CIO" experience. This is our most integrated engagement, designed for those who require a Strategic Anchor for their entire financial life. We combine Institutional Portfolio Design, Strategic Planning, and Tax-Optimized Engineering into a single, synchronized service. This model ensures that your investment architecture and life goals are managed with absolute alignment.
          </div>
          <div className={styles.subheader}>
            2. Strategic Financial Planning
          </div>
          <div className={styles.body} >
            A data-driven blueprint for clarity and direction. For clients who require a high-precision roadmap but wish to maintain their current investment holdings, we offer stand-alone financial planning. Applying a disciplined, analytical framework, we develop a comprehensive plan that addresses cash flow, retirement modeling, tax efficiency, and estate coordination.
          </div>
          <div className={styles.subheader}>
            3. Strategic Consultation
          </div>
          <div className={styles.body}>
            Bespoke advisory for complex, project-based financial needs. We provide expert consultation services for specific financial projects that fall outside of traditional wealth management.
          </div>
        </div>
      </main>
    </>
  );
}
