import Image from "next/image";
import Link from 'next/link';
import styles from "@/styles/Footer.module.css";
import privacyPolicy from '../public/privacyPolicy.pdf'

export default function Footer() {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.item}>© 2024 Velaga Advisors LLC</div>
                <a href={privacyPolicy} target="_blank" className={styles.item}>Privacy Policy</a>
                {/* <div className={styles.link}>Privacy Policy</div> */}
                <Link href="/disclaimer" className={`${styles.link} ${styles.item}`}>Disclaimer</Link>
            </div>
            <a href="https://abhi.work" target="_blank" className={styles.abhi} >Designed and Developed by Abhi Velaga</a>
        </div>
    )
}