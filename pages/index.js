import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import MetaTags from '../components/library/MetaTags/MetaTags';
import PageBuilder from '../components/PageBuilder/PageBuilder';
import styles from "./index.module.scss";

function Home({data}){
    
    const { windowSize } = useAppContext();   

    useEffect(() => {
        
        if(windowSize >= 1025){    
            
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
        }
        
    }, [windowSize]);
    
   /* 
    return(
    <>
        <MainWrapper>           
     
            <HomeHeading title={d.PageHeading} />

            <CoverVideo />

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={d.marquee1}/>
                </div>
                <SectionSelector data={d.MemberData} />
            </section>

            <section>
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
                                <img src={d.img} alt="Imagen novedad destacada" />                    
                            </a>
                        </SwiperSlide> 
                    ))} 
                </Swiper>  
                <NewsSelector data={d.NewsData} />  
                </section>

            <Footer />
        </MainWrapper> 
    </>  
    );
*/
    if(Object.keys(data).length > 0){  
        return(
            <>
                <MetaTags
                    pageTitle={'FLACSO | PENT — Un espacio de capacitación, investigación, creación e innovación en educación y tecnologías digitales.'}
                    shareTitle={'FLACSO | PENT — Un espacio de capacitación, investigación, creación e innovación en educación y tecnologías digitales.'}
                    keywords={'flacso, pent, posgrado, educación, tecnologías, tics, educación en línea, fabio tarasow, christian milillo, monica trech, gisela schwartzman, tecnologías digitales, tecnologías de la información y la comunicación, cursos, talleres, diplomaturas, flacso, facultad latinoamericana de ciencias sociales, tecnología educativa, innovación educativa, EdTech, contacto, newsletter, redes sociales'}
                    description={'Somos un espacio de capacitación, investigación, creación e innovación en educación y tecnologías digitales.'}
                />    
                <PageBuilder data={ data } stylesx={styles} />
                
                {windowSize >= 1025 &&
                    <div className="cursor_leer">
                        <div className="circle"><span>Leer</span></div>
                    </div> 
                }    
            </>
        
        )
    }
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/75`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: data  }
}

export default Home;