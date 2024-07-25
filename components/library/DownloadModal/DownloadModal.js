import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styles from "./DownloadModal.module.scss";

export default function DownloadModal({ archive, setModal}){

    const [ closeAnimation, setCloseAnimation] = useState(false);

    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setModal('hidden');
        }, "800");    
    }

    const modalContent = (   
        <div className={!closeAnimation ? `${styles.overlay}` : `${styles.overlay} ${styles.close_animation}` }>            

            <div className={styles.wrapper}>
            
            <button type="button" className={styles.close_btn} onClick={ () => closeShareModal() }><span/><span/></button> 

                <h4>Descargar</h4>
                <p>Gracias por tu interés. Colocá tus datos y te enviaremos el archivo de inmediato a tu correo electrónico.</p>

                <form>
                    <input className={styles.input} type="text" name="Nombre" placeholder="Nombre" data-required="true" required />                    

                    <input className={styles.input} type="text" name="Apellido" placeholder="Apellido" data-required="true" required />
                 
                    <input className={styles.input} type="text" name="País" placeholder="País" data-required="true" required />            
                   
                    <input className={styles.input} type="email" name="Email" placeholder="Email" data-required="true" required />

                    <label className={styles.checkbox}><input type="checkbox" value="checkbox" /><span>Deseo recibir descuentos, becas y novedades.</span></label>

                    <button type="submit" className={styles.send_btn}>Enviar</button>
                </form>
     
            </div>   

        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}