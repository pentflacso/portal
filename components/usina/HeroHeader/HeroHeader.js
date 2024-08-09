import styles from "./HeroHeader.module.scss";

export default function HeroHeader({blockProps}){

    return(
        <div className={styles.wrapper}>
            <h2>USINA DE EXPERIENCIAS</h2>
            <div className={styles.video_pill}>
                <video poster={blockProps.field_hero_poster.url} playsInline autoPlay muted loop >
                    <source src= {blockProps.field_hero_mp4} type="video/mp4" />   
                    <source src= {blockProps.field_hero_webm} type="video/mp4" />                                          
                </video>
            </div>
            <div className={styles.description} dangerouslySetInnerHTML={{__html: blockProps.field_usina_description[0].value}}/> 

        </div>
    );
}