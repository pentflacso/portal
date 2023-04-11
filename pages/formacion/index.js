import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Quotes from '../../components/library/Quotes/Quotes';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./formacion.module.scss";


export default function Formacion(data){

    const { windowSize } = useAppContext();
    

    useEffect(() => {

        if(windowSize >= 1025){

            // Follow custom cursor
            const ball = document.querySelector(".cursor_deslizar");
            gsap.set(".cursor_deslizar", {xPercent: -50, yPercent: -70});       
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
            $(`.${styles.carrousel_formacion}`).on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            $(`.${styles.carrousel_formacion}`).on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            });   
            $(`.${styles.carrousel_formacion} .cta_btn`).on("mouseenter", function mouseEnterCta() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            }); 
            $(`.${styles.carrousel_formacion} .cta_btn`).on("mouseleave", function mouseLeaveCta() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });     
        }           
    }, []);


    return(
    <>
        <PageHeading title={data.PageHeading} margin_bottom_type={0} />

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee1} />
        </div>

        {windowSize >= 1025 ?
        <>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={false}  
                freeMode={true}   
                grabCursor={true}    
                className={`${styles.carrousel_formacion} swiper-cards`}       
            >   
            {
            data.courses.map((item, i) => (
            <SwiperSlide key={i}>
                <article className={styles.card}>
                    <img src={item.img} alt="foto posgrado" />
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <a href={item.url} rel="noopener noreferrer" target="_blank" className="cta_btn">{item.cta}</a>
                </article>            
            </SwiperSlide>
            ))
            }                            
            </Swiper>
        </>
        :
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={false}     
                className={`${styles.carrousel_formacion} swiper-cards`}       
            >   
            {
            data.courses.map((item, i) => (
            <SwiperSlide key={i}>
                <article className={styles.card}>
                    <img src={item.img} alt="foto posgrado" />
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <a href={item.url} rel="noopener noreferrer" target="_blank" className="cta_btn">{item.cta}</a>
                </article>            
            </SwiperSlide>
            ))
            }                            
            </Swiper>
        </>
        }

        <div className={styles.marquee_2}>
            <TextMarquee data={data.marquee2} />
        </div>       
        
        <Quotes items={data.quotes}/>         
    </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/formacion.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }