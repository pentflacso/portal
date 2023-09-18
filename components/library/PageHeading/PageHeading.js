import styles from "./PageHeading.module.scss";

export default function PageHeading({ title }){

    return(
        <header dangerouslySetInnerHTML={{__html: `<h1>${title}</h1>` }} className={`${styles.heading}`} />        
    );
}