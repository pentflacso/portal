import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import Link from 'next/link';
import Footer from '../../components/library/Footer/Footer';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./perfil.module.scss";
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';


function Perfil(d){   

    const { windowSize, setDataStrip } = useAppContext();

    let  {strip, ...data}  = d;
    
    useEffect(() => {
        setDataStrip(strip);
    }, [])

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
            pageTitle={ data.title + ' — FLACSO | PENT'}
            shareTitle={ data.title }
            keywords={'Educación, Tecnología, TICs, especialista'}
            description={'Somos un equipo de especialistas en educación y tecnologías digitales'}
            url={ data.url }
            img={ data.image }
        />


            <MainWrapper> 
                <div className={styles.pin_block}>
                    <div className={styles.col_left}>
                        <header>
                            <Link className={styles.back_arrow} href="/producciones" ><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver producciones</strong></span></Link>
                            <h1 className={styles.name_and_position}>{data.title}<br /><span>{data.position}</span></h1>
                            {windowSize <= 1025 && data.image !== '' && <div className={styles.img_mobile}><img src={data.image} alt={`Imagen de ${data.title}`} /></div>}
                        </header>
                        <article className={styles.cv} dangerouslySetInnerHTML={{__html: data.body }} />
                        <div className={styles.networks_wrapper}>{data.networks.map((n, i) => (
                            <span className={styles.network} key={i}>
                             <a target="_blank" href={n.src}>{n.title}</a>
                            {i < data.networks.length -1 ? <strong>|</strong> : ""}
                            </span>
                        )) }</div>
                    </div>
                    {/* <div className={styles.col_right}>
                        {data.image !== '' && <img src={data.image} alt={`Imagen de ${data.title}`} />}
                    </div> */}
                </div>
                {
                data.productions && (<section  className={styles.producciones}>

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
                        <Link href={data.link} className={`${styles.card} clickable`}>   
                            <span>{data.lead}</span>
                            <h5>{data.title}&nbsp;<span>{data.subtitle}</span></h5>
                            { data.description && <p>{data.description}</p> }  
                            <ul className={styles.hashtags}>{ data.hashtags.map((hashtags , i) => <li key={i}>{hashtags}</li>) }</ul>                          
                        </Link>                     
                    </SwiperSlide> 
                ))} 
                </Swiper>

            </section>)
            }
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
    // const res = await fetch(`https://flacso.pent.org.ar/api/perfil-${query.perfil}.php`)
    const res = await fetch(`https://redaccion.pent.org.ar/data/person/autores/${query.perfil}`)
    //MiddleWare 404 | 505
    return handleServerRedirect(res);
  
    // Pass data to the page via props
    //return { props: data  }
  }

  export default Perfil