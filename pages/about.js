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
                <meta property="og:image" content="./krishna.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                {/* google tag */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0GC6KBE56"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'G-Y0GC6KBE56');
                </script>
            </Head>
            <main className={styles.about}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <Image src="/krishna.jpg" width={200} height={200} style={{ width: '100%', height: 'auto' }} className={styles.krishna} />
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
                            I have always been passionate about investments and financial planning, and enjoyed sharing my knowledge to help family and friends on investments, college savings, tax planning and various other personal finance topics. I started investing in public equity markets in the late 1990s and expanded into alternative investments (commercial real estate, private equity, private credit, etc.) in 2016 to diversify my portfolio and build more reliable passive income streams. This helped me gain a lot of knowledge and insights into new areas and eventually helped me reach financial independence early.
                            <br /><br />
                            I realized that many high net worth individuals busy in their professional careers could benefit from a trusted financial advisor who brings together knowledge of personal finance and taxes along with analytical and communication skills. I retired from a successful career in Information Technology in 2023 to pursue my passion and make a difference to others in these areas, thus leading to the founding of Velaga Advisors.
                            <br /><br />
                            Whether you are a high earner in the wealth accumulation phase, a high net worth individual trying to further diversify and preserve wealth, or a young professional who has recently got into workforce and want to get on the right path for financial success, we are there to help.
                            <br /><br />
                            As a registered investment advisor, Velaga Advisors and its associates have a fiduciary duty to our clients to act in their best interests. We neither sell any insurance products nor do we receive any commissions or compensation other than the fee that our clients pay for our services.

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
