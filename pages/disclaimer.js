import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Disclaimer.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Disclaimer() {
    return (
        <div className={styles.disclaimer} >
            <div className={styles.header}>
            Disclaimer
            </div>
            <div className={styles.body}>
                Velaga Advisors LLC is a Registered Investment Adviser offering investment management and financial planning services to clients and prospective clients in the state of Texas and in other jurisdictions where exempted. No advice may be rendered by Velaga Advisors LLC unless a client service agreement is in place.
                <br /> <br />

                This website is solely for informational purposes and should not be considered a solicitation or offer for the purchase or sale of any security. The information in this material is not intended as investment, tax or legal advice. Please consult professionals in those areas to discuss your individual situation. Past performance is no guarantee of future returns. Investing involves risk and possible loss of principal capital.
            </div>
        </div>



    )
}