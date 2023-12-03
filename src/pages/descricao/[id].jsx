import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import styles from "@/styles/Descricao.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Page({ word }) {
    return (
        <>
            <Header />
            <main className={`${styles.main} ${montserrat.className}`}>
                <h1>{word.nome}</h1>
                <h3>Autor: {word.usuario}</h3>
                <p>{word.descricao}</p>
            </main>
            <Footer/>
        </>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch("https://www.bocaweb.com.br/apibocaweb");
    const repo = await res.json();
    const word = await repo.filter((obj)=>obj._id==context.params.id)[0];

    return {
        props: { word:word },
    };
};

export async function getStaticPaths() {
    const res = await fetch("https://www.bocaweb.com.br/apibocaweb");
    const repo = await res.json();

    const paths = repo.map((word, index) => {
        return { params: { id: word._id } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Page;
