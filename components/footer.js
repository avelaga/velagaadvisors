import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Footer.module.css";
// import privacyPolicy from '../public/privacyPolicy.pdf'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div>© 2024 Velaga Advisors LLC</div>
            {/* <Link href={privacyPolicy} target="_blank" rel="noreferrer">Privacy Policy</Link> */}
            <div className={styles.link}>Privacy Policy</div>
            <Link href="/disclaimer" className={styles.link}>Disclaimer</Link>
        </div>
    )
}