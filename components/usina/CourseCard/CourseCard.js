import Link from 'next/link';
import styles from "./CourseCard.module.scss";

export default function CourseCard({ status, format, image, path, title, description, duration, mode }){

    return (    
        <article className={styles.card}>
            {status == 0 && <p className={styles.inscription_status}>{`${format} — Inscripción abierta`}</p>}
            {status == 2 && <p className={styles.inscription_closed}>Inscripción cerrada</p>}

            {image && <Link href={path} className={styles.image}><img src={image} alt={title}/></Link>}
            <h5><Link href={path}>{title}</Link></h5>
            <p className={styles.description}>{description}</p>    
            <div className={styles.duration_and_modality}>
                <p>{duration}</p>
                <p>{mode}</p>
            </div>                             
            <Link href={path} className={`${styles.cta_btn} cta_btn`}>Más información</Link>
        </article>                 
    )
}