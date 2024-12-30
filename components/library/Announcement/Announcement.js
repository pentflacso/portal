import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from "./Announcement.module.scss";

export default function Announcement({ data }) {
    const { setAnnouncementStatus } = useAppContext();
    const [announcementOutAnimation, setAnnouncementOutAnimation] = useState(false);
    const [shouldDisplay, setShouldDisplay] = useState(true);
    const router = useRouter();
    const currentPath = router.asPath;

    useEffect(() => {
        if (data.exception) {
            const exceptions = data.exception.split(',').map(exc => exc.trim());
            const matchException = exceptions.some(exception => {
                // Si termina en *, es un wildcard
                if (exception.endsWith('*')) {
                    const basePath = exception.slice(0, -1); // Remover *
                    return currentPath.startsWith(basePath);
                }
                // Si no es wildcard, debe coincidir exactamente
                const escapedException = exception.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapar caracteres especiales
                const exactMatchRegex = new RegExp(`^${escapedException}$`);
                return exactMatchRegex.test(currentPath);
            });

            if (matchException) {
                setShouldDisplay(false);
            }
        }
    }, [data.exception, currentPath]);

    function closeAnnouncement() {
        setAnnouncementOutAnimation(true);
        setTimeout(() => {
            setAnnouncementStatus(false);
        }, 500);
    }

    if (shouldDisplay && data.body) {
        return (
            <div className={!announcementOutAnimation
                ? `${styles.announcement} ${data.type == 1 ? styles.duelo : ''}`
                : `${styles.announcement} ${styles.animation_out} ${data.type == 1 ? styles.duelo : ''}`}
            >
                <button
                    type="button"
                    aria-label="Cerrar anuncio"
                    className={styles.close_btn}
                    onClick={closeAnnouncement}
                >
                    <span /><span />
                </button>
                <div
                    id="announcementCTA"
                    className={styles.info}
                    dangerouslySetInnerHTML={{ __html: data.body }}
                />
            </div>
        );
    } else {
        return null;
    }
}
