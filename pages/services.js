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
        <meta property="og:image" content="./krishna.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.services}>
        <div className={styles.content}>
          <div className={styles.subheader}>
            Investment Management
          </div>
          <div className={styles.body}>
            We offer clients ongoing asset management services through determining individual investment goals, time horizons, objectives, and risk tolerance. Investment strategies, investment selection, asset allocation, portfolio monitoring and the overall investment program will be based on the above factors to ensure a healthy and resilient portfolio.
          </div>
          <div className={styles.subheader}>
            Financial Planning
          </div>
          <div className={`${styles.body} ${styles.finPlan}`} >
            Our holistic approach to financial planning involves a thorough evaluation of the client's current financial situation, earning & saving potential, goals & aspirations, and creating a robust plan - helping the client navigate through the life stages, achieve those goals, and have a financially secure life in retirement.
            <br /><br />
            Typical topics reviewed in a financial plan include:
          </div>
          <div className={styles.bodyGraphic}>
            <div className={styles.graphicText}>
              Financial Goals <br />
              Personal Net worth<br />
              Cash Flow Analysis<br />
              Employee Benefits<br />
              Education Planning<br />
            </div>
            <div className={styles.graphicText}>
              Risk Management<br />
              Retirement Planning<br />
              Investment Planning<br />
              Tax Planning<br />
              Estate Preservation
            </div>
            <Image src="/services.png" width={1000} height={0} style={{ width: '1000px', height: 'auto' }} className={styles.bodyImage} />
          </div>

          <div className={styles.subheader}>
            Consultation Services
          </div>
          <div className={styles.body}>
            This service is appropriate for clients who need assistance with individual topics. This is not a detailed financial review and will not provide/result in a complete financial plan. Client may select individual topics above, or other topics as may be deemed appropriate. The individual topics that will be included in this service will be outlined and agreed upon on the financial planning and consulting agreement.
          </div>
        </div>
      </main>
    </>
  );
}
