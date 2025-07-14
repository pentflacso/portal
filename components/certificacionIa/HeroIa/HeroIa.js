import TextMarquee from "../../library/TextMarquee/TextMarquee";
import styles from "./HeroIa.module.scss";

export default function HeroIa(){

    return(
        <section className={styles.wrapper}>

            <div className={styles.info}>            
                <div className={styles.col_left}>
                    <h1 className={styles.headline}>IA para innovar<br /> en el aula</h1>
                    <p className={styles.description}>Aprendé a diseñar propuestas de enseñanza que integren la inteligencia artificial.</p>
                    <div className={styles.features}>
                        <p>Certificación universitaria</p>
                        <p>14 semanas</p>
                    </div>
                </div>

                <div className={styles.col_right}>
                    <div className={styles.img_wrapper}>
                        <img src="../assets/images/certificacion_ia/img_hero/element_1.webp" alt="Imagen de portada"/>
                        <img src="../assets/images/certificacion_ia/img_hero/element_2.webp" alt="Imagen de portada" className={styles.el_2}/>
                        <img src="../assets/images/certificacion_ia/img_hero/element_3.webp" alt="Imagen de portada" className={styles.el_3}/>
                        <img src="../assets/images/certificacion_ia/img_hero/element_4.webp" alt="Imagen de portada"
                        className={styles.el_4}/>
                        <img src="../assets/images/certificacion_ia/img_hero/element_5.webp" alt="Imagen de portada"
                        className={styles.el_5}/>
                    </div>
                </div>
            </div>

            <div className={styles.marquee}>
                <TextMarquee data={[{ value: "100% VIRTUAL" }]} />
             </div>   
           
        </section>
    );
}