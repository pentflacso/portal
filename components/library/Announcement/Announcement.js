import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from "./Announcement.module.scss";

export default function Announcement({data}){
    const { setAnnouncementStatus } = useAppContext();
    const [announcementOutAnimation, setAnnouncementOutAnimation] = useState(false);
    const [shouldDisplay, setShouldDisplay] = useState(true);
    const router = useRouter();
    const currentPath = router.asPath;
console.log(router.asPath);
    useEffect(() => {
        if (data.exception) {
            const exceptions = data.exception.split(',').map(exc => exc.trim());
            const matchException = exceptions.some(exception => {
                const regex = new RegExp(`^${exception.replace('*', '.*')}$`);
                return regex.test(currentPath);
            });

            if (matchException) {
                setShouldDisplay(false);
            }
        }
    }, [data.exception, currentPath]);

    function closeAnnouncement() {
        setAnnouncementOutAnimation(true);
        setTimeout(() => {
            setAnnouncementStatus(false);
        }, 500);    
    }

    if (shouldDisplay && data.body) {
        return( 
            <div className={!announcementOutAnimation ? `${styles.announcement}` : `${styles.announcement} ${styles.animation_out}` }>   
                <button type="button" aria-label="Cerrar anuncio" className={styles.close_btn} onClick={closeAnnouncement}><span/><span/></button> 
                <div id="announcementCTA" className={styles.info} dangerouslySetInnerHTML={{ __html:  data.body }}></div>          
            </div>
        );
    } else {
        return null;
    }
}