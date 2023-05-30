import { useAppContext } from '../../../context/AppContext';
import styles from "./CoverVideo.module.scss";

export default function CoverVideo(){

    const { windowSize } = useAppContext();
    
    return(
        <div className={styles.container}>
            {windowSize >= 1025 ?
                <video playsInline autoPlay muted loop>
                    {/* <source src="/diploma/e-learning/images/anim-exp-3-elemento-izquierda-video.webm" type="video/webm" /> */}
                    <source src="/assets/videos/demo_v_home.mp4" type="video/mp4" />                                          
                </video>
            :
                <video playsInline autoPlay muted loop>
                    <source src="/assets/videos/demo_v_home_mobile.mp4" type="video/mp4" />                                          
                </video>
            }
        </div>
    );
}