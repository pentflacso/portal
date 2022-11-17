import styles from "./ParagraphAndButton.module.scss";

export default function ParagraphAndButton({ paragraph, iconBtn, urlBtn }){
    return(
        <div className={styles.wrapper}>

            <div dangerouslySetInnerHTML={{__html: paragraph }} className={styles.paragraph} />

            <a href={urlBtn} rel="noopener noreferrer" target="_blank" className={styles.btn}><img src={iconBtn} alt="icono" /></a>

        </div>
    );
}