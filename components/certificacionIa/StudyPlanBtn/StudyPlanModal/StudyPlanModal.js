import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styles from "./StudyPlanModal.module.scss";

export default function StudyPlanModal({ setModal }){   
    const [ closeAnimation, setCloseAnimation] = useState(false);

    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setModal('hidden');
        }, "800");    
    }   

    const modalContent = (   
        <div className={!closeAnimation ? `${styles.overlay}` : `${styles.overlay} ${styles.close_animation}` }>           
            <div className={`${styles.wrapper}`}>
            
                <button type="button" className={styles.close_btn} onClick={ () => closeShareModal() }><span/><span/></button> 

                <h4>Plan de estudios</h4>
                <p>El trayecto se estructura en <strong>3 módulos y un Espacio integrador de diseño de propuestas educativas con IA (DPIA)</strong>. La experiencia está organizada a partir de una secuencia de encuentros sincrónicos teórico-prácticos y actividades asincrónicas entre encuentros para experimentar, crear y reflexionar.</p>       
                <p>Cada módulo propone un uso específico de interacción con IA y se aborda desde tres dimensiones: A. Comprensión de la IA. B. Usos didácticos de la IA. C. Aspectos éticos, sociológicos y filosóficos.</p>
               
            </div>    
        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}