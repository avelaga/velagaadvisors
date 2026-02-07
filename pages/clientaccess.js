import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ClientAccess.module.css";

export default function ClientAccess() {
    return (
        <>
            <Head>
                <title>Velaga Advisors - Client Access</title>
                <meta property="title" content="Velaga Advisors" />
                <meta name="description" content="Velaga Advisors" />
                <meta name="og:description" content="Velaga Advisors" />
                <meta property="og:title" content="Velaga Advisors" />
                <meta property="og:site_name" content="Velaga Advisorsr" />
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
            <main>
            <div className={styles.page} >
                <div className={styles.body}>

                    <div className={styles.container}>
                        <div className={styles.left}>
                            <Image src="clientportal1.png" width={200} height={200} style={{ width: '100%', height: 'auto', borderRadius: '12px' }}/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.containerHeader}>Client Portal</div>
                                Access your investment portfolio right at your fingertips through this easy-to-use online hub, you can effortlessly explore:<br/><br/><b>
                                - Your portfolio's Makeup<br/>
                                - Performance Insights <br/>
                                - Income Estimation<br/>
                                - Account & Tax Documents<br/>
                                - Your Financial and Tax Plans<br/></b>
                                <br/>
                                Plus, we go the extra mile by gathering and uploading tax documents for your private investments, whenever possible, so you have everything in one place. Need to share something with us securely? You can easily upload documents through this portal too!
                                <br/><br/>
                                You can access this from a web or mobile app around the clock. Data is updated on a daily basis. Do you like to see anything else? Just let us know!
                            </div>
                        <a href="https://main.yhlsoft.com/auth/users/sign_in?prod=CWP" target="blank" className={styles.linkButton}>Login to Client Portal</a>
                    </div>


                    <div className={styles.container}>
                        <div className={styles.left}>
                            <Image src="/financialplanning1.png" width={200} height={200} style={{ width: '100%', height: 'auto', borderRadius: '12px' }}/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.containerHeader}>Financial Planning Portal</div>
                            We'll gather all your important pieces – your investments (set it up once, and it stays updated!), income, savings, and dreams for the future. Then, working closely with you, we'll craft a personalized financial plan designed to help you achieve those goals.
                            <br/><br/>
                            You're always in control! You can easily update your personal information whenever things change. And the best part? This seamlessly connects with your client portal, giving you a complete and clear view of your investments and a snapshot of the retirement analysis in one place.
                        </div>
                        <a href="https://app.rightcapital.com/account/login?type=client" target="blank" className={styles.linkButton}>Login to Financial Planning Portal</a>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.leftSchwab}>
                            <Image src="schwab1.png" width={200} height={200} style={{ width: '100%', height: 'auto', borderRadius: '12px' }}/>
                        </div>
                        <div className={styles.rightSchwab}>
                            <div className={styles.containerHeader}>Schwab Alliance</div>
                            Charles Schwab, one of the largest investment platforms, is an independent custodian where clients’ accounts are maintained and serviced. You can view your accounts, set up money transfers, maintain beneficiaries etc. here. All the account specific data including statements and tax forms are automatically pushed to the client portal for your convenience.
                        </div>
                        <a href="https://client.schwab.com/Areas/Access/Login?&kc=y&sim=y" target="blank" className={styles.linkButton}>Login to Schwab Alliance</a>
                    </div>

                    {/* <div className={styles.container}>
                        <div className={styles.left}>
                            <Image src="taxplanning1.png" width={200} height={200} style={{ width: '100%', height: 'auto', borderRadius: '12px' }}/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.containerHeader}>Tax Planning</div>
                            We use a powerful tax planning software to analyze your tax returns and provide insights and opportunities. You will receive a secure link to upload your tax return each year.
                        </div>
                    </div> */}
                </div>
            </div>
            </main>
        </>
    )
}