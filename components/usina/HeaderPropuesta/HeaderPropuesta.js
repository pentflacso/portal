import Link from 'next/link';
import styles from "./HeaderPropuesta.module.scss";

export default function HeaderPropuesta(){

    return(
        <header className={styles.wrapper}>    

            <div className={styles.col_left}>
                <Link className={styles.back_arrow} href="/usinadev" ><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Usina de experiencias</strong></span></Link>
                <h1 className={styles.title}>Laboratorio de inteligencia artificial y educación</h1>
                <p>Explorá herramientas, usos e implicancias en el ámbito educativo para desarrollar ideas transformadoras con inteligencia artificial.</p>
                <div className={styles.triangles}>
                    <p>4 semanas</p>
                    <p>100% virtual</p>
                </div>
            </div> 

            <div className={styles.col_right}>
                <img src="../assets/images/propuesta_usina_demo.jpg" alt='Porter de la propuesta' className={styles.poster} />
            </div> 

        </header> 
    );
}