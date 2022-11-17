import Marquee from "react-fast-marquee";
import styles from "./TextMarquee.module.scss";

export default function TextMarquee({ data }){
    return(
        <>
        <Marquee speed="140" gradientWidth="0" direction="left">
            <h2 dangerouslySetInnerHTML={{__html: data }} className={styles.text_marquee} />
        </Marquee> 
        </>
    );
}