import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "@/styles/Navbar.module.css";
import React, { useEffect, useState } from "react";
import MediaQuery from 'react-responsive';
import HamburgerMenu from 'react-hamburger-menu';

export default function Navbar() {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const pathname = usePathname();

    function handleClick() {
        setIsCollapsed(!isCollapsed)
    }

    useEffect(() => {
        setIsCollapsed(true)
    }, [pathname])

    return (
        <div className={styles.navbar} >

            {/* mobile  */}
            < MediaQuery maxWidth={950} >

                <div className={styles.mobileHeader} >
                    <Link href="/"><Image src="/logoWhite.png" width={100} height={0} style={{ width: '100px', height: 'auto' }} className={styles.logo} /></Link>
                    <HamburgerMenu
                        isOpen={!isCollapsed}
                        menuClicked={handleClick}
                        width={35}
                        height={25}
                        strokeWidth={4}
                        rotate={0}
                        color='#F2EBE3'
                        borderRadius={2}
                        animationDuration={0.5}
                    />
                </div>
                <div className={isCollapsed ? `${styles.none} ${styles.dropDown}` : styles.dropDown}>
                    <Link href="/" className={usePathname() === '/' ? `${styles.link} ${styles.active}` : styles.link}>HOME</Link>
                    <Link href="/services" className={usePathname() === '/services' ? `${styles.link} ${styles.active}` : styles.link}>SERVICES</Link>
                    <Link href="/about" className={usePathname() === '/about' ? `${styles.link} ${styles.active}` : styles.link}>ABOUT</Link>
                    <Link href="/clienthub" className={usePathname() === '/clienthub' ? `${styles.link} ${styles.active}` : styles.link}>CLIENT HUB</Link>
                    <Link href="/contact" className={usePathname() === '/contact' ? `${styles.link} ${styles.active}` : styles.link}>CONTACT</Link>
                </div>
            </MediaQuery>

            {/* desktop */}
            < MediaQuery minWidth={951} >
                <Link href="/"><Image src="/logo.png" width={200} height={0} style={{ width: '200px', height: 'auto' }} className={styles.logo} /></Link>
                <div className={styles.right}>
                    <Link href="/" className={usePathname() === '/' ? `${styles.link} ${styles.active}` : styles.link}>HOME</Link>
                    <Link href="/services" className={usePathname() === '/services' ? `${styles.link} ${styles.active}` : styles.link}>SERVICES</Link>
                    <Link href="/about" className={usePathname() === '/about' ? `${styles.link} ${styles.active}` : styles.link}>ABOUT</Link>
                    <Link href="/clienthub" className={usePathname() === '/clienthub' ? `${styles.link} ${styles.active}` : styles.link}>CLIENT HUB</Link>
                    <Link href="/contact" className={usePathname() === '/contact' ? `${styles.link} ${styles.active}` : styles.link}>CONTACT</Link>
                </div>
            </MediaQuery>
        </div>
    );
}