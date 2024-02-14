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
        <meta name="description" content="Velaga Advisors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
          <div className={styles.header}>Investment Management & Financial Planning</div>
          <div className={styles.subheader}>Your Partner in the Pursuit of Wealth and Prosperity</div>
          <div className={styles.body}>
            <div className={styles.bodyText}>We design personalized financial solutions that resonate with your values and objectives, guiding you towards a future marked by financial security and enduring success.
          </div>
          <Image src="/homestock.png" width={200} height={0} style={{ width: '600px', height: 'auto' }} className={styles.bodyImage}/>
        </div>
        <div className={styles.subheader}>Why Choose Us</div>
        <div className={styles.whyChooseUs}>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>Simplified Approach</div>
            <div className={styles.reasonBody}>We break down complex financial concepts into clear, easy-to-understand financial strategies tailored to your needs and risk tolerance.
            </div>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>Your Values Matter</div>
            <div className={styles.reasonBody}>We collaborate with you to integrate your values into your financial strategy, ensuring your plan reflects what matters most to you.
            </div>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>Transparent Communication</div>
            <div className={styles.reasonBody}>We believe in open and honest communication. Stay informed and empowered throughout our journey.
            </div>
          </div>
          <div className={styles.reason}>
            <div className={styles.reasonHeader}>Your Partner in Success</div>
            <div className={styles.reasonBody}>We are committed to fostering a relationship built on trust & reliability and want to be your long-term partner on the journey to financial success.
            </div>
          </div>
        </div>

        <a href="https://docs.google.com/forms/d/18oA11rmQZ94HzUDiNUoW-95oIC-rVxt0POIYccwZRT8/edit" target="blank" className={styles.button} >Get Started Today</a>
      </main>
    </>
  );
}
