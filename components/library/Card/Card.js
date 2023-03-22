import styles from "./Card.module.scss";
import Link from "next/link";

export default function Card({ lead, title, subtitle, description, category, hashtags, date, url}){


    return( 
    
    <Link href={url} className={lead ? `${styles.card} clickable` : `${styles.card} ${styles.new} clickable`}>
        { lead
        ?
          <>
            <span>{lead}</span>
            <h5>{title}&nbsp;<span>{subtitle}</span></h5>
            { description && <p>{description}</p> }  
            <ul className={styles.hashtags}>{ hashtags.map((hashtags , i) => <li key={i}>{hashtags}</li>) }</ul>                            
          </>
          :    
          <>    
            <h5>{title}</h5>
            <p className={styles.info}>{category} —&nbsp;<span>{date}</span></p>
            { description && <p>{description}</p> }
          </>
        }
    </Link> 
    );
}