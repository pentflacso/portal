import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import Link from 'next/link';
import Footer from '../../components/library/Footer/Footer';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./perfil.module.scss";


function Perfil(data){   

    const { windowSize } = useAppContext();

    useEffect(() => {

        if(windowSize >= 1025 ){   

            const ball = document.querySelector(".cursor_ver");
            gsap.set(".cursor_ver", {xPercent: -50, yPercent: -70});       
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

            $('.clickable').on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_ver", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            $('.clickable').on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_ver", {
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
            shareTitle={'FLACSO | PENT'}
            keywords={'Género, Enseñanza, Derecho, Academia, Docentes, Universidad'}
            description={'Somos un equipo de especialistas en educación y tecnologías digitales'}
        />

        <MainWrapper> 
            <div className={styles.pin_block}>
                <div className={styles.col_left}>
                    <header>
                        <Link className={styles.back_arrow} href="/equipo"><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver equipo</strong></span></Link>
                        <h1 className={styles.name_and_position}>{data.name}<br /><span>{data.description}</span></h1>
                    </header>
                    <article className={styles.cv} dangerouslySetInnerHTML={{__html: data.cv }} />
                </div>
                <div className={styles.col_right}>
                    <img src={data.picture} alt={`Imagen de ${data.name}`} />
                </div>
            </div>
            <section className={styles.producciones}>
                <h2>Producciones</h2>
                <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}  
                freeMode={false}   
                grabCursor={windowSize >= 1025 ? true : false} 
                className={`${styles.carrousel_novedades} swiper-cards`}
                >
                {data.productions.map((data, i)=>(
                    <SwiperSlide key={i}>                                        
                        <Link href={data.url} className={`${styles.card} clickable`}>   
                            <span>{data.lead}</span>
                            <h5>{data.title}&nbsp;<span>{data.subtitle}</span></h5>
                            { data.description && <p>{data.description}</p> }  
                            <ul className={styles.hashtags}>{ data.hashtags.map((hashtags , i) => <li key={i}>{hashtags}</li>) }</ul>                          
                        </Link>                     
                    </SwiperSlide> 
                ))} 
                </Swiper>
            </section>
            <Footer />
        </MainWrapper> 
            
        {windowSize >= 1025 &&
            <div className="cursor_ver">
                <div className="circle"><span>Ver</span></div>
            </div>
        }     
    </>
    )
}

export async function getServerSideProps({query}) {
    // Fetch data from external API 
    console.log(query.perfil);
    const res = await fetch(`https://flacso.pent.org.ar/api/perfil-${query.perfil}.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }

  export default Perfil