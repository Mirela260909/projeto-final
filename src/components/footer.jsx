import styles from "@/styles/Footer.module.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
export function Footer() {
    return (
        <footer className={`${styles.footer} ${montserrat.className}`}>
            <h1>Framework 2</h1>
            <h2>Profº Ricardo</h2>
            <p>Mirela Nakano</p>
            <p>Nicolly Letícia</p>
            <p>Pedro Camacho</p>
        </footer>
    );
}
