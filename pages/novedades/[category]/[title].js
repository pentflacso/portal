import { useAppContext } from '../../../context/AppContext';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { handleServerRedirect } from '../../../Middleware/ErrorRedirect';
import MetaTags from '../../../components/library/MetaTags/MetaTags';
import ShareBtns from '../../../components/library/ShareBtns/ShareBtns';
import TextMarquee from '../../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../../components/library/Footer/Footer';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import styles from './title.module.scss';
import MainWrapper from '../../../components/library/MainWrapper/MainWrapper';

function Index(d){

    const { windowSize, setDataStrip } = useAppContext(); 
    let  {strip, ...data}  = d;
    
    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: '/formacion'},
        {title: 'Asesorías y soluciones a medida', path: '/asesorias'},
        {title: 'Nuestras producciones', path: '/producciones'}        
    ]
    const license = `<p>El texto de la nota ${ data.title } de Proyecto Educación y Nuevas Tecnologías se encuentra bajo licencia Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License. Nota disponible en: <a href="${ data.url }" target="_blank">${ data.url }</a></p>`
    const [ elementHeight, setElementHeight ] = useState(0);
    const [ shareModal, setShareModal ] = useState(false);   
    const router = useRouter(); 
    const element = useRef(null);  


    useEffect(() => {
        setDataStrip(strip);
    }, []);    
    

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
        
        if(windowSize >= 1025){    

            ScrollTrigger.create({
                trigger: `#__next`,
                start: "top top", 
                end: () => `+=${elementHeight} center`,            
                pin: `.${styles.col_right}`,
                pinSpacing: false,
                scrub: true,
            });     
            
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());  
            };         
        } 
         
    }, [elementHeight, router]);
    

    const mobileShare = () => {
        if (navigator.share) {
          navigator
            .share({
              url: `https://pent-portal-testing.vercel.app${router.asPath}`,
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
            pageTitle={ data.title + ' — FLACSO | PENT' }
            shareTitle={ data.title }
            keywords={ data.category + ', educación, tecnología, TICS'}
            description={ data.teaser }
            img={ data.image }
            url={ data.url }

        />

        <MainWrapper>

            {shareModal && <ShareBtns shareurl={`https://pent-portal-testing.vercel.app${router.asPath}`} setShareModal={setShareModal} />}

                <div className={styles.pin_block} ref={element}>  
                    <div className={styles.col_left}>

                        <header>
                            <Link className={styles.back_arrow} href="/novedades" ><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver novedades</strong></span></Link>

                            <h1>{data.title}</h1>
                                
                            <p className={styles.info}>
                                {data.category} {data.date ? <>— <span>{data.date}</span></> : ''}
                            </p>
                        </header>

                        <article>
                            { data.body ?           
                                <div className={styles.body} dangerouslySetInnerHTML={{__html: data.body }} /> :
                            ""}

                            {windowSize >= 1025 ?
                                <button type="button" className={`${styles.btn} ${styles.share_btn}`} onClick={ () => setShareModal(true) }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                            :
                                <button type="button" className={`${styles.btn} ${styles.share_btn}`} onClick={ () => mobileShare() }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                            }

                            { license ?
                                <div className={styles.legal}>                         
                                    <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ license }}/>                  
                                </div>
                            : "" }
                        </article>

                    </div>
                    <section className={styles.col_right}>
                        <h2>Ultimas novedades</h2>
                        <ExploringBtns data={data.latest_news} dataStyle="btnMedium" /> 
                    </section>
                </div>

                <section>
                    <div className={styles.marquee}>
                        <TextMarquee data={[{value:"Seguir explorando"}]} />
                    </div>
                    <ExploringBtns data={exploringBtnsData} />      
                </section> 

                <Footer />
            
        
        </MainWrapper>
        
        
    </>  
)           

}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    /* const res = await fetch(`https://flacso.pent.org.ar/api/novedades/${query.category}-${query.title}.json`) */
    
    const res = await fetch(`https://redaccion.pent.org.ar/data/new/${query.category}/${query.title}`)
    return handleServerRedirect(res);
    // Pass data to the page via props
    //return { props:  {...data }   }
}

  export default Index;