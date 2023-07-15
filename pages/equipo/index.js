/*import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import Link from 'next/link';
import TeamData from '../../components/equipo/TeamData/TeamData';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import Footer from '../../components/library/Footer/Footer';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";*/
import MetaTags from '../../components/library/MetaTags/MetaTags';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import styles from "./equipo.module.scss";


export default function Equipo({data}){
/*
    const { windowSize } = useAppContext();

    useEffect(() => {

        if(windowSize >= 1025 ){   

            // Follow custom cursor
            const ball = document.querySelector(".cursor_conocer");
            gsap.set(".cursor_conocer", {xPercent: -50, yPercent: -70});       
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
            $(`.${styles.member}`).on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_conocer", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            $(`.${styles.member}`).on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_conocer", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            });     
        }   
                    
    }, [windowSize]);


    return(
    <>
        <MetaTags
            pageTitle={'Equipo — FLACSO | PENT'}
            shareTitle={'Equipo — FLACSO | PENT'}
            keywords={'especialistas, equipo, profesionales, disciplinas, interdiscipinario, expertise, administración, coordinación, desarrollo institucional, comunicación, desarrollo, docentes, gestión de contenidos, diseño, programación, diplomas superiores, especialización, posgrado, quiénes somos, acerca de'}
            description={'Somos un equipo de especialistas en educación y tecnologías digitales.'}
        />

        <MainWrapper> 
            <PageHeading title={data.PageHeading} margin_bottom_type={0} />

            <section>
                <TwoColumsText texto={data.TwoColumnsText}/>
            </section>

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee} />
                </div>        
                <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}  
                freeMode={false}   
                grabCursor={false}  
                className={`${styles.carrousel_members} swiper-cards members`}                       
                >   
                {data.members.map((item, i) => (                        
                    <SwiperSlide key={i}>
                        <Link className={styles.member} href={item.url}>
                            <div className={styles.img_container}>
                                <img src={item.img}/>
                            </div>
                            <h5>{item.nombre}</h5>
                        </Link>            
                    </SwiperSlide>
                ))}                            
                </Swiper>       
                <TeamData team={data.team}/>
            </section>

            <Footer />
        </MainWrapper> 
            
        {windowSize >= 1025 &&
            <div className="cursor_conocer">
                <div className="circle"><span>Conocer</span></div>
            </div>
        } 
    </>
    )
    */
    if(Object.keys(data).length > 0){  
        return(
            <>
                <MetaTags
                    pageTitle={'Equipo — FLACSO | PENT'}
                    shareTitle={'Equipo — FLACSO | PENT'}
                    keywords={'especialistas, equipo, profesionales, disciplinas, interdiscipinario, expertise, administración, coordinación, desarrollo institucional, comunicación, desarrollo, docentes, gestión de contenidos, diseño, programación, diplomas superiores, especialización, posgrado, quiénes somos, acerca de'}
                    description={'Somos un equipo de especialistas en educación y tecnologías digitales.'}
                />            
                <PageBuilder data={ data } stylesx={styles} />
            </>
        )
    }

}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/52`) 
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data  }
  }