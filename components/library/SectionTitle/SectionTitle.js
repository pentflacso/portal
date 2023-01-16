import styles from "./SectionTitle.module.scss";

export default function SectionTitle({title}){
    return(
        <h2 className={styles.title}>{title}</h2>
    );
}