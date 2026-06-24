import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";
import { client } from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
    const res = await client.queries.about({ relativePath: "about.json" });
    return {
        props: {
            data: res.data,
            query: res.query,
            variables: res.variables,
        },
    };
}

// Renders text with blank-line-separated paragraphs into <br/><br/> breaks.
function MultilineText({ value }) {
    const parts = (value || "").split(/\n\n+/);
    return parts.map((part, i) => (
        <span key={i}>
            {part}
            {i < parts.length - 1 && <><br /><br /></>}
        </span>
    ));
}

// Renders a list of lines separated by <br/><br/>.
function Lines({ items }) {
    return (items || []).map((line, i, arr) => (
        <span key={i}>
            {line}
            {i < arr.length - 1 && <><br /><br /></>}
        </span>
    ));
}

export default function About(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    const about = data.about;

    return (
        <>
            <Head>
                <title>Velaga Advisors - About</title>
                <meta property="title" content="Velaga Advisors" />
                <meta name="description" content="Velaga Advisors" />
                <meta name="og:description" content="Velaga Advisors" />
                <meta property="og:title" content="Velaga Advisors" />
                <meta property="og:site_name" content="Velaga Advisors" />
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
            <main className={styles.about}>
                <div className={styles.content}>
                    <h1 className={styles.header} data-tina-field={tinaField(about, "pageHeader")}>{about.pageHeader}</h1>
                    {about.members?.map((member, index) => (
                        <div className={styles.row} key={index}>
                            <div className={styles.left}>
                                <Image
                                    src={member.image}
                                    width={200}
                                    height={200}
                                    style={{ width: '100%', height: 'auto' }}
                                    className={styles.profilePic}
                                    alt={member.imageAlt}
                                    data-tina-field={tinaField(member, "image")}
                                />
                                {member.photoCredit ? (
                                    <div className={styles.photoCredit} data-tina-field={tinaField(member, "photoCredit")}>{member.photoCredit}</div>
                                ) : null}
                                <div className={styles.education} data-tina-field={tinaField(member, "education")}>
                                    <Lines items={member.education} />
                                </div>
                            </div>
                            <div className={styles.right}>
                                <h1 className={styles.midheader} data-tina-field={tinaField(member, "sectionTitle")}>{member.sectionTitle} </h1>
                                <div className={styles.subheader}>
                                    <b data-tina-field={tinaField(member, "name")}>{member.name}</b> | <i data-tina-field={tinaField(member, "role")}>{member.role}</i>
                                </div>
                                <div className={styles.body} data-tina-field={tinaField(member, "bio")}>
                                    <MultilineText value={member.bio} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
