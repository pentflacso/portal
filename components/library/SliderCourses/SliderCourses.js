import { useRouter } from "next/router";
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import InscriptionMarquee from '../InscriptionMarquee/InscriptionMarquee';

import styles from "./SliderCourses.module.scss";

export default function SliderCourses( {dataCourses} ){
    const router = useRouter();
    return (
    <Swiper
        modules={[Navigation, FreeMode]}
        spaceBetween={0}
        slidesPerView={"auto"}
        navigation={true}  
        freeMode={false}   
        grabCursor={true}    
        className={`${styles.carrousel_propuestas_usina} swiper-cards`}       
    >   
        {dataCourses.map((item, i) => 
             router.asPath !== item.path  ?  (<SwiperSlide key={i}>                           
                    <article className={styles.card}>
                        {item.status == 0 && <InscriptionMarquee data={[{ value: "Inscripción abierta — Inscripción abierta" }]} />}
                        { item.image && <img src={item.image} alt={item.title} />}

                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <div className={styles.duration_and_modality}>
                            <p>{item.duration}</p>
                            <p>{item.mode}</p>
                        </div>                                    
                        <Link href={item.path} className="cta_btn">Más información</Link>
                    </article>                   
            </SwiperSlide>) : ""
        )}                            
    </Swiper>    )
}