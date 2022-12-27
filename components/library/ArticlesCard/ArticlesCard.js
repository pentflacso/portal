import styles from "./ArticlesCard.module.scss";

export default function ArticlesCard({section, category, title, authors, description, hashtags}){
  if(section === "producciones"){
    return( 
    <div className={styles.wrapper}>
        <span className={styles.category}>{category}</span>                        
        <h4>{title} <span className={styles.authors}>Por - { authors } </span></h4>

        <p>{ description }</p>

        <div className={styles.hashtags}>
            <ul>{ hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul>                            
        </div>         
    </div> 
    );
  }else if(section === "novedades"){
    return( 
    <div className={styles.wrapper}>
        <span className={styles.category}>{category}</span>                        
        <h4>{title} <span className={styles.authors}>Por - { authors } </span></h4>

        <p>{ description }</p>

        <div className={styles.hashtags}>
            <ul>{ hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul>                            
        </div>         
    </div> 
    ); 
  } 
}