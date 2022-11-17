import Link from "next/link";
import styles from "./ExploringBtns.module.scss";

export default function ExploringBtns({ data }){
    return(
        <div className={styles.wrapper}>
            {data.map((e, i) => {
                return (
                <Link href={`/${e.path}`} className={styles.btn} key={i}><span>{e.title}</span></Link>                                           
                );
            })}                                 
        </div>
    );
}