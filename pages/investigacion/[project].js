import { useAppContext } from '../../context/AppContext';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer'
import Link from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ShareBtns from '../../components/library/ShareBtns/ShareBtns';
import styles from './project.module.scss';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


function Index(d){

    const { windowSize, setDataStrip } = useAppContext();    
    const [ shareModal, setShareModal ] = useState(false);  
    const [ elementHeight, setElementHeight ] = useState(0);  
    const router = useRouter();
    const element = useRef(null);
    let  {strip, ...data}  = d;

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: '/formacion'},        
        {title: 'Asesorías y soluciones a medida', path: '/asesorias'},
        {title: 'Investigación y divulgación', path: '/investigacion'}
    ]    
    
    useEffect(() => {
        setDataStrip(strip);
    }, [])


    useEffect(() => {
        if(windowSize >= 1025 ){
            if (!element.current) return;
            const resizeObserver = new ResizeObserver(() => {
            setElementHeight(element.current.offsetHeight);
            });
            resizeObserver.observe(element.current);            
            return () => resizeObserver.disconnect();
        }
      }, [elementHeight, windowSize]);

    
      useEffect(() => {   

        if(windowSize >= 1025 ){    

            ScrollTrigger.create({
                trigger: `#__next`,
                start: "top top", 
                end: () => `+=${elementHeight} center`,            
                pin: `.${styles.col_left}`,
                pinSpacing: false,
                scrub: true,
            });     
            
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());  
            };         
        }     
         
    }, [elementHeight]);  
  

    const mobileShare = () => {
        if (navigator.share) {
          navigator
            .share({
              url: `https://pent.flacso.org.ar${router.asPath}`,
            })
            .then(() => {
              console.log("Successfully shared");
            })
            .catch((error) => {
              console.error("Something went wrong", error);
            });
        }
    };


    return(
    <>
        <MetaTags
            pageTitle={ data.title + ' — FLACSO | PENT'}
            shareTitle={ data.title }
            keywords={ data.keywords }
            description={ data.teaser }
            url={ data.url }
            img={ data.image }
        />       
        
        <MainWrapper>
            {shareModal && <ShareBtns shareurl={`https://pent.flacso.org.ar${router.asPath}`} setShareModal={setShareModal} />}
            
            <div className={styles.pin_block} ref={element}> 
                <header className={styles.col_left}>                
                    <Link className={styles.back_arrow} href="/investigacion"><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver investigaciones</strong></span></Link>
                    <h1>{data.title}</h1>                        
                    <div className={styles.btns}>
                        {windowSize >= 1025 ?
                            <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => setShareModal(true) }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                            :
                            <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => mobileShare() }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                        }
                    </div>                      
                </header>
                <article className={styles.col_right}>
                    { data.img ? <img src={ data.img } alt={ data.title } className={styles.imgTop} /> : ""}
                    { data.body && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.body }} /> } 
                </article>
            </div>
            {data.acordion && data.acordion.length > 0 && (
                <section className={styles.news_acordion}>         
                    <h2>Resultados</h2>
                    <div className={styles.accordion}>
                        <ThemesAccordion data={data.acordion} />
                    </div>       
                </section>
            )}        
            {data.articles && data.articles.length > 0 && (<section className={styles.news_related}>
                <h2>Notas relacionadas</h2>
                <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}  
                freeMode={false}   
                grabCursor={windowSize >= 1025 ? true : false} 
                className={`${styles.carrousel_novedades} swiper-cards`}
                >
                {data.articles.map((data, i)=>(
                    <SwiperSlide key={i}>                                        
                        <Link href={data.url} className={`${styles.card} clickable`}>   
                            <h5>{data.title}</h5>
                            <p className={styles.info}>{data.category ? `${data.category} —&nbsp;` : ''}<span>{data.date}</span></p>
                            { data.description && <p>{data.description}</p> }                          
                        </Link>                     
                    </SwiperSlide> 
                ))} 
                </Swiper>

            </section>
            )}                 

            <section>
                <div className={styles.marquee}>
                    <TextMarquee data={[{value:"Seguir explorando"}]} />
                </div>
                <ExploringBtns data={exploringBtnsData} />  
            </section>

            <Footer />            
        </MainWrapper>      
    </>
    );
}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    /* const res = await fetch(`https://flacso.pent.org.ar/api/investigacion/${query.investigacion}.json`) */
    const res = await fetch(`https://redaccion.pent.org.ar/data/projects/${query.project}`)
    return handleServerRedirect(res);
    //return { props:  {...data }   }
}

export default Index;