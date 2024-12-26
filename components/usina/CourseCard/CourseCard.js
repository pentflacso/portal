import styles from "./CourseCard.module.scss";

export default function CourseCard({ status, format, image, path, title, description, duration, mode }){

    return (    
        <article className={styles.card}>
            {status == 0 && <p className={styles.inscription_status}>{`${format} — Inscripción abierta`}</p>}
            {status == 2 && <p className={styles.inscription_closed}>Inscripción cerrada</p>}

            {image && <a href={path} className={styles.image}><img src={image} alt={title}/></a>}
            <h5><a href={path}>{title}</a></h5>
            <p className={styles.description}>{description}</p>    
            <div className={styles.duration_and_modality}>
                <p>{duration}</p>
                <p>{mode}</p>
            </div>                             
            <a href={path} className={`${styles.cta_btn} cta_btn`}>Más información</a>
        </article>                 
    )
}