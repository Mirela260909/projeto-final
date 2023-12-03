'use client'
import styles from '@/styles/Header.module.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export function Header(){
    return(
        <header className={`${styles.header} ${montserrat.className}`}>
            <ul>
                <li>BocaWeb</li>
                <li>IFMS</li>
            </ul>
        </header>
    )
}