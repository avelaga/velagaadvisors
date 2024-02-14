import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href="/"><Image src="/logo.png" width={200} height={0} style={{ width: '300px', height: 'auto' }} className={styles.logo}/></Link>
            
            <div className={styles.right}>
                <Link href="/services" className={usePathname() === '/services' ? `${styles.link} ${styles.active}` : styles.link}>SERVICES</Link>
                <Link href="/about" className={usePathname() === '/about' ? `${styles.link} ${styles.active}` : styles.link}>ABOUT</Link>
                <Link href="https://docs.google.com/forms/d/18oA11rmQZ94HzUDiNUoW-95oIC-rVxt0POIYccwZRT8/edit" target="blank" className={styles.link}>CONTACT</Link>
            </div>

        </div>
    );
}