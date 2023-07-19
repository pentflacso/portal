import Link from "next/link";
import styles from "./ExploringBtns.module.scss";

export default function ExploringBtns({ data, dataStyle }){
    return(
        <div className={styles.wrapper}>
            {data.map((e, i) => {
                return (
                <Link href={`/${e.path}`} className={ dataStyle == "btnMedium" ? styles.btnMedium : styles.btn} key={i}><span>{e.title}</span><span className={styles.arrow} /><span className={styles.bg} /></Link>                                           
                );
            })}                                 
        </div>
    );
}