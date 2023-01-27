import styles from "./TwoColumsText.module.scss";

export default function TwoColumsText({texto}){
    return(
        <div className={styles.wrapper}>
            <p>{texto}</p>
        </div>        
    );
}