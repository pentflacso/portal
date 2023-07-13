import { useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import MetaTags from '../../components/library/MetaTags/MetaTags';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import styles from "./asesorias.module.scss";

export default function Asesorias({data}){
    const { windowSize } = useAppContext();  
  
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
            
            $(`.${styles.card_proyect}`).on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_ver", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            
            $(`.${styles.card_proyect}`).on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_ver", {
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
            <PageHeading title={data.PageHeading} margin_bottom_type={0} />

            <section>
                <LeafsItem items={data.courses} />  
            </section>

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee1} />
                </div>
                <div className={styles.highlight_paragraph}>
                    <HighlightParagraph title={data.paragraph1} />
                </div>        
                <div className={styles.keys_box}>
                    <KeysBox data={data.keyFeatures} />
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
                    grabCursor={false}    
                    className={`${styles.carrousel_proyects} swiper-cards`}       
                >   
                {data.articles.map((item, i) => (
                    <SwiperSlide key={i}>
                        <article className={styles.card_proyect}>
                            <img src={item.img} />
                            <h5>{item.description}</h5>                    
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
                    <HighlightParagraph title={data.paragraph2} />
                </div>
                <div className={styles.brands_marquee}>
                    <BrandsMarquee partners={data.partners}/>
                </div>   
                <Quotes items={data.quotes}/>  
            </section>

            <section>
                <div className={styles.marquee_2}>
                    <TextMarquee data={data.marquee4} />
                </div>
                <ParagraphAndButton 
                    paragraph={data.paragraph3}
                    iconBtn='/assets/images/mail_icon.svg'
                    urlBtn='https://www.google.com/'
                />
            </section>

            <Footer />
        </MainWrapper> 
    </> 
    )
*/
    if(Object.keys(data).length > 0){  
        return(
            <>
                <MetaTags
                    pageTitle={'Asesorías — FLACSO | PENT'}
                    shareTitle={'Asesorías — FLACSO | PENT'}
                    keywords={'publicaciones, producciones, papers, artículos, trabajos académicos, ponencias, conferencias, divulgación académica, abstract, material didáctico, material didáctico hipermedial, actualización profesional, aplicaciones digitales, aprendizaje en línea, ciudadanía digital, comunidades de práctica, consumos culturales, didáctica, dispositivos tecnopedagógicos, educación en línea, entornos digitales, formación docente, inclusión, infancias, jóvenes, materiales didácticos, metodología de investigación, microlearning, neurociencias, políticas tecno-educativas, programación, redes sociales, subjetividades, tendencias educativas, tutoría y moderación'}
                    description={'Publicaciones del equipo del PENT.'}
                />
                <PageBuilder data={ data } stylesx={styles} />
                {windowSize >= 1025 &&
                    <>
                        <div className="cursor_dot">
                            <div className="circle" />
                        </div>
                        <div className="cursor_ver">
                            <div className="circle"><span>Ver</span></div>
                        </div>
                    </>
                }                
            </>
        )
    }

}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/49`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data  }
}