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
        <meta name="description" content="Velaga Advisors - Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.services}>
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
          Our holistic approach to financial planning involves a thorough evaluation of client's current financial situation, goals and aspirations and creating a robust plan to help the client navigate through the life stages and achieve those goals. We will use current net worth, tax liabilities, asset allocation, and future retirement and estate plans to predict future cash flows, asset values, and withdrawal plans.
          <br /><br />
          Typical topics reviewed in a financial plan may include but are not limited to:
          </div>
          <div className={styles.bodyGraphic}>
            <div className={styles.graphicText}> 
            Cash Flow, Expenses and Net Worth<br />
            Employee Benefits Optimization<br />
            Education/College Savings<br />
            Risk Management<br />
            Retirement Planning<br />
            Investment Planning<br />
            Tax Planning<br />
            Estate Preservation</div>
            <Image src="/services.png" width={200} height={0} style={{ width: '600px', height: 'auto' }} className={styles.bodyImage}/>
          </div>

         

        <div className={styles.subheader}>
          Consultation Services
        </div>
        <div className={styles.body}>
          This service is appropriate for clients who need assistance with individual topics. This is not a detailed financial review and will not provide/result in a complete financial plan. Client may select individual topics above, or other topics as may be deemed appropriate. The individual topics that will be included in this service will be outlined and agreed upon on the financial planning and consulting agreement.</div>
      </main>
    </>
  );
}
