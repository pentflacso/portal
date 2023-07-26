import styles from "./Footer.module.scss";
import FormFoooter from "../FormFooter/FormFooter";

export default function Footer(){
    return(
        <footer className={styles.footer_site}>
            <div className={styles.wrapper}>

                <div className={styles.info_top}>
                    <div className={styles.col_left}>
                        <h4>Contactanos</h4>
                        <p>pent@flacso.org.ar<br /> Tucumán 1966, CABA, Argentina<br /> (54-11) 5238-9300 int 352</p>
                        <p>Horario de atención:<br /> días hábiles, por correo electrónico.</p>                        
                    </div>
                    <div className={styles.col_right}>
                        <h4>Newsletter</h4>
                        <p>Si te interesa estar al tanto de propuestas de formación, búsquedas laborales, eventos especiales, actividades en línea y novedades del PENT FLACSO, te invitamos a registrarte.</p>
                            {/*<div className={styles.input_group}>
                                <input type="email" className={styles.input_email} placeholder="Colocá tu email" aria-label="" />
                                <button className={styles.btn_send} type="button" />
    </div>*/}
    <FormFoooter />                      
                    </div>
                </div>

                <div className={styles.info_bottom}>
                    <div className={styles.col_left}>
                        <p>©2022 Proyecto Educación y Nuevas Tecnologías<br /> Facultad Latinoamericana de Ciencias Sociales <span>—</span> Sede Argentina</p>
                    </div>
                    <div className={styles.col_right}>
                        <h4>Seguinos</h4>
                        <div className={styles.social_media}>
                            <a href="https://www.facebook.com/pentflacso.argentina" rel="noopener noreferrer" target="_blank" className={`${styles.social_media_btn} ${styles.facebook}`} />
                            <a href="https://twitter.com/pent_flacso" rel="noopener noreferrer" target="_blank" className={`${styles.social_media_btn} ${styles.twitter}`} />
                            <a href="https://www.instagram.com/pentflacso" rel="noopener noreferrer" target="_blank" className={`${styles.social_media_btn} ${styles.instagram}`} />
                            <a href="https://ar.linkedin.com/company/pentflacso" rel="noopener noreferrer" target="_blank" className={`${styles.social_media_btn} ${styles.linkedin}`} />
                            <a href="https://www.youtube.com/user/PENTFLACSO" rel="noopener noreferrer" target="_blank" className={`${styles.social_media_btn} ${styles.youtube}`} />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}