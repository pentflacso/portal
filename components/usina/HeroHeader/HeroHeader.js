import styles from "./HeroHeader.module.scss";

export default function HeroHeader(){

    return(
        <div className={styles.wrapper}>
            <h2>USINA DE EXPERIENCIAS</h2>
            <div className={styles.video_pill}>
                <video playsInline autoPlay muted loop >
                    <source src="/assets/videos/usina_video_pill.mp4" type="video/mp4" />                                          
                </video>
            </div>
            <p><span>Propuestas cortas de formación</span> del PENT FLACSO, para construir y transformar las prácticas educativas con tecnologías en diversos ámbitos.</p>
        </div>
    );
}