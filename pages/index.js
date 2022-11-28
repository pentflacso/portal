import HomeHeading from '../components/home/HomeHeading/HomeHeading';
import CoverVideo from '../components/home/CoverVideo/CoverVideo';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
import SectionSelector from '../components/home/SectionSelector/SectionSelector';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import NewsSelector from '../components/home/NewsSelector/NewsSelector';
import styles from "./index.module.scss";

export default function Home(){

    const NewsData = [
        {title: 'Un sincrónico para pensar lo sincrónico', description: 'Many desktop publishing packages and web', path_id: 'formacion'},
        {title: 'Una travesía con senderos, fronteras y horizontes para capacitarse', description: 'Many desktop publishing packages and web', path_id: 'formacion'},
        {title: 'Aprendizaje por indagación para potenciar un rol activo', description: 'Many desktop publishing packages and web', path_id: 'formacion'},
        {title: 'Enseñar, aprender y trabajar en línea', description: 'Many desktop publishing packages and web', path_id: 'formacion'}
    ]

    return(
    <>
        <HomeHeading title="Somos un espacio de <span>capacitación</span><br /> en educación y tecnologías digitales" />

        <CoverVideo />

        <TextMarquee data="EXPLORAR&nbsp;-&nbsp;INVESTIGAR&nbsp;-&nbsp;APRENDER&nbsp;-&nbsp;DESCUBRIR&nbsp;-&nbsp;"/>

        <SectionSelector />

        <TextMarquee data="NOVEDADES&nbsp;-&nbsp;NOVEDADES&nbsp;-&nbsp;"/>

        <div className={styles.carrousel_novedades}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation   
                freeMode={true}   
                grabCursor={true} 
            >     
                <SwiperSlide>
                    <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className={styles.card}>                        
                        <h5>¡Capacitate en e-learning!</h5>
                        <p>Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves de la edu.</p>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />                    
                    </a>
                </SwiperSlide>    
                <SwiperSlide>
                    <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className={styles.card}>                        
                        <h5>Desarrollamos el portal utopía para Fundación Bunge y Born</h5>
                        <p>Conversamos con diferentes especialistas sobre cuestiones claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea,claves de la edu.</p>  
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />                  
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className={styles.card}>                        
                        <h5>¡Capacitate en e-learning!</h5>
                        <p>Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves de la edu.</p>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />                    
                    </a>
                </SwiperSlide>    
                <SwiperSlide>
                    <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className={styles.card}>                        
                        <h5>Desarrollamos el portal utopía para Fundación Bunge y Born</h5>
                        <p>Conversamos con diferentes especialistas sobre cuestiones claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea,claves de la edu.</p>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />                    
                    </a>
                </SwiperSlide>               
            </Swiper>
        </div>

        <NewsSelector data={NewsData} />
    </>
    );
}