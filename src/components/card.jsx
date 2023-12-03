import Link from "next/link";
import styles from "@/styles/Card.module.css";

export function Card(props) {
    return (
        <div key={props.key} className={`${styles.card}`}>
            <Link href={`/descricao/${props.data._id}`}><h1>{props.data.nome}</h1></Link>
        </div>
    );
}
