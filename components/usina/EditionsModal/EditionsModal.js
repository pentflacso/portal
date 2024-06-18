import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styles from "./EditionsModal.module.scss";

export default function EditionsModal({ setModal }){

    const dataEditions = [
        {
            "title": "Laboratorio de inteligencia artificial y educación",
            "duration": "4 semanas",
            "start": "9 de diciembre de 2023"
        },
        {
            "title": "Taller de aplicaciones y herramientas digitales para enseñar y aprender",
            "duration": "2 semanas",
            "start": "12 de marzo de 2024"
        },
        {
            "title": "Laboratorio de inteligencia artificial y educación",
            "duration": "2 semanas",
            "start": "6 de junio de 2024"
        },
        {
            "title": "Taller de aplicaciones y herramientas digitales para enseñar y aprender",
            "duration": "6 semanas",
            "start": "26 de septiembre de 2023"
        }
    ]

    const [ currentContent, setCurrentContent] = useState('editions');
    const [ closeAnimation, setCloseAnimation] = useState(false);

    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setModal('hidden');
        }, "800");    
    }
    

    const modalContent = (   
        <div className={!closeAnimation ? `${styles.overlay}` : `${styles.overlay} ${styles.close_animation}` }>            

            <div className={currentContent === 'subscription' ? `${styles.wrapper} ${styles.subscription}` : `${styles.wrapper}` }>
            
                <button type="button" className={styles.close_btn} onClick={ () => closeShareModal() }><span/><span/></button> 

                {currentContent === 'editions' ?
                <>
                    <h4>Próximas Ediciones</h4>
                    {dataEditions.map((d, i) => (
                        <div className={styles.edition_box} key={i}>
                            <div className={styles.title}><p>{d.title}</p></div>
                            <div className={styles.duration}><p><span>Duración</span><br />{d.duration}</p></div>
                            <div className={styles.start}><p><span>Inicio</span><br />{d.start}</p></div>
                            <div className={styles.interested_btn} onClick={ () => setCurrentContent('subscription') }><button type="button">Me interesa</button></div>
                        </div>
                    ))} 
                </>
                :
                <>
                    <div className={styles.subscription}>
                        <button type="button" className={styles.back_arrow} onClick={ () => setCurrentContent('editions') }><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/>Próximas Ediciones</button> 

                        <h4>Descargar</h4>
                        <p>Gracias por tu interés. Completá tus datos y te contactaremos cuando se habilite la próxima edición.</p>

                        <form>
                            <input className={styles.input} type="text" name="Nombre" placeholder="Nombre" data-required="true" required />                    

                            <input className={styles.input} type="text" name="Apellido" placeholder="Apellido" data-required="true" required />

                            <input className={styles.input} type="email" name="Email" placeholder="Email" data-required="true" required />

                            <label className={styles.checkbox}><input type="checkbox" value="checkbox" defaultChecked /><span>Deseo recibir descuentos, becas y novedades.</span></label>

                            <button type="submit" className={styles.send_btn}>Enviar</button>
                        </form>
                    </div>                    
                </>                
                }              
     
            </div>   

        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}