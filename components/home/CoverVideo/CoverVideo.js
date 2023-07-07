import { useAppContext } from '../../../context/AppContext';
import styles from "./CoverVideo.module.scss";

export default function CoverVideo({data}){
console.log(data);

    const { windowSize } = useAppContext();
    
    return(
        <div className={styles.container}>
            {windowSize >= 1025 ?
                <video playsInline autoPlay muted loop>
                    {/* <source src="/diploma/e-learning/images/anim-exp-3-elemento-izquierda-video.webm" type="video/webm" /> */}
                    <source src={data.video_dk1} type="video/mp4" />                                          
                </video>
            :
                <video playsInline autoPlay muted loop>
                    <source src={data.video_mb1} type="video/mp4" />                                          
                </video>
            }
        </div>
    );
}