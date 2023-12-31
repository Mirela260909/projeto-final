import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={`${styles.main} ${montserrat.className}`}>
                <ul>
                    {props.filters.map((filtro, key) => (
                        <li key={key}>
                            <Link href={"/" + filtro[1]}>{filtro[0]}</Link>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer/>
        </>
    );
}
export const getStaticProps = async (context) => {
    // const res = await fetch("https://www.bocaweb.com.br/apibocaweb");
    // const repo = await res.json();
    // let filters = [];
    // repo.map((obj, index) => {
    //     const words = obj.palavras_chave.split(", ").map((word) => {
    //         filters.push(word.trim().replace(/"/g, ''));
    //     });
    // });
    // filters = filters
    //     .filter((value, index, array) => array.indexOf(value) === index)
    //     .sort(function (a, b) {
    //       return a.toUpperCase() > b.toUpperCase() ? 1 : a.toUpperCase() === b.toUpperCase() ? 0 : -1;
    //     });
    let filters = [
        ['Artes','arte'],
        ['Animais', 'Animal'],
        ['Bandeiras', 'Bandeira'],
        ['Capas de livros','capa'],
        ['Edificações','Edificação'],
        ['Futebol','Futebol'],
        ['Infantil','Infantil'],
        ['Logotipos', 'logotipo'],
        ['Personagens','Personagem'],
        ['Personagens-Anime', 'Anime'],
        ['Personagens-Folclore Brasileiro','folclore'],
        ['Personagens-Turma da Mônica','Mônica'],
        ['Personagens-Disney','disney']
    ]

    return {
        props: { filters },
    };
};
