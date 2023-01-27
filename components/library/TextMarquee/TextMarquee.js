import Marquee from "react-fast-marquee";
import styles from "./TextMarquee.module.scss";

export default function TextMarquee({ data }){
    return(
        <>
        <Marquee speed="140" gradientWidth="0" direction="left">
            <h2 className={styles.text_marquee}>{data}</h2>
        </Marquee> 
        </>
    );
}