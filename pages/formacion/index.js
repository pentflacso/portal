import PageHeading from '../../components/library/PageHeading/PageHeading';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Quotes from '../../components/library/Quotes/Quotes';
import styles from "./formacion.module.scss";

export default function Formacion(){
    return(
    <>
        <PageHeading title="<h1>Ofrecemos <span>propuestas de formación</span><br /> para innovar en educación y tecnologías<h1>" margin_bottom_type={0} />

        <div className={styles.marquee_1}>
            <TextMarquee data="POSGRADOS&nbsp;—&nbsp;CURSOS&nbsp;—&nbsp;" />
        </div>

        <div className={styles.carrousel_formacion}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation   
                freeMode={true}   
                grabCursor={true} 
            >     
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>Posgrado en educación y nuevas tecnologías</h5>
                        <p>Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves de la edu.</p>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Más información</a>
                    </article>
                </SwiperSlide>    
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>Posgrado en educación y nuevas tecnologías</h5>
                        <p>Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves de la edu.</p>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Más información</a>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>Posgrado en educación y nuevas tecnologías</h5>
                        <p>Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves de la edu.</p>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Más información</a>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>Posgrado en educación y nuevas tecnologías</h5>
                        <p>Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves de la edu.</p>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Más información</a>
                    </article>
                </SwiperSlide>              
            </Swiper> 
        </div>

        <div className={styles.marquee_1}>
            <TextMarquee data="+6000 ESTUDIANTES&nbsp;&nbsp;" />
        </div>

        <div className={styles.quotes_container}>
            <Quotes />
        </div>    
    </>
    )
}