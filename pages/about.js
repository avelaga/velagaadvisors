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
            <main className={styles.about}>
                <div className={styles.content}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <Image src="/krishna.jpg" width={200} height={200} style={{ width: '100%', height: 'auto' }} className={styles.profilePic} />
                            <div className={styles.photoCredit}>Photo by Abhi Velaga</div>
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
                            <div className={styles.body}>
                                I have deep passion for Investment Research, Tax Strategies, College Savings, Retirement Planning and other areas of personal finance. My journey into the world of investing began in the late 1990s with equities and derivatives. In pursuit of higher risk-adjusted returns and generating quality passive income, I have later expanded my focus to include alternative investments such as Commercial Real Estate, Private Equity, Private Credit, Hedge Funds, and Structured Notes.
                                <br /><br />
                                I realized that many high net worth individuals busy in their professional careers could benefit from a trusted financial advisor who brings together knowledge of personal finance and taxes along with analytical and communication skills. I left a successful career in Information Technology in 2023 to pursue my passion and make a difference to others in these areas, thus leading to the founding of Velaga Advisors.
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.left}>
                            <Image src="/kalyan.jpg" width={200} height={200} style={{ width: '100%', height: 'auto' }} className={styles.profilePic} />
                            <div className={styles.education}>
                                <bold>MS</bold>, Electrical Engineering, Clemson University<br /><br />
                                <bold>Certified Financial Planning</bold>, Texas A&M University 
                                (Planned completion – May 2025)
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.header}>Kalyan Cherukuri</div>
                            <div className={styles.subheader}>Chief Financial Planner</div>
                            <div className={styles.body}>
                                My passion for helping individuals, businesses, and non-profits make sound financial and investment decisions has led me to pursue the path of CERTIFIED FINANCIAL PLANNER™.  After 29 years working in the Electronics Industry analyzing various types of data to make profitable decisions with resounding success, I am looking forward to using the same data analytic skills as a Financial Advisor.  I believe that the best investment is one that positively impacts the future of others.
                                <br /><br />
                                As Chief Financial Planner at Velaga Advisors, my goal is to work with each of our valued clients in achieving the financial future they envision.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
