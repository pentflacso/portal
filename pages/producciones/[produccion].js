import { useAppContext } from '../../context/AppContext';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Fragment } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer'
import Link from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ShareBtns from '../../components/library/ShareBtns/ShareBtns';
import styles from './produccion.module.scss';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';

function Index(d){

    const { windowSize, setCurrentArticleHashtag, setDataStrip } = useAppContext();
    
    let  {strip, ...data}  = d;
    

    useEffect(() => {
        setDataStrip(strip);
    }, [])

    const [ shareModal, setShareModal ] = useState(false);  
    const router = useRouter();

    const license = `<p>La producción ${ data.title } se encuentra bajo licencia Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License. Disponible en: <a href="${ data.url }" target="_blank">${ data.url }</a></p>`

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},        
        {title: 'Asesorías y soluciones a medida', path: 'asesorias'},
        {title: 'Investigación y divulgación', path: 'investigacion'}
    ]

    
    useEffect(() => {   

        if(windowSize >= 1025 ){    

            const heightPinOff = document.querySelector(`.${styles.pin_block}`).offsetHeight;

            ScrollTrigger.create({
                trigger: `#__next`,
                start: "top top", 
                end: () => `+=${heightPinOff} center`,            
                pin: `.${styles.col_left}`,
                pinSpacing: false,
                scrub: true,
                //markers: true
            });       
 
            return () => {
                ScrollTrigger.getAll().forEach(t => t.kill());  
            };         
        }      
         
    }, [windowSize]); 
  

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

    const filterByTag = (value) => {
        router.push('/producciones');

        setTimeout(function(){
            setCurrentArticleHashtag(value);  
        }, 200);                   
    };


    return(
    <>
        <MetaTags
            pageTitle={'Producciones — FLACSO | PENT'}
            shareTitle={'FLACSO | PENT'}
            keywords={'Género, Enseñanza, Derecho, Academia, Docentes, Universidad'}
            description={'Un espacio de capacitación, investigación y creación en educación y tecnologías digitales.'}
        />        


        
        <MainWrapper>

            {shareModal && <ShareBtns shareurl={`https://pent-portal-testing.vercel.app${router.asPath}`} setShareModal={setShareModal} />}

            
                <div className={styles.pin_block}> 
                    <header className={styles.col_left}>                
                        <Link className={styles.back_arrow} href="/producciones" ><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver producciones</strong></span></Link>
                        <h1>{data.title}.</h1>
                        { data.authors ?
                            <div className={styles.authors}>
                                <p>{data.types} | <span>Por —</span>&nbsp;</p>
                                {data.authors.map((a, i) => (
                                    <Fragment key={i}>
                                    <Link  href={a.link}>{a.title}<span>{i<data.authors.length -1 ? "," : ""}</span></Link>
                                    &nbsp;
                                    </Fragment>
                                ) ) } 
                            </div> : ""
                        }
                        
                        <div className={styles.btns}>
                            <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => setShareModal(true) }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>

                            { data.download || data.link ? <Link className={`${styles.btn} ${styles.download}`} href={ data.download ? data.download : data.link } target="_blank"><span><img src="/assets/icons/download_icon.svg" alt="icono de descarga"/>{ data.download ? "Descargar" : "Acceder" }</span></Link> : "" }

                        </div>                       

                    </header>
                    <article className={styles.col_right}>
                        { data.img ? <img src={ data.img } alt={ data.title } className={styles.imgTop} /> : ""}
                        { data.body && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.body }} /> }

                        { data.hashtags && 
                        <div className={styles.hashtags}>
                            <p>Ver más de:</p>
                            { data.hashtags.map((hashtags , key) => <button type="button" key={key} onClick={ () => filterByTag(`${hashtags}`)}>{hashtags}</button>) }                            
                        </div>
                        }

                        { license ?
                                <div className={styles.legal}>                         
                                    <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Cómo citar</h4>" + `<p>${ data.quote }</p>` + "<h4>Licencia</h4>"+ license }}/>                  
                                </div>
                            : "" }

                    </article>
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
    );
}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    /* const res = await fetch(`https://flacso.pent.org.ar/api/producciones/${query.produccion}.json`) */
    const res = await fetch(`https://redaccion.pent.org.ar/data/production/${query.produccion}`)
    const data = await res.json()
    // Pass data to the page via props
    return { props:  {...data }   }
}

export default Index;