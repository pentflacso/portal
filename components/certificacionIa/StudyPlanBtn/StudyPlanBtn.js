import { useState } from 'react';
import StudyPlanModal from './StudyPlanModal/StudyPlanModal';
import styles from "./StudyPlanBtn.module.scss";

export default function StudyPlanBtn(){

    const [ modal, setModal ] = useState('hidden');   

    return(
        <>
            {modal === 'show' && <StudyPlanModal setModal={setModal} />} 

            <div className={styles.wrapper}>
                <button className={styles.cta_btn} type="button" onClick={ () => setModal('show')}>Ver plan de estudio</button>
            </div>
        </>
    )
}