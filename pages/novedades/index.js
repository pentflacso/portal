import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import Link from 'next/link';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import ArticlesNov from '../../components/library/ArticlesNov/ArticlesNov';
import Footer from '../../components/library/Footer/Footer';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from 'gsap';
import styles from "./novedades.module.scss";


function Novedades(data){

    const { windowSize, setDataStrip } = useAppContext();  

    useEffect(() => {
        setDataStrip(data.strip);
    }, [])
    
    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    
    const filtro = data.categories;


    //Follow cursor 

    useEffect(() => {

        if(windowSize >= 1025 ){    

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
        }        

    }, [windowSize]);


    return(
    <>  
        <MetaTags
            pageTitle={'Novedades — FLACSO | PENT'}
            shareTitle={'Novedades — FLACSO | PENT'}
            keywords={'novedades, noticias, entrevistas, prensa, conversatorios, conferencias, testimonios, empleo, búsqueda laboral, eventos, charlas, institucional, lanzamientos'}
            description={'Enterate de las novedades más recientes del PENT FLACSO.'}
        />
           
        <MainWrapper> 

            <div className={styles.page_heading}>   
                <PageHeading title="<span>Novedades</span>" />
            </div>

            <section>
                <div className={styles.filters_cont}>
                    <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    navigation={true}  
                    freeMode={false}
                    grabCursor={true}
                    className={`${styles.category} swiper-btns`}    
                    >       
                        <SwiperSlide> 
                            <Link href="/novedades/" className={`${styles.btn_filter} ${styles.active}`}>Todos</Link>
                        </SwiperSlide>

                        {filtro && filtro.map((category, i) => {
                            return (  
                                <SwiperSlide key={i}>
                                    <Link href={"/novedades/"+ category} className={styles.btn_filter}>{category}</Link>  
                                </SwiperSlide> 
                            );
                        })}
                    </Swiper>          
                </div>            
                <ArticlesNov data={data.news} totalData={data.totalData} />
            </section>

            <section>
                <div className={styles.marquee}>
                    <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
                </div>
                <ExploringBtns data={exploringBtnsData} />
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


export async function getServerSideProps() {
    // Fetch data from external API
    //const res = await fetch(`https://flacso.pent.org.ar/api/novedades-12-0.json`)   
    const res = await fetch(`https://redaccion.pent.org.ar/data/news`)   
   const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data }   }
}

export default Novedades;