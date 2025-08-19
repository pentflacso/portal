import { useState } from 'react';
import styles from "./PromotionAnnouncement.module.scss";

export default function PromotionAnnouncement({ setModal, setAnnouncementState }) {
    const [announcementOutAnimation, setAnnouncementOutAnimation] = useState(false);

    function closeAnnouncement() {
        setAnnouncementOutAnimation(true);
        setTimeout(() => {
            setAnnouncementState(false);
        }, 500);
    }

    function showPromotion() {
        setAnnouncementOutAnimation(true);
        setTimeout(() => {
            setModal(true);
            setAnnouncementState(false);
        }, 500);
    }

    return(
        <div className={!announcementOutAnimation
            ? `${styles.promotion_announcement}`
            : `${styles.promotion_announcement} ${styles.animation_out}`}
        >
            <button
                type="button"
                aria-label="Cerrar anuncio"
                className={styles.close_btn}
                onClick={closeAnnouncement}
            >
                <span /><span />
            </button>
            <div className={styles.info}>
                <p>🔥 <strong>Hasta 50% de descuento + Packs a precios super bajos</strong> — ¡Válido hasta el 15 de septiembre! — </p> <button type="button" onClick={showPromotion}>Más info</button>
            </div>
        </div>
    );
}