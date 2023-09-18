import { useEffect } from 'react';

import { useAppContext } from '../../context/AppContext';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import styles from "./formacion.module.scss";

export default function Formacion({data}){
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
            $(`.swiper-wrapper`).on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            $(`.swiper-wrapper`).on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            });   
            $(`.swiper-wrapper .cta_btn`).on("mouseenter", function mouseEnterCta() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            }); 
            $(`.swiper-wrapper .cta_btn`).on("mouseleave", function mouseLeaveCta() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });     
        }           
    }, [windowSize]);
    
    
    /*
    return(
        <>

        <MainWrapper> 
            <PageHeading title={data.PageHeading} margin_bottom_type={0} />

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee1} />
                </div>    
                <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={windowSize >= 1025 ? false : true}  
                freeMode={false}   
                grabCursor={true}    
                className={`${styles.carrousel_formacion} swiper-cards`}       
                >   
                    {data.courses.map((item, i) => (
                        <SwiperSlide key={i}>
                            <article className={styles.card}>
                                <img src={item.img} alt="foto posgrado" />
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                <a href={item.url} rel="noopener noreferrer" target="_blank" className="cta_btn">{item.cta}</a>
                            </article>            
                        </SwiperSlide>
                    ))}                            
                </Swiper>   
            </section>

            <section>
                <div className={styles.marquee_2}>
                    <TextMarquee data={data.marquee2} />
                </div>       
                <Quotes items={data.quotes}/>   
            </section>  

            <Footer />
        </MainWrapper>  
          
        {windowSize >= 1025 &&
            <div className="cursor_deslizar">
                <div className="circle"><span>Deslizar</span></div>
            </div>
        }     
    </>   
    )
*/
    if(Object.keys(data).length > 0){  
        return(
            <>
                <PageBuilder data={ data } stylesx={styles} />
                {windowSize >= 1025 &&
                    <div className="cursor_deslizar">
                        <div className="circle"><span>Deslizar</span></div>
                    </div>
                }                 
            </>
        )
    }    
}

export async function getServerSideProps() {
    // Fetch data from external API
    //const res = await fetch(`https://flacso.pent.org.ar/api/formacion.php`)
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/48`)
    return handleServerRedirect(res);
    //return { props: data  }

}