import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import Link from 'next/link';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
//import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import ArticlesNov from '../../components/library/ArticlesNov/ArticlesNov';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./novedades.module.scss";

function Index(d){

    const data = Object.values(d);

    //Router
    const router = useRouter();
    const {category} = router.query;

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]

    const filtro = ["prensa", "empleos", "evento"];
    

    //Follow cursor 

    useEffect(() => {

        // Follow custom cursor
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
    }, []);


    return(
    <>
        <PageHeading title="<h1><span>Novedades</span></h1>" margin_bottom_type={1} />

        <div className={styles.filters_cont}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}  
                freeMode={true}
                grabCursor={true}
                className={`${styles.category} swiper-btns`}
                >             
                    <SwiperSlide> 
                        <Link href="/novedades/" className={styles.btn_filter}>Todos</Link>
                    </SwiperSlide>
                        {filtro && filtro.map((c, key) => {
                            return (
                                <SwiperSlide key={key}> 
                                    <Link href={"/novedades/"+ c} className={category == c ? `${styles.btn_filter} ${styles.active}` : styles.btn_filter }>{c}</Link>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>          
            </div>

        <ArticlesNov data={data} category={category} />

        <div className={styles.marquee}>
            <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
        </div>

        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/novedades${query.category}.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data }   }
}

  export default Index;