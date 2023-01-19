import styles from "./Card.module.scss";
import Link from "next/link";

export default function Card({category, lead , title, subtitle , description, hashtags, date, cta, height, layout, img, url}){

    return( 
    <Link 
      className={ 
        height ?
          height == "hidden" ? 
            img ? `${styles.card} ${styles.height}` : `${styles.wrapper} ${styles.height}` 
            : img ? styles.card : styles.wrapper 
        : img ? styles.card : styles.wrapper
      }
      href={url}
      rel="noopener noreferrer" 
      target={layout ? "_blank" : ""}
    >
        {(layout == "imgTop" || !layout) && img ? 
          <img src={ img } alt={ title } className={styles.imgTop} /> :""}

        { lead ? <div><span className={styles.lead}>{lead}</span></div>: "" }
        
        <div className={styles.titles}>
          <h4>{title}</h4>                       
          
          { subtitle ? <h5> {subtitle} </h5>: ""}
        </div>

        {category ?
          <p className={styles.info}>
            <span className={styles.category}>{category} {date ? "- ": ""}</span> 
            {date ? <span className={styles.date}> {date}</span>: ""}
          </p> : ""
        }
        
        <p>{ description }</p>

        { hashtags ?
          <div className={styles.hashtags}>
              <ul>{ hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul>                            
          </div> : ""
        }

        {layout == "imgBottom" && img ? <img src={ img } alt={ title } /> :""}
        
        {cta ? <button>{ cta }</button> : ""}

    </Link> 
    );

}