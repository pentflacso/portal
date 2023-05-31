import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import { Fragment } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import CustomScrollbar from '../../customScrollbar/CustomScrollbar';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer'
import Link from 'next/link';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from './produccion.module.scss';


function Index(data){

    const { windowSize, goToPage } = useAppContext();    

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},        
        {title: 'Asesorías y soluciones a medida', path: 'asesorias'},
        {title: 'Investigación y divulgación', path: 'investigacion'}
    ]


    useEffect(() => {   

        if(windowSize >= 1025 ){    

            const heightPinOff = document.querySelector(`.${styles.pin_block}`).offsetHeight;

            ScrollTrigger.create({
                trigger: `.main-container`,
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


    return(
    <>
        <MetaTags
            pageTitle={'Producciones — FLACSO | PENT'}
            shareTitle={'FLACSO | PENT'}
            keywords={'Género, Enseñanza, Derecho, Academia, Docentes, Universidad'}
            description={'Un espacio de capacitación, investigación y creación en educación y tecnologías digitales.'}
        />

        {windowSize >= 1025 ?
        <CustomScrollbar> 
            <div className={styles.pin_block}> 
                <header className={styles.col_left}>                
                     <Link className={styles.back_arrow} href="/producciones" onClick={ () => goToPage()}><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver producciones</strong></span></Link>
                    <h1>{data.title}</h1>
                    { data.authors ?
                        <div className={styles.authors}>
                            <p>Por —&nbsp;</p>
                            {data.authors.map((a, i) => (
                                <Fragment key={i}>
                                <Link  href={a.url} target="_blank">{a.name}<span>,</span></Link>
                                &nbsp;
                                </Fragment>
                            ) ) } 
                        </div> : ""
                    }
                    { data.hashtags && <ul className={styles.hashtags}>{ data.hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul> }
                    <Link className={`${styles.btn} ${styles.download}`} href="#" target="_blank"><span><img src="/assets/icons/download_icon.svg" alt="icono de descarga"/>Descargar</span></Link>
                    { data.share && <Link className={`${styles.btn} ${styles.share}`} href={data.share} target="_blank">Compartir</Link> }
                </header>
                <article className={styles.col_right}>
                    { data.img ? <img src={ data.img } alt={ data.title } className={styles.imgTop} /> : ""}
                    { data.description && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.description }} /> }
                    { data.quote || data.license ?
                        <div className={styles.legal}> 
                            { data.quote ? <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Cómo citar</h4>"+ data.quote }}/> : "" } 
                            
                            { data.license ? <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.license }}/> : "" }                    
                        </div>
                    : "" }
                </article>
            </div>

            <section>
                <div className={styles.marquee}>
                    <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
                </div>
                <ExploringBtns data={exploringBtnsData} />  
            </section>

            <Footer />
        </CustomScrollbar> 
        :
        <>
            <div className={styles.pin_block}> 
                <header className={styles.col_left}>                
                    <Link className={styles.back_arrow} href="/producciones" onClick={ () => goToPage()}><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver producciones</strong></span></Link>
                    <h1>{data.title}</h1>
                    { data.authors ?
                        <div className={styles.authors}>
                            <p>Por —&nbsp;</p>
                            {data.authors.map((a, i) => (
                                <Fragment key={i}>
                                <Link  href={a.url} target="_blank">{a.name}<span>,</span></Link>
                                &nbsp;
                                </Fragment>
                            ) ) } 
                        </div> : ""
                    }
                    { data.hashtags && <ul className={styles.hashtags}>{ data.hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul> }
                    <Link className={`${styles.btn} ${styles.download}`} href="#" target="_blank"><span><img src="/assets/icons/download_icon.svg" alt="icono de descarga"/>Descargar</span></Link>
                    { data.share && <Link className={`${styles.btn} ${styles.share}`} href={data.share} target="_blank">Compartir</Link> }
                </header>
                <article className={styles.col_right}>
                    { data.img ? <img src={ data.img } alt={ data.title } className={styles.imgTop} /> : ""}
                    { data.description && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.description }} /> }
                    { data.quote || data.license ?
                        <div className={styles.legal}> 
                            { data.quote ? <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Cómo citar</h4>"+ data.quote }}/> : "" } 
                        
                            { data.license ? <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.license }}/> : "" }                    
                        </div>
                    : "" }
                </article>
            </div>

            <section>
                <div className={styles.marquee}>
                    <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
                </div>
                <ExploringBtns data={exploringBtnsData} />  
            </section> 

            <Footer />
        </>
        }
    </>
    );
}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/producciones/${query.produccion}.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data }   }
}

export default Index;