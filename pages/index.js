import { useEffect } from 'react';
import HomeHeading from '../components/home/HomeHeading/HomeHeading';
import CoverVideo from '../components/home/CoverVideo/CoverVideo';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
import SectionSelector from '../components/home/SectionSelector/SectionSelector';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import NewsSelector from '../components/home/NewsSelector/NewsSelector';
//import Card from '../components/library/Card/Card';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./index.module.scss";

function Home(d){

    // const data = Object.values(d); Esta const quedó declarada pero no se usa


    useEffect(() => {

                // Follow custom cursor
                const ball = document.querySelector(".cursor_leer");
                gsap.set(".cursor_leer", {xPercent: -50, yPercent: -70});       
                const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
                const mouse = { x: pos.x, y: pos.y };
                const speed = 0.25;
                const xSet = gsap.quickSetter(ball, "x", "px");
                const ySet = gsap.quickSetter(ball, "y", "px");
                
                window.addEventListener("mousemove", e => {
                    mouse.x = e.x;
                    mouse.y = e.y; 
                });
                
                gsap.ticker.add(() => {
                    // adjust speed for higher refresh monitors
                    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
                    pos.x += (mouse.x - pos.x) * dt;
                    pos.y += (mouse.y - pos.y) * dt;
                    xSet(pos.x);
                    ySet(pos.y);
                });
                $(`.${styles.card_new}`).on("mouseenter", function mouseEnterContainer() {
                    gsap.to(".cursor_leer", {
                        duration: 0.8,
                        scale: 1,
                        opacity: 1,
                        ease: Elastic.easeOut.config( 1, 0.6)
                    });
                });
                $(`.${styles.card_new}`).on("mouseleave", function mouseLeaveContainer() {
                    gsap.to(".cursor_leer", {
                        duration: 0.8,
                        scale: 0,
                        opacity: 0,
                        ease: Back.easeOut.config(3)
                    });
                });                    
    }, []);


    return(
    <>
        <HomeHeading title={d.PageHeading} />

        <CoverVideo />

        <div className={styles.marquee_1}>
            <TextMarquee data={d.marquee1}/>
        </div>

        <SectionSelector data={d.MemberData} />

        <div className={styles.marquee_1}>
            <TextMarquee data={d.marquee2} />
        </div>

     
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}  
                freeMode={false}   
                grabCursor={true} 
                className={`${styles.carrousel_novedades} swiper-cards`}
            >

                {d.courses.map((d, i)=>(
                    <SwiperSlide key={i}>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank" className={styles.card_new}>
                            <div className={styles.info}>
                                <h5>{d.title}</h5>
                                <p>{d.description}</p>
                            </div>                       
                        <img src={d.img} alt="foto posgrado" />                    
                        </a>
                    </SwiperSlide> 

                    /* 
                    No tengo forma de customizar los estilos desde el style module del index, esto es fundamental, porque en cada caso cambian bastante y a su vez, la idea es manejar todo desde el sistema de diseño. Tener todo en un solo componente complica bastante los ajustes.

                    <SwiperSlide key={key}>
                        <Card {...d} />
                    </SwiperSlide>  */
                ))} 

            </Swiper>
   

        <NewsSelector data={d.NewsData} />        
    </>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/home.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data}   }
  }

  export default Home;