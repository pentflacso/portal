import { useAppContext } from '../../context/AppContext';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { Fragment } from 'react';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import MetaProducts from '../../components/library/MetaProducts/MetaProducts';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer'
import Link from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ShareBtns from '../../components/library/ShareBtns/ShareBtns';
import DownloadModal from '../../components/library/DownloadModal/DownloadModal';
import styles from './produccion.module.scss';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';

function Index({dataProduct , prevUrl, pathName}){

    const { windowSize, setCurrentArticleHashtag, setDataStrip } = useAppContext();
    const [ modal, setModal ] = useState('hidden');  
    const [ elementHeight, setElementHeight ] = useState(0);  
    const router = useRouter();  
    const element = useRef(null);
    let {strip, ...data} = dataProduct;
    
    const [ stringPrevUrl , setStringPrevUrl ]= useState("Ver producciones");  


    const license = `<p>La producción ${ data.title } se encuentra bajo licencia Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License. Disponible en: <a href="${ data.link ? data.link : data.url }" target="_blank">${ data.link ? data.link : data.url }</a></p>`  


    const metaLicense = `La producción ${ data.title } se encuentra bajo licencia Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License. Disponible en: ${ data.link ? data.link : data.url }`;

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: '/formacion'},        
        {title: 'Asesorías y soluciones a medida', path: '/asesorias'},
        {title: 'Investigación y divulgación', path: '/investigacion'}
    ] 

    useEffect(() => {
        setDataStrip(strip);

        setStringPrevUrl(
            prevUrl == "/producciones" ? 
                "Ver producciones" : 
                `Volver a ${pathName[0]}` 
        );

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

    const filterByTag = (value) => {
        router.push('/producciones');

        setTimeout(function(){
            setCurrentArticleHashtag(value);  
        }, 200);                   
    };

    return(
    <>
        <MetaTags      
            pageTitle={ data.title + ' — FLACSO | PENT'}
            shareTitle={ data.title }
            keywords={ data.keywords }
            description={ data.teaser }
            url={ data.url }
            img= 'https://pent.flacso.org.ar/assets/images/producciones_thumb_shared.jpg' 
            />        
        <MetaProducts 
            title={data.title}        
            description={data.teaser}        
            keywords={ data.keywords }
            author={ data.authors ? data.authors.map((a, i) => ( a.title ) )  : "" }
            publisher={"FLACSO PENT"}
            year={ data.year &&  data.year}
            resourceLink={ data.link &&  data.link}
            license={ metaLicense &&  metaLicense}
            category={ data.types &&  data.types}
            oaiIdentifier=""        
        />

        
        <MainWrapper>

            {modal === 'share' && <ShareBtns shareurl={`https://pent.flacso.org.ar${router.asPath}`} setModal={setModal} />}
            {modal === 'download' && <DownloadModal archive={data.download} setModal={setModal} />}   

            <div className={styles.overflow_wrapper}>
                
                <div className={styles.pin_block}> 
                    <header className={styles.col_left} ref={element}>                
                        <Link className={styles.back_arrow} href={prevUrl} ><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>{stringPrevUrl}</strong></span></Link>
                        <h1>{data.title}</h1>
                        { data.authors ?
                            <div className={styles.authors}>
                                <p>{data.types} | {data.year} | <span>Por —</span>&nbsp;</p>
                                {data.authors.map((a, i) => (
                                    <Fragment key={i}>
                                    <Link  href={a.link}>{a.title}<span>{i<data.authors.length -1 ? "," : ""}</span></Link>
                                    &nbsp;
                                    </Fragment>
                                ) ) } 
                            </div> : ""
                        }
                        <div className={styles.btns}>
                            { data.download || data.link ? <Link className={data.download ? `${styles.btn} ${styles.download}` : `${styles.btn} ${styles.link}`} href={ data.download ? data.download : data.link } target="_blank"><span id="produccionBtnLinkAndDownloadCTA" ><img src={data.download ? `/assets/icons/download_icon.svg` : `/assets/icons/access_icon.svg` } alt="icono de descarga"/>{ data.download ? "Descargar" : "Acceder" }</span></Link> : "" } 

                            {windowSize >= 1025 ?
                                <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => setModal('share') }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                            :
                                <button type="button" className={`${styles.btn} ${styles.share}`} onClick={ () => mobileShare() }><span><img src="/assets/icons/share_icon.svg" alt="icono de compartir"/>Compartir</span></button>
                            }    

                            {/* { data.download && <button type="button" className={`${styles.btn} ${styles.download}`} onClick={ () => setModal('download') }><span><img src={`/assets/icons/download_icon.svg`} alt="icono de descarga"/>Descargar</span></button>}

                            { data.link && <Link className={`${styles.btn} ${styles.link}`} href={ data.link } target="_blank"><span><img src={`/assets/icons/access_icon.svg`} alt="icono de accesoi"/>Acceder</span></Link> }   */}                                                     

                        </div>                       

                    </header>
                    <article className={styles.col_right}>
                        { data.body && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.body }} /> }

                        { data.hashtags && 
                        <div className={styles.hashtags}>
                            <p>Ver más de:</p>
                            { data.hashtags.map((hashtags , key) => <button type="button" key={key} onClick={ () => filterByTag(`${hashtags}`)}>{hashtags}</button>) }                            
                        </div>
                        }

                        { license ?
                                <div className={styles.legal}>                         
                                    <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Cómo citar</h4>" + `<p>${ data.quote }</p>`}}/> 
                                    <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>" + `<p>${license}</p>`}}/>               
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

            </div>  
            
        </MainWrapper>
        

    </>
    );
}

export async function getServerSideProps(context) {
    const {query} = context;
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/production/${query.produccion}`)
    const referrer = context.req.headers.referer;
    
    let pathnameParts = "";
    let prevUrl = "";

    if(referrer){
        //Pagina Interna
        const referrerURL = new URL(referrer);
        pathnameParts = referrerURL.pathname.split('/').filter(part => part);
        
        prevUrl = pathnameParts[1] && pathnameParts[1] == query.produccion ? "/producciones" : referrer;

    }else{
        //Pagina Externa
        prevUrl = "/producciones"
    }

    //
    //MiddleWare 404 | 505
    const data = await handleServerRedirect(res);

    return { props:{ dataProduct:{...data.props}, prevUrl: prevUrl, pathName: pathnameParts } };
}

export default Index;