import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import styles from "./Announcement.module.scss";

export default function Announcement({data}){
    const { setAnnouncementStatus } = useAppContext();
    const [announcementOutAnimation, setAnnouncementOutAnimation] = useState(false);

    function closeAnnouncement() {
        setAnnouncementOutAnimation(true);
        setTimeout(() => {
            setAnnouncementStatus(false);
        }, "500");    
    }

   if(data ){ 
        return( 
            <div className={!announcementOutAnimation ? `${styles.announcement}` : `${styles.announcement} ${styles.animation_out}` }>   

                <button type="button" className={styles.close_btn} onClick={ () => closeAnnouncement() }><span/><span/></button> 
                
                <div className={styles.info} dangerouslySetInnerHTML={{ __html:  data.body }}></div>          
            
            </div>
        );
    }
}