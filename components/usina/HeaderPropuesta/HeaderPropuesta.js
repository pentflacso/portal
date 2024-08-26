import Link from 'next/link';
import styles from "./HeaderPropuesta.module.scss";

export default function HeaderPropuesta({ blockProps }) {

    return (
        <header className={styles.wrapper}>

            <div className={styles.col_left}>
                <Link className={styles.back_arrow} href="/usina">
                    <span>
                        <img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha" />
                        <strong>Usina de experiencias</strong>
                    </span>
                </Link>
                <h1 className={styles.title}>{blockProps.field_text_and_video_title[0].value}</h1>
                <p>{blockProps.field_text_and_video_description[0].value}</p>
                <div className={styles.triangles}>
                    {blockProps.field_text_and_video_data.map((data, i) => (
                        <p key={i}>{data.value}</p>
                    ))}
                </div>
            </div>

            <div className={styles.col_right}>
                <video
                    key={blockProps.field_text_and_video_mp4} // Este `key` forzará el re-renderizado del video
                    width="320"
                    height="240"
                    poster={blockProps.field_text_and_video_poster.url}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className={styles.poster}
                    playsInline={true}
                >
                    <source src={blockProps.field_text_and_video_mp4} type="video/mp4" />
                    <source src={blockProps.field_text_and_video_webm} type="video/webm" />
                </video>
            </div>

        </header>
    );
}