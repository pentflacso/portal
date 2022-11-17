import Marquee from "react-fast-marquee";
import styles from "./BrandsMarquee.module.scss";

export default function BrandsMarquee(){
    return(
    <>
        <Marquee speed="100" gradientWidth="0" direction="right">
            <img src="/assets/images/brand_demo_1.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_2.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_3.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_4.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_1.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_3.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_4.svg" alt="Nombre empresa" className={styles.brand} />
        </Marquee>
        <Marquee speed="100" gradientWidth="0" direction="left">
            <img src="/assets/images/brand_demo_6.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_7.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_8.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_6.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_7.svg" alt="Nombre empresa" className={styles.brand} />
            <img src="/assets/images/brand_demo_8.svg" alt="Nombre empresa" className={styles.brand} />
        </Marquee> 
    </>
    );
}