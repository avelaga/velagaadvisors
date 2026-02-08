import Head from "next/head";
import styles from "@/styles/ClientHub.module.css";

export default function ClientHub() {

    const portals = [
        {
            image: "advyzon.jpg",
            title: "Investment Reporting Portal",
            body1: "Powered by <b>Advyzon</b>, this portal provides a granular view of the investment portfolio. This secure platform is designed for transparency and features the following reporting capabilities:",
            bullets: [
                {
                    title: "Portfolio Composition:",
                    body: "A detailed breakdown of asset allocation and holdings across all accounts under our management."
                },
                {
                    title: "Performance Analytics:",
                    body: "Precise reporting on total return and time-weighted returns compared against relevant market benchmarks."
                },
                {
                    title: "Income Estimation:",
                    body: "Projections of dividends and interest yield to assist with cash-flow planning."
                },
                {
                    title: "Administrative Vault:",
                    body: "A secure, two-way exchange for quarterly billing invoices, account statements, and sharing of sensitive tax and financial documents between the client and our firm."
                }
            ],
            body2: "Accessible via web or mobile application, data is refreshed nightly to ensure the most current information is available for review and analysis.",
            buttonTitle: "Access Investment Reporting & Vault",
            buttonUrl: "https://main.yhlsoft.com/auth/users/sign_in?prod=CWP"
        },
        {
            image: "rightcapital.png",
            title: "Wealth Modeling & Planning",
            body1: "<b>Wealth Modeling & Planning</b> Powered by <b>RightCapital</b>, this platform serves as the interactive engine for the <b>Strategic Roadmap</b>. By aggregating the entire financial landscape—including accounts under our management, external holdings, and private business interests— the platform provides a live, high-precision model of total net worth. The portal enables the following capabilities:",
            bullets: [
                {
                    title: "Holistic Asset Aggregation:",
                    body: "Real-time synchronization of all accounts, including those held outside our firm, to provide a single source of truth."
                },
                {
                    title: "Private & Global Interest Tracking:",
                    body: "The ability to include non-traditional assets such as private placements, business partnership interests, foreign holdings and directly owned real estate."
                },
                {
                    title: "Cash Flow & Net Worth Integration:",
                    body: "Oversight of mortgages and debt obligations alongside detailed analysis of inflows and outlays to ensure the wealth architecture remains resilient."
                },
                {
                    title: "Probability of Success:",
                    body: "Data-driven projections that model the likelihood of achieving long-term objectives across various market cycles."
                }
            ],
            body2: "This dedicated planning environment ensures that every piece of the financial life is accounted for, providing the clarity and constant oversight necessary to navigate the family's mission with confidence.",
            buttonTitle: "Access Wealth Modeling",
            buttonUrl: "https://app.rightcapital.com/account/login?type=client"
        },
        {
            image: "schwab1.jpg",
            title: "Custodial Access",
            body1: "<b>Charles Schwab</b> serves as the independent custodian for assets, providing a secure environment where client accounts are maintained and protected. While we provide specialized reporting and strategy, clients maintain direct access to the underlying institutional platform through <b>Schwab Alliance</b>. The Schwab Alliance provides the following functionality:",
            bullets: [
                {
                    title: "Direct Account Oversight:",
                    body: "Access account balances, transaction history, and trade confirmations."
                },
                {
                    title: "Administrative Management:",
                    body: "Securely manage beneficiaries, move funds, and update account-level permissions."
                },
                {
                    title: "Redundant Reporting:",
                    body: "View official custodial statements and tax forms. For your convenience, these documents are also integrated directly into the Investment Reporting Portal."
                },
            ],
            body2: "This dual-access structure provides an extra layer of transparency, ensuring constant, independent verification of your assets at the custodial level.",
            buttonTitle: "Access Schwab Alliance",
            buttonUrl: "https://client.schwab.com/Areas/Access/Login?&kc=y&sim=y"
        },
        // {
        //     image: "taxplanning1.png",
        //     title: "Tax Planning",
        //     body1: "We use a powerful tax planning software to analyze your tax returns and provide insights and opportunities. You will receive a secure link to upload your tax return each year."
        // }
    ]
    return (
        <>
            <Head>
                <title>Velaga Advisors - Client Hub</title>
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
                            The Client Hub provides a consolidated suite of specialized tools designed to offer total transparency across the financial landscape. These platforms work in concert to provide granular reporting, long-term strategic modeling, and secure custodial oversight.
                        </div>
                        {portals.map(portal => (
                            <div className={styles.container}>
                                <div className={styles.topContainer}>
                                    <div className={styles.containerHeader}>{portal.title}</div>
                                    <img src={portal.image} className={styles.image} />
                                </div>
                                <div className={styles.bottom}>
                                    <p dangerouslySetInnerHTML={{ __html: portal.body1 }} />
                                    <div className={styles.bulletContainer}>
                                        {portal.bullets && portal.bullets.map(bullet => (
                                            <div className={styles.bullet}>
                                                <b>{bullet.title}</b> {bullet.body}
                                            </div>
                                        ))}
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: portal.body2 }} />
                                </div>
                                {portal.buttonTitle && <a href={portal.buttonUrl} target="blank" className={styles.linkButton}>{portal.buttonTitle}</a>}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}