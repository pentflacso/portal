import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Link from "next/link";

import styles from "./GroupsModal.module.scss";

export default function GroupsModal({ setModal,groups }){

    

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

                <>
                    <h4>Opciones de cursada</h4>
                    {groups.map((d, i) => (
                        <div className={styles.edition_box} key={i}>
                            <div className={styles.title}><p>{d.title}</p></div>
                            
                            <div  className={styles.cta}>
                           <Link href={d.uri} className={styles.interested_btn}>Elegir</Link>  
                           </div>
                        </div>
                    ))} 
                </>
                       
                </div>     


        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}