import styles from "./Footer.module.scss";

export default function Footer(){
    return(
        <footer className={styles.footer_site}>
            <div className={styles.wrapper}>
                <div className={styles.col_left}>
                    <h4>Contactanos</h4>
                    <p>pent@flacso.org.ar<br /> Tucumán 1966, CABA, Argentina<br /> (54-11) 5238-9300 int 352</p>
                    <p>Horario de atención:<br /> días hábiles, por correo electrónico.</p>
                    <p>©2022 Proyecto Educación y Nuevas Tecnologías<br /> Facultad Latinoamericana de Ciencias Sociales <span>—</span> Sede Argentina</p>
                </div>
                <div className={styles.col_right}>
                    <h4>Newsletter</h4>
                    <p>Si te interesa estar al tanto de propuestas de formación, búsquedas laborales, eventos especiales, actividades en línea y novedades del PENT FLACSO, te invitamos a registrarte.</p>
                </div>
            </div>
        </footer>
    );
}