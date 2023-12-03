import { Card } from "@/components/card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import styles from "@/styles/Home.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Page({ words }) {
    return (
        <>
            <Header />
            <main className={`${styles.main} ${montserrat.className}`}>
                {words.map((word, key) => (
                    <Card data={word} key={key} />
                ))}
            </main>
            <Footer/>
        </>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch(
        "https://www.bocaweb.com.br/apibocaweb?nome=" + context.params.nome
    );
    const repo = await res.json();
    const words = await repo;

    return {
        props: { words },
    };
};

export async function getStaticPaths() {
    // const res = await fetch("https://www.bocaweb.com.br/apibocaweb");
    // const repo = await res.json();
    // const users = await repo;
    // let filters = [];
    // repo.map((obj, index) => {
    //     const words = obj.palavras_chave.split(", ").map((word) => {
    //         if(word.trim().length){
    //             filters.push(word.trim().replace(/"/g, ''));
    //         }
    //     });
    // });
    // filters = filters
    //     .filter((value, index, array) => array.indexOf(value) === index)
    //     .sort(function (a, b) {
    //         return a.toUpperCase() > b.toUpperCase()
    //             ? 1
    //             : a.toUpperCase() === b.toUpperCase()
    //             ? 0
    //             : -1;
    //     });
    let filters = [
        'arte',
        'Animal',
        'Bandeira',
        'capa',
        'Edificação',
        'Futebol',
        'Infantil',
        'logotipo',
        'Personagem',
        'Anime',
        'folclore',
        'Mônica',
        'disney'
    ]
    const paths = filters.map((word, index) => {
        return { params: { nome: word } };
    });
    return {
        paths,
        fallback: false,
    };
}

export default Page;
