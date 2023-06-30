import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import Link from "next/link";
import styles from "./Announcement.module.scss";

export default function Announcement(){

    const { setAnnouncementStatus } = useAppContext();
    const [announcementOutAnimation, setAnnouncementOutAnimation] = useState(false);

    function closeAnnouncement() {
        setAnnouncementOutAnimation(true);
        setTimeout(() => {
            setAnnouncementStatus(false);
        }, "500");    
    }

    return( 
        <div className={!announcementOutAnimation ? `${styles.announcement}` : `${styles.announcement} ${styles.animation_out}` }>   

            <button type="button" className={styles.close_btn} onClick={ () => closeAnnouncement() }><span/><span/></button> 

            <div className={styles.info}>             

                <p><strong>Incripción abierta</strong> — Posgrado en Educación y Nuevas Tecnologías — <Link href='https://pent.flacso.org.ar/posgrado/educacion-nuevas-tecnologias/' target="_blank"><span>Más información</span></Link></p> 

            </div>          
        </div>
    );
}