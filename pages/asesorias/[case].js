import { useAppContext } from '../../context/AppContext';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from "next/router";
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
    const [ shareModal, setShareModal ] = useState(false);  
    const [ elementHeight, setElementHeight ] = useState(0);  
    const router = useRouter();
    const element = useRef(null); 
    let  {strip, ...data}  = d;
    
    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},        
        {title: 'Asesorías y soluciones a medida', path: 'asesorias'},
        {title: 'Investigación y divulgación', path: 'investigacion'}
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
            pageTitle={'Asesorias — FLACSO | PENT'}
            shareTitle={'FLACSO | PENT'}
            keywords={'Género, Enseñanza, Derecho, Academia, Docentes, Universidad'}
            description={'Un espacio de capacitación, investigación y creación en educación y tecnologías digitales.'}
        />       
        
        <MainWrapper>

            {shareModal && <ShareBtns shareurl={`https://pent-portal-testing.vercel.app${router.asPath}`} setShareModal={setShareModal} />}
            
            <div className={styles.pin_block} ref={element}> 
                <header className={styles.col_left}>                
                    <Link className={styles.back_arrow} href="/asesorias"><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver asesorías</strong></span></Link>
                    <h1 className={styles.content} dangerouslySetInnerHTML={{__html: data.title}} />
                        
                    <div className={styles.btns}>
                        {windowSize >= 1025 ?
                            <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => setShareModal(true) }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                        :
                            <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => mobileShare() }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                        }
                    </div>                       

                </header>
                <article className={styles.col_right}>             
                    { data.body && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.body }} /> }                    
                </article>
            </div>

            <section>
                <div className={styles.marquee}>
                    <TextMarquee data={[{value:"SEGUIR EXPLORANDO&nbsp;—&nbsp;"}]} />
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
    const data = await res.json()
    // Pass data to the page via props
    return { props:  {...data }   }
}

export default Index;