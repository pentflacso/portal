import styles from "./HighlightParagraph.module.scss";

export default function HighlightParagraph({ title }){

    return(
        <h3 dangerouslySetInnerHTML={{__html: `${title[0]["value"]}` }} className={`${styles.highlight}`} />
    );
}