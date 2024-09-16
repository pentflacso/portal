import { useEffect, useState } from 'react';
import styles from "./WhatsappBtn.module.scss";

export default function WhatsappBtn({ whatsAppBtnStatus,course }){

    const [menssageState, setMenssageState] = useState(1);
    const [menssageShow, setMenssageShow] = useState(true);
    const [menssageHide, setMenssageHide] = useState(false);
    const [wrapperShow, setWrapperShow] = useState(false);
    const [wrapperFade, setWrapperFade] = useState(false);

    useEffect(() => {
        if(whatsAppBtnStatus === 0){
            setWrapperFade(true);
            setTimeout(function(){
                setWrapperShow(false);
            }, 200);              
        }
        if(whatsAppBtnStatus === 1){
            setWrapperShow(true);
            setMenssageHide(false);
            setMenssageShow(true);
            setWrapperFade(false);
            setMenssageState(1);    
            setTimeout(function(){
                setMenssageState(2);
            }, 1500);    
            setTimeout(function(){
                setMenssageShow(false);
            }, 8000);            
        }  
        if(whatsAppBtnStatus === 2){
            setWrapperFade(true);           
        }  
        if(whatsAppBtnStatus === 3){
            setWrapperFade(false);           
        }     
    },[whatsAppBtnStatus]);
    
    return(
        <>
            {wrapperShow && 
                <div className={!wrapperFade ? `${styles.whatsapp_wrapper}` : `${styles.whatsapp_wrapper} ${styles.hide}`}>
                    <a href={`https://api.whatsapp.com/send/?phone=5491156645418&text=Hola+me+interesa+cursar: ${course}`} rel="noopener noreferrer" target="_blank" className={`${styles.whatsapp_btn}`}><img src="/assets/icons/whatsapp_icon.svg" alt="Logo de WhatsApp" /></a>
                    {menssageShow &&
                    <div className={!menssageHide ? `${styles.message_wrapper}` : `${styles.message_wrapper} ${styles.hide}`}>
                        <div className={menssageState === 1 ? `${styles.message} ${styles.one} ${styles.show}` : `${styles.message} ${styles.one} ${styles.hide}`}>
                            <p>Hola</p>
                        </div>
                        <div className={menssageState === 2 ? `${styles.message} ${styles.two} ${styles.show}` : `${styles.message} ${styles.two} ${styles.hide}`}>
                            <p>¿Consultas?</p>
                        </div>
                    </div>
                    }                
                </div>
            } 
        </>
    );
}