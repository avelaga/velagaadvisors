import Image from "next/image";
import Link from 'next/link'
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/"><Image src="/logo.png" width={200} height={0} style={{ width: '300px', height: 'auto' }} className={styles.logo}/></Link>
            
            <div className={styles.right}>
                <Link href="/services" className={styles.link}>SERVICES</Link>
                <Link href="/contact" className={styles.link}>CONTACT</Link>
                <Link href="/about" className={styles.link}>ABOUT</Link>
            </div>

        </div>
    );
}