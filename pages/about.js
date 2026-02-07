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
                    <h1 className={styles.header}>About Our Firm</h1>
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
                            <h1 className={styles.midheader}>The Vision Behind Velaga Advisors </h1>
                            <div className={styles.subheader}><b>Krishna Velaga</b> | <i>Founder & Chief Investment Officer</i></div>
                            <div className={styles.body}>
                                Krishna Velaga founded Velaga Advisors on the principle that family wealth deserves the same analytical rigor as a complex technical system. Having navigated the markets since the late 1990s—with expertise spanning equities, derivatives, and real estate, alongside institutional alternatives such as Private Equity, Hedge Funds, and Private Credit—Krishna brings an engineering mindset to portfolio design.
                                <br /><br />
                                This systems-engineering background, combined with formal financial education, allows Krishna to bridge the gap between complex market theory and disciplined investment execution. By applying a process-driven framework to modern portfolio theory, he focuses on creating a structural balance between risk mitigation and long-term capital growth.
                                <br /><br />
                                In 2023, Krishna transitioned from a successful career in Information Technology to apply this methodology to the architecture of family wealth. Recognizing that high-net-worth professionals require a Strategic Anchor who can synthesize sophisticated investment research with advanced tax-optimization, he provides the dedicated oversight and precision necessary to navigate a complex financial landscape with confidence.

                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.left}>
                            <Image src="/kalyan.jpg" width={200} height={200} style={{ width: '100%', height: 'auto' }} className={styles.profilePic} />
                            <div className={styles.education}>
                                <bold>MS</bold>, Electrical Engineering, Clemson University<br /><br />
                                <bold>Certified Financial Planning Candidate</bold>, Texas A&M University
                            </div>
                        </div>
                        <div className={styles.right}>
                            <h1 className={styles.midheader}>Strategic Planning & Roadmaps </h1>
                            <div className={styles.subheader}><b>Kalyan Cherukuri</b> | <i>Chief Financial Planner</i></div>
                            <div className={styles.body}>
                                Kalyan Cherukuri brings nearly three decades of analytical expertise from the Electronics Industry to his role as Chief Financial Planner. Having spent 29 years leveraging complex data to drive profitable corporate decisions with resounding success, he applies that same high-precision framework to the financial planning process at Velaga Advisors.
                                <br /><br />
                                As a CERTIFIED FINANCIAL PLANNER™ candidate, Kalyan specializes in the Strategic Roadmap. He excels at synthesizing intricate data into actionable strategies, ensuring that every variable—from cash flow to long-term retirement targets—is structurally sound. By applying his deep background in electronics and data analytics, he bridges the gap between complex financial modeling and the clear, intentional decisions required to secure a client's future.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
