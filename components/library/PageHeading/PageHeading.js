import styles from "./PageHeading.module.scss";

export default function PageHeading({ title, margin_bottom_type }){

    const marginBottom = [ styles.margin_bottom_0, styles.margin_bottom_1, styles.margin_bottom_2 ]; 

    return(
        <header dangerouslySetInnerHTML={{__html: `<h1>${title}</h1>` }} className={`${styles.heading} ${marginBottom[margin_bottom_type]}`} />        
    );
}