import Head from "next/head";
import styles from "@/styles/Contact.module.css";

import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        primaryAreaOfInterest: "",
        message: "",
        // dev: "yepp"
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("https://sisiy23yxakcn4lkkg2hujuqoi0pfykx.lambda-url.us-east-1.on.aws", {
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
                <title>Velaga Advisors - Contact Us</title>
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
                <h1 className={styles.header}>Contact</h1>
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

                    <select
                        name="primaryAreaOfInterest"
                        value={form.primaryAreaOfInterest}
                        onChange={handleChange}
                        className={styles.contactDropdown}
                    >
                        <option value="">-- Primary Area of Interest --</option>
                        <option value="Comprehensive Wealth Planning">Comprehensive Wealth Planning</option>
                        <option value="Investment Portfolio Review">Investment Portfolio Review</option>
                        <option value="Private Placement / Real Estate Strategy">Private Placement / Real Estate Strategy</option>
                        <option value="International Asset Coordination">International Asset Coordination</option>
                        <option value="Other">Other</option>
                    </select>

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
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && <p className={styles.status}>{status}</p>}
                </form>
            </main>
        </>
    );
}