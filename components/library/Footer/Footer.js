import { useAppContext } from '../../../context/AppContext';
import Link from "next/link";
import FormFoooter from "../FormFooter/FormFooter";
import styles from "./Footer.module.scss";

export default function Footer(){

    const { currentRoute } = useAppContext();

    return(
        <footer className={styles.footer_site}>
            <div className={styles.wrapper}>

                <div className={styles.info_top}>
                    <div className={styles.col_left}>                        
                        <h4>Contactanos</h4>
                        {currentRoute !== '/usina' && currentRoute !== '/usina/[propuesta]' ?
                        <> 
                            <p><a href="mailto:pent@flacso.org.ar" rel="noopener noreferrer">pent@flacso.org.ar</a><br /> Tucumán 1966, CABA, Argentina<br /> (54-11) 5238-9300 int 352</p>
                            <p>Atención administrativa:<br /> días hábiles, por correo electrónico.</p> 
                        </>
                        :
                        <>
                            <p><a href="mailto:usinapent@flacso.org.ar" rel="noopener noreferrer">usinapent@flacso.org.ar</a><br /> Tucumán 1966, CABA, Argentina<br /></p>
                            <div className={styles.access_links}>
                                <Link href="/equipo" rel="noopener noreferrer" target="_blank">El PENT FLACSO</Link><br />
                                <Link href="/formacion" rel="noopener noreferrer" target="_blank">Formación</Link><br />
                                <Link href="/asesorias" rel="noopener noreferrer" target="_blank">Asesorías</Link><br />
                                <Link href="/producciones" rel="noopener noreferrer" target="_blank">Producciones</Link><br />
                                <Link href="/investigacion" rel="noopener noreferrer" target="_blank">Investigación</Link>
                            </div>
                        </>
                        }                                               
                    </div>
                    <div className={styles.col_right}>
                        <h4>Newsletter</h4>
                        <p>Si te interesa estar al tanto de propuestas de formación, búsquedas laborales, eventos especiales, actividades en línea y novedades del PENT FLACSO, te invitamos a registrarte.</p>
                        <FormFoooter />                      
                    </div>
                </div>

                <div className={styles.info_bottom}>
                    <div className={styles.col_left}>
                        <p>©{new Date().getFullYear()} Proyecto Educación y Nuevas Tecnologías<br /> Facultad Latinoamericana de Ciencias Sociales <span>—</span> Sede Argentina</p>
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