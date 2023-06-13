import ReactDOM from 'react-dom';
import styles from "./ShareBtns.module.scss";

export default function ShareBtns({ shareurl, setShareModal}){

    const modalContent = (   
        <div className={styles.overlay}>

            <button type="button" className={styles.close_btn} onClick={ () => setShareModal(false) }><span/><span/></button> 

            <div className={styles.btns}>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareurl}`} target="_blank" rel="noreferrer"><span />Facebook</a>         
                <a href={`https://api.whatsapp.com/send?text=${shareurl}`} target="_blank" rel="noreferrer"><span />WhatsApp</a>   
                <a href={`https://twitter.com/share?url=${shareurl}`} target="_blank" rel="noreferrer"><span />Twitter</a>
                <a href={`https://www.linkedin.com/shareArticle?url=${shareurl}`} target="_blank" rel="noreferrer"><span />LinkedIn</a>   
            </div>   

        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}