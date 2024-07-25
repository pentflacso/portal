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
import styles from './case.module.scss';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';


function Index(d){
    const { windowSize, setDataStrip } = useAppContext();    
    const [ modal, setModal ] = useState('hidden');  
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

            {modal === 'share' && <ShareBtns shareurl={`https://pent.flacso.org.ar${router.asPath}`} setModal={setModal} />}
            
            <div className={styles.pin_block} ref={element}> 
                <header className={styles.col_left}>                
                    <Link className={styles.back_arrow} href="/asesorias"><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver asesorías</strong></span></Link>
                    <h1 className={styles.content} >{ data.title } <span>— { data.teaser } </span></h1>
                        
                    { data.type_product ?<p className={styles.type_of_product}>{data.type_product}</p> : ""}

                    <div className={styles.btns}>
                        {windowSize >= 1025 ?
                            <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => setModal('share') }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                        :
                            <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => mobileShare() }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                        }

                        { data.link ? <Link className={`${styles.btn} ${styles.link}`} href={ data.link } target="_blank"><span><img src="/assets/icons/access_icon.svg" alt="acceder"/>Acceder</span></Link> : "" }

                    </div>                       

                </header>
                <article className={styles.col_right}>             
                    { data.body && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.body }} /> }                    
                </article>
            </div>

            <section>
                <div className={styles.marquee}>
                    <TextMarquee data={[{value:"SEGUIR EXPLORANDO"}]} />
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
    /* const res = await fetch(`https://flacso.pent.org.ar/api/asesorias/${query.case}.json`) */
    const res = await fetch(`https://redaccion.pent.org.ar/data/cases/${query.case}`)
    return handleServerRedirect(res);
    //return { props:  {...data }   }


}

export default Index;