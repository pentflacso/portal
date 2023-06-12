import { useAppContext } from '../../../context/AppContext';
import Link from "next/link";
import styles from "./Announcement.module.scss";

export default function Announcement(){

    const { setAnnouncementStatus } = useAppContext();

    return( 
        <div className={styles.announcement}>   

            <button type="button" className={styles.close_btn} onClick={ () => setAnnouncementStatus(false) }><span/><span/></button> 

            <div className={styles.info}>             

                <p><strong>Incripción abierta</strong> — Posgrado en Educación y Nuevas Tecnologías — <Link href='https://pent.flacso.org.ar/posgrado/educacion-nuevas-tecnologias/' target="_blank"><span>Más información</span></Link></p> 

            </div>          
        </div>
    );
}