import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styles from "./ShareBtns.module.scss";

export default function ShareBtns({ shareurl, setShareModal}){

    const [ closeAnimation, setCloseAnimation] = useState(false);

    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setShareModal(false);
        }, "800");    
    }

    const modalContent = (   
        <div className={!closeAnimation ? `${styles.overlay}` : `${styles.overlay} ${styles.close_animation}` }>

            <button type="button" className={styles.close_btn} onClick={ () => closeShareModal() }><span/><span/></button> 

            <div className={styles.btns}>
                <p>Compartir en:</p>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareurl}`} target="_blank" rel="noreferrer"><span />Facebook</a><br />         
                <a href={`https://api.whatsapp.com/send?text=${shareurl}`} target="_blank" rel="noreferrer"><span />WhatsApp</a><br />     
                <a href={`https://twitter.com/share?url=${shareurl}`} target="_blank" rel="noreferrer"><span />Twitter</a><br />  
                <a href={`https://www.linkedin.com/shareArticle?url=${shareurl}`} target="_blank" rel="noreferrer"><span />LinkedIn</a>   
            </div>   

        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}