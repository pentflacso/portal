import styles from "./Quotes.module.scss";

export default function Quotes(){
    return(
    <>
        <div className={styles.data_wrapper}>

            <div className={styles.img_cont}>
                <img src="/assets/images/foto_alumna_demo.jpg" alt="foto de la alumna Nombre" />
            </div>
            
            <div className={styles.text_cont}>
                <h4>“Destaco la calidad del servicio brindado en el desarrollo de los cursos en la plataforma Moodle y la coordinación de docentes y equipo, dando siempre excelente respuesta a todas las necesidades.”</h4>
                <p><strong>Ines Belinky</strong><br />Master of the universe — Galeno</p>
            </div>

        </div>
    </>
    );
}