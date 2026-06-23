import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";

import { useState } from "react";

export default function Contact() {
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
                primaryAreaOfInterest: "",
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
                    <h1 className={styles.header}>Start a Conversation</h1>
                    <div className={styles.body}>
                        Meaningful wealth management is built on a foundation of trust, discretion, and a shared long-term perspective. While the firm grows primarily through personal introductions and professional referrals, inquiries to explore a potential advisory engagement are welcome.<br /><br />
                        Our process begins with a mutual evaluation of fit between a family’s requirements and our disciplined approach to wealth stewardship. Please utilize the form below to initiate a confidential dialogue.

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

                        <div className={styles.messageLabel}>Please let us know what you would like to discuss </div>
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
                        >
                            {loading ? "Sending..." : "Request Consultation"}
                        </button>

                        {status && <p className={styles.status}>{status}</p>}
                    </form>
                    <div className={styles.subheader}>Discretion & Security</div>
                    <div className={styles.body}>
                        All inquiries are held in strict confidence. To ensure the security of your information, please do not include account numbers or sensitive financial data in this form. Existing clients should utilize the <Link href="/clienthub" style={{ display: 'inline', textDecoration: 'underline' }}>Client Hub</Link> for all secure communications and account access.
                    </div>
                </div>
            </main>
        </>
    );
}