import styles from "./TwoColumsText.module.scss";

export default function TwoColumsText({texto}){
    
    return(
        <div dangerouslySetInnerHTML={{__html: `${texto}` }} className={styles.wrapper} />    
    );
}