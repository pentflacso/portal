import styles from "./Card.module.scss";

export default function Card({category, lead , title, subtitle , description, hashtags, date, button, height, layout, img}){
    return( 
    <div className={styles.wrapper}>
        {layout == "imgTop" && img ? <img src={ img.src } alt={ img.alt } /> :""}

        { lead ? <div><span className={styles.lead}>{lead}</span></div>: "" }
        
        <div className={styles.titles}>
          <h4>{title}</h4>                       
          
          { subtitle ? <h5> {subtitle} </h5>: ""}
        </div>

        {category ?
          <p className={styles.info}>
            <span className={styles.category}>{category} -</span> 
            <span className={styles.date}>{date}</span>
            
          </p> : ""
        }
        
        <p>{ description }</p>

        { hashtags ?
          <div className={styles.hashtags}>
              <ul>{ hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul>                            
          </div> : ""
        }

        {layout == "imgBottom" && img ? <img src={ img.src } alt={ img.alt } /> :""}
        
        {button ? <button>Más información</button> :""}

    </div> 
    );

}