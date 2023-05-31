import { useAppContext } from '../../context/AppContext';
//import { useEffect } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import CustomScrollbar from '../../customScrollbar/CustomScrollbar';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer';
//import { gsap, Back, Elastic } from 'gsap';
//import $ from "jquery";
import styles from "./investigacion.module.scss";


export default function Investigacion(data){

    const { windowSize } = useAppContext();   

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]

    /* useEffect(() => {

        if(windowSize >= 1025 ){ 

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
            $(`.${styles.carrousel_projects}`).on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            $(`.${styles.carrousel_projects}`).on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            });   
            $(`.${styles.carrousel_projects} .cta_btn`).on("mouseenter", function mouseEnterCta() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            }); 
            $(`.${styles.carrousel_projects} .cta_btn`).on("mouseleave", function mouseLeaveCta() {
                gsap.to(".cursor_deslizar", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });   
        }             
    }, [windowSize]); */


    return(
    <>
        <MetaTags
            pageTitle={'Investigación — FLACSO | PENT'}
            shareTitle={'Investigación — FLACSO | PENT'}
            keywords={'investigación, academia, ámbito académico, cultura digital, tecnología educativa, innovación educativa, educación en línea, conocimiento científico, líneas de investigación, contenido abierto, dispositivos de aprendizaje, jóvenes e infancias, infancias y pantallas, EdTech, plataformas y productos EdTech, plataformas educativas, entornos y procesos tecnopedagógicos, prácticas docentes, ciudadanía digital, evaluación en línea, diseño de trayecto formativo, propuestas didácticas, formación docente, gamificación, entornos gamificados, experiencia de usuario, interfaaces, metodologías ágiles, entornos tecnificados, formación en género y diversidad, experiencias en primera persona, prácticas institucionales'}
            description={'Nos apasiona investigar y compartir conocimiento con la comunidad.'}
        />

        {windowSize >= 1025 ?
        <>
            <CustomScrollbar> 
                <PageHeading title={data.PageHeading} margin_bottom_type={2} />

                <section className={styles.keys_box}>
                    <KeysBox data={data.keyFeatures} />
                </section>

                <section>
                    <div className={styles.marquee_1}>
                        <TextMarquee data={data.marquee1} />
                    </div>
                    <div className={styles.themes_accordion}>
                        <ThemesAccordion data={data.accordion} />
                    </div>  
                </section>

                <section>
                    <div className={styles.marquee_1}>
                        <TextMarquee data={data.marquee2} />
                    </div> 
                    <Swiper
                        modules={[Navigation, FreeMode]}
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        navigation={true}  
                        freeMode={false}   
                        grabCursor={true}  
                        className={`${styles.carrousel_projects} swiper-cards`}         
                    >   
                    {data.articles.map((item, key) => (
                        <SwiperSlide key={key}>
                            <article className={styles.card}>
                                <span>{item.lead}</span>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                <a href={item.url} rel="noopener noreferrer" target="_blank" className="cta_btn">{item.cta}</a>
                            </article>            
                        </SwiperSlide>
                    ))}                            
                    </Swiper>  
                </section>

                <section>
                    <div className={styles.marquee_1}>
                        <TextMarquee data={data.marquee3} />
                    </div>
                    <div className={styles.highlight_paragraph}>
                        <HighlightParagraph title={data.paragraph1} />
                    </div>            
                    <ExploringBtns data={exploringBtnsData} />
                </section>

                <Footer />
            </CustomScrollbar>
            {/* <div className="cursor_deslizar">
                <div className="circle"><span>Deslizar</span></div>
            </div> */}
        </> 
        :
        <>
            <PageHeading title={data.PageHeading} margin_bottom_type={2} />

            <section className={styles.keys_box}>
                <KeysBox data={data.keyFeatures} />
            </section>

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee1} />
                </div>
                <div className={styles.themes_accordion}>
                    <ThemesAccordion data={data.accordion} />
                </div>       
            </section> 

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee2} />
                </div> 
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    navigation={true}  
                    freeMode={false}   
                    grabCursor={true}  
                    className={`${styles.carrousel_projects} swiper-cards`}         
                >   
                {data.articles.map((item, key) => (
                    <SwiperSlide key={key}>
                        <article className={styles.card}>
                            <span>{item.lead}</span>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <a href={item.url} rel="noopener noreferrer" target="_blank" className="cta_btn">{item.cta}</a>
                        </article>            
                    </SwiperSlide>
                ))}                            
                </Swiper>    
            </section>          

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee3} />
                </div>
                <div className={styles.highlight_paragraph}>
                    <HighlightParagraph title={data.paragraph1} />
                </div>            
                <ExploringBtns data={exploringBtnsData} />
            </section> 

            <Footer />
        </>
        }
    </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/investigacion.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }