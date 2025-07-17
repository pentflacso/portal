import { useEffect, useState } from 'react';
import PromotionModal from "./PromotionModal/PromotionModal";
import PromotionAnnouncement from './PromotionAnnouncement/PromotionAnnouncement';

export default function Promotion(){

    const [ modalState, setModalState] = useState(false);
    const [ announcementState, setAnnouncementState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setModalState(true);
        }, "5000");          
    }, []);

    return(
        <>
            { modalState && <PromotionModal setModal={setModalState} setAnnouncementState={setAnnouncementState} /> }        
            { announcementState && <PromotionAnnouncement setModal={setModalState} setAnnouncementState={setAnnouncementState} /> } 
        </>
    );
}