import Head from "next/head";
import styles from "@/styles/ClientHub.module.css";
import { useState, useEffect } from "react";
import { client } from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

export async function getStaticProps() {
    const res = await client.queries.clientHub({ relativePath: "client-hub.json" });
    return {
        props: {
            data: res.data,
            query: res.query,
            variables: res.variables,
        },
    };
}

export default function ClientHub(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    const page = data.clientHub;

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <>
            <Head>
                <title>Velaga Advisors - Client Hub</title>
                <meta property="title" content="Velaga Advisors" />
                <meta name="description" content="Velaga Advisors" />
                <meta name="og:description" content="Velaga Advisors" />
                <meta property="og:title" content="Velaga Advisors" />
                <meta property="og:site_name" content="Velaga Advisorsr" />
                <meta property="og:image" content="./logoPreview.webp" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.webp" />
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
                        <div className={styles.subheader} data-tina-field={tinaField(page, "intro")}>
                            {page.intro}
                        </div>
                        {page.portals?.map((portal, i) => (
                            <div className={styles.container} key={i}>
                                <div className={styles.topContainer}>
                                    <div className={styles.containerHeader} data-tina-field={tinaField(portal, "title")}>{portal.title}</div>
                                    <img src={portal.image} className={styles.image} alt={portal.alt} data-tina-field={tinaField(portal, "image")}/>
                                </div>
                                <div className={styles.bottom}>
                                    <p dangerouslySetInnerHTML={{ __html: portal.body1 }} data-tina-field={tinaField(portal, "body1")} />
                                    <div className={styles.bulletContainer}>
                                        {portal.bullets && portal.bullets.map((bullet, j) => (
                                            <div className={styles.bullet} key={j} data-tina-field={tinaField(bullet, "title")}>
                                                <b>{bullet.title}</b> {bullet.body}
                                            </div>
                                        ))}
                                    </div>
                                    <p dangerouslySetInnerHTML={{ __html: portal.body2 }} data-tina-field={tinaField(portal, "body2")} />
                                </div>
                                {portal.buttonTitle && <a href={portal.buttonUrlDesktop ? (isMobile ? portal.buttonUrlMobile : portal.buttonUrlDesktop) : portal.buttonUrl} target="blank" className={styles.linkButton} data-tina-field={tinaField(portal, "buttonTitle")}>{portal.buttonTitle}</a>}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
