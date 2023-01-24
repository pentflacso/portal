import PageHeading from '../../components/library/PageHeading/PageHeading';
import LeafsItem from '../../components/asesorias/LeafsItem/LeafsItem';
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import BrandsMarquee from '../../components/asesorias/BrandsMarquee/BrandsMarquee';
import Quotes from '../../components/library/Quotes/Quotes';
import ParagraphAndButton from '../../components/asesorias/ParagraphAndButton/ParagraphAndButton';
import styles from "./asesorias.module.scss";
import Card from '../../components/library/Card/Card';
import React, { useRef, useState } from "react";
import { EffectCards } from "swiper";
import CarrouselCards from '../../components/asesorias/CarrouselCards/CarrouselCards';

export default function Asesorias(data){

    const keyFeatures = [
        {img: '/assets/images/icon_asesorias_proceso_1.svg', description: 'Definimos la estrategia pedagógica según las necesidades.'},
        {img: '/assets/images/icon_asesorias_proceso_2.svg', description: 'Creamos contenidos, recursos educativos y materiales didácticos.'}, {img: '/assets/images/icon_asesorias_proceso_3.svg', description: 'Diseñamos y construimos entornos virtuales, sitios y plataformas, LMS y CMS.'},
        {img: '/assets/images/icon_asesorias_proceso_4.svg', description: 'Brindamos soporte técnico, capacitamos y acompañamos.'}
    ]

    return(
    <>
        <PageHeading title={data.PageHeading} margin_bottom_type={0} />
        
        <CarrouselCards items={data.courses} margin_bottom_type={0} />

        {/* <LeafsItem /> */}

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee1} />
        </div>


        <div className={styles.highlight_paragraph}>
            <HighlightParagraph title={data.paragraph1} />
        </div>

        <KeysBox data={keyFeatures} />

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee2} />
        </div>

        <div className={`${styles.carrousel_proyects} swiper-cards`}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={150}
                slidesPerView={"auto"}
                navigation   
                freeMode={true}   
                grabCursor={true} 
            >     
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>Galeno Aprender +</h5>                    
                    </article>  
                </SwiperSlide> 
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>utopía FBB</h5>                    
                    </article>  
                </SwiperSlide> 
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>Galeno Aprender +</h5>                    
                    </article>         
                </SwiperSlide>   
                <SwiperSlide>
                    <article className={styles.card}>
                        <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                        <h5>Galeno Aprender +</h5>                    
                    </article>         
                </SwiperSlide> 
                
            </Swiper>
        </div>

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee3} />
        </div>

        <div className={styles.highlight_paragraph}>
            <HighlightParagraph title={data.paragraph2} />
        </div>

        <div className={styles.brands_marquee}>
            <BrandsMarquee partners={data.partners}/>
        </div>

        <div className={styles.quotes_container}>
          <Quotes items={data.quotes}/>
        </div>

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee4} />
        </div>

        <ParagraphAndButton 
            paragraph={data.paragraph3}
            iconBtn='/assets/images/mail_icon.svg'
            urlBtn='https://www.google.com/'
        />
    </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/asesorias.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }