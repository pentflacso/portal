import styles from "./HighlightParagraph.module.scss";

export default function HighlightParagraph({ title }){
    return(
        <h3 dangerouslySetInnerHTML={{__html: `${title}` }} className={`${styles.highlight}`} />
    );
}