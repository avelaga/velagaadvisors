import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ClientAccess.module.css";

export default function ClientAccess() {
    return (
        <>
            <Head>
                <title>Velaga Advisors - Investor Center</title>
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
                        <div className={styles.subheader}>
                        The Investor Center provides a consolidated suite of specialized tools designed to offer total transparency across the financial landscape. These platforms work in concert to provide granular reporting, long-term strategic modeling, and secure custodial oversight.
</div>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <Image src="clientportal1.png" width={200} height={200} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                            </div>
                            <div className={styles.right}>
                                <div className={styles.containerHeader}>Investment Reporting Portal</div>
                                Powered by Advyzon, this portal provides a granular view of the investment portfolio. This secure platform is designed for transparency, allowing for the monitoring of the technical health and performance of assets:<br /><br />
                                •	<b>Portfolio Composition:</b> A detailed breakdown of asset allocation and holdings across all accounts under our management.<br />
                                •	<b>Performance Analytics:</b> Precise reporting on total return and time-weighted returns compared against relevant market benchmarks.<br />
                                •	<b>Income Estimation:</b> Projections of dividends and interest yield to assist with cash-flow planning.<br />
                                •	<b>Administrative Vault:</b> A secure, two-way exchange for quarterly billing invoices, account statements, and sharing of sensitive tax and financial documents between the client and our firm.<br />
                                <br />
                                Accessible via web or mobile application, data is refreshed nightly to ensure the most current information is available for review and analysis.
                                <br /><br />
                            </div>
                            <a href="https://main.yhlsoft.com/auth/users/sign_in?prod=CWP" target="blank" className={styles.linkButton}>Access Investment Reporting & Vault</a>
                        </div>


                        <div className={styles.container}>
                            <div className={styles.left}>
                                <Image src="/financialplanning1.png" width={200} height={200} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                            </div>
                            <div className={styles.right}>
                                <div className={styles.containerHeader}>Wealth Modeling & Planning</div>
                                <b>Wealth Modeling & Planning</b> Powered by RightCapital, this platform serves as the interactive engine for the <b>Strategic Roadmap</b>. By aggregating the entire financial landscape—including accounts under our management, external holdings, and private business interests— the platform provides a live, high-precision model of total net worth.
                                The portal enables the following capabilities:<br /><br />
                                •	<b>Holistic Asset Aggregation:</b> Real-time synchronization of all accounts, including those held outside our firm, to provide a single source of truth.<br />
                                •	<b>Private & Global Interest Tracking:</b> The ability to include non-traditional assets such as private placements, business partnership interests, foreign holdings and directly owned real estate.<br />
                                •	<b>Cash Flow & Net Worth Integration:</b> Oversight of mortgages and debt obligations alongside detailed analysis of inflows and outlays to ensure the wealth architecture remains resilient.<br />
                                •	<b>Probability of Success:</b> Data-driven projections that model the likelihood of achieving long-term objectives across various market cycles.<br /><br />
                                This dedicated planning environment ensures that every piece of the financial life is accounted for, providing the clarity and constant oversight necessary to navigate the family's mission with confidence.<br /><br />
                            </div>
                            <a href="https://app.rightcapital.com/account/login?type=client" target="blank" className={styles.linkButton}>Access Wealth Modeling</a>
                        </div>

                        <div className={styles.container}>
                            <div className={styles.leftSchwab}>
                                <Image src="schwab1.png" width={200} height={200} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                            </div>
                            <div className={styles.rightSchwab}>
                                <div className={styles.containerHeader}>Custodial Access</div>
                               <b> Charles Schwab & Co., Inc.</b> serves as the independent custodian for for assets, providing a secure environment where client accounts are maintained and protected. While we provide specialized reporting and strategy, clients maintain direct access to the underlying institutional platform through <b>Schwab Alliance</b>.
                                The Schwab Alliance provides the following functionality:<br /><br />
                                •	<b>Direct Account Oversight:</b> Access official custodial balances, transaction history, and trade confirmations.<br />
                                •	<b>Administrative Management:</b> Securely manage beneficiaries, move funds, and update account-level permissions.<br />
                                •	<b>Redundant Reporting:</b> View official custodial statements and tax forms. For your convenience, these documents are also integrated directly into the Investment Reporting Portal.<br /><br />
                                This dual-access structure provides an extra layer of transparency, ensuring constant, independent verification of your assets at the custodial level.<br /><br />

                            </div>
                            <a href="https://client.schwab.com/Areas/Access/Login?&kc=y&sim=y" target="blank" className={styles.linkButton}>Access Schwab Alliance</a>
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