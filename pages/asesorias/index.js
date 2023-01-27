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

        <KeysBox data={data.keyFeatures} />

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee2} />
        </div>

        <div className={`${styles.carrousel_proyects} swiper-cards`}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={25}
                slidesPerView={"auto"}
                navigation   
                freeMode={true}   
                grabCursor={true} 
            >   
            {
        data.articles.map((item, key) => (
            <SwiperSlide >
                    <article className={styles.card}>
                        <img src={item.img} />
                        <h5>{item.description}</h5>                    
                    </article>  
                </SwiperSlide>
          ))
        } 
                
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