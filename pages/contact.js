import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";

import { useState } from "react";
import { client } from "@/tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";

export async function getStaticProps() {
    const res = await client.queries.contact({ relativePath: "contact.json" });
    return {
        props: {
            data: res.data,
            query: res.query,
            variables: res.variables,
        },
    };
}

// Renders blank-line-separated paragraphs into <br/><br/> breaks.
function MultilineText({ value }) {
    const parts = (value || "").split(/\n\n+/);
    return parts.map((part, i) => (
        <span key={i}>
            {part}
            {i < parts.length - 1 && <><br /><br /></>}
        </span>
    ));
}

export default function Contact(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    });
    const page = data.contact;

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        // dev: "yepp"
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            const current = form[name] || [];

            const updated = checked
                ? [...current, value]
                : current.filter(v => v !== value);

            setForm({ ...form, [name]: updated });
        } else {
            setForm({ ...form, [name]: value });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("https://contact-form-proxy.abvelaga.workers.dev", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus("Thank you. Your inquiry has been received. A member of the firm will reach out to you shortly to schedule a brief introductory call.");
            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
                // dev: "yepp"
            });
        } catch (err) {
            setStatus("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Velaga Advisors - Contact</title>
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
                <div className={styles.contact}>
                    <h1 className={styles.header} data-tina-field={tinaField(page, "header")}>{page.header}</h1>
                    <div className={styles.body} data-tina-field={tinaField(page, "intro")}>
                        <MultilineText value={page.intro} />
                    </div>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <input
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className={styles.contactField}
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className={styles.contactField}
                        />

                        <input
                            name="phone"
                            placeholder="Phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className={styles.contactField}
                        />

                        <div className={styles.messageLabel} data-tina-field={tinaField(page, "messageLabel")}>{page.messageLabel} </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className={styles.contactMessage}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className={styles.contactButton}
                            data-tina-field={tinaField(page, "submitLabel")}
                        >
                            {loading ? "Sending..." : page.submitLabel}
                        </button>

                        {status && <p className={styles.status}>{status}</p>}
                    </form>
                    <div className={styles.subheader} data-tina-field={tinaField(page, "discretionHeader")}>{page.discretionHeader}</div>
                    <div className={styles.body}>
                        <span data-tina-field={tinaField(page, "discretionBody1")}>{page.discretionBody1}</span>
                        <Link href="/client-hub" style={{ display: 'inline', textDecoration: 'underline' }} data-tina-field={tinaField(page, "clientHubLinkText")}>{page.clientHubLinkText}</Link>
                        <span data-tina-field={tinaField(page, "discretionBody2")}>{page.discretionBody2}</span>
                    </div>
                </div>
            </main>
        </>
    );
}
