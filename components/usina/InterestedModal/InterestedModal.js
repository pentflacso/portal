import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styles from "./InterestedModal.module.scss";

export default function InterestedModal({ setModal }){    

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

                <h4>Próximas ediciones</h4>
                <p>Gracias por tu interés. Completá tus datos y te contactaremos cuando se habilite la próxima edición.</p>    

                <form className={styles.inquiry_form}>
                    <input
                    className={styles.input}
                    type="text"
                    name="firstname"
                    placeholder="Nombre"
                    //value={formData.firstname}
                    //onChange={handleChange}
                    data-required="true"
                    required
                    />
                    <input
                    className={styles.input}
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    //value={formData.lastname}
                    //onChange={handleChange}
                    data-required="true"
                    required
                    />
                    <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    //value={formData.email}
                    //onChange={handleChange}
                    data-required="true"
                    required
                    />
                    <button type="submit" className={styles.send_btn} >Enviar</button>
                </form>     
               
            </div>    
        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}