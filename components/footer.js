import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "@/styles/Footer.module.css";
import privacyPolicy from '../public/privacyPolicy.pdf'

export default function Footer() {
    // Insights pages use a white background, so the footer needs dark text.
    const { pathname } = useRouter();
    const dark = pathname.startsWith('/insights');

    return (
        <div className={dark ? styles.dark : ''}>
            <div className={styles.footer}>
                <div className={styles.item}>© 2026 Velaga Advisors LLC</div>
                <a href={'/privacyPolicy.pdf'} className={`${styles.link} ${styles.item}`} rel="noopener noreferrer" target='_blank' >Privacy Policy</a>
                <Link href="/disclaimer" className={`${styles.link} ${styles.item}`}>Disclaimer</Link>
                <a href="https://adviserinfo.sec.gov/firm/summary/329122" className={`${styles.link} ${styles.item}`} target="_blank" rel="noopener noreferrer">Form ADV</a>

            </div>
            <a href="https://abhi.work" target="_blank" className={styles.abhi} >Designed and Developed by Abhi Velaga</a>
        </div>
    )
}