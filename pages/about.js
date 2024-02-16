import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <>
            <Head>
                <title>Velaga Advisors - About</title>
                <meta name="description" content="Velaga Advisors - About" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.about}>
                <div className={styles.left}>
                    <Image src="/krishna.jpg" width={200} height={200} style={{ width: '90%', height: 'auto' }} className={styles.krisha} />
                    <div className={styles.education}>
                        <bold>MS</bold>, Computer Science, Kansas State University<br /><br />
                        <bold>MBA</bold>, Cox School of Business,
                        SMU<br /><br />
                        Passed CFA Level I and Level II Examinations
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.header}>Krishna Velaga</div>
                    <div className={styles.subheader}>Founder / Chief Investment Officer</div>
                    <div className={styles.body}>I have always been passionate about investments and financial planning and enjoyed sharing my knowledge to help family and friends in a wide range of areas such as investments, college savings, and tax planning. I started investing in public equity markets in the late 1990s and expanded into alternative investments (commercial estate, private equity, private debt etc.) in 2016 to diversify my portfolio and build more reliable passive income streams. That helped me gain a lot of knowledge and insights into new areas and eventually helped me reach financial independence early.
                        <br /><br />
                        I realized that many hardworking and professionally successful people could benefit from a trusted financial advisor who brings together knowledge of personal finances and taxes along with analytical and communication skills. I retired from a successful IT career in 2023 in order to pursue my passion and make a difference to others in these areas thus leading to the founding of Velaga Advisors.
                        <br /><br />
                        As a registered investment advisor, Velaga Advisors and its associates have a fiduciary duty to our clients to act in their best interests. We neither sell any insurance products nor do we receive any commissions or compensation other than the fee that our clients pay for our services.</div>
                </div>
            </main>
        </>
    );
}
