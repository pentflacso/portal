import styles from "./HomeHeading.module.scss";

export default function HomeHeading({ title }){
    return(
        <h1 dangerouslySetInnerHTML={{__html: title }} className={`${styles.heading}`} />
    );
}