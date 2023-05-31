import { useAppContext } from '../../../context/AppContext';
import { useEffect } from 'react';
import MetaTags from '../../../components/library/MetaTags/MetaTags';
import CustomScrollbar from '../../../customScrollbar/CustomScrollbar';
import TextMarquee from '../../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../../components/library/Footer/Footer';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import styles from './title.module.scss';

function Index(data){

    const { windowSize, goToPage } = useAppContext();

    const DescriptionexploringBtn = [
        {title: 'VII Jornadas de Educación a Distancia y Universidad', path: 'formacion'},
        {title: 'Metaverso: ¿un nuevo territorio para enseñar y aprender en línea?', path: 'producciones'},
        {title: 'Tecnologías digitales en el capitalismo de plataformas', path: 'asesorias'}
    ]

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},
        {title: 'Asesorías y soluciones a medida', path: 'asesorias'},
        {title: 'Nuestras producciones', path: 'producciones'}        
    ]

    useEffect(() => {   

        if(windowSize >= 1025 ){    

            const heightPinOff = document.querySelector(`.${styles.pin_block}`).offsetHeight;

            ScrollTrigger.create({
                trigger: `.main-container`,
                start: "top top", 
                end: () => `+=${heightPinOff} center`,            
                pin: `.${styles.col_right}`,
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
            pageTitle={'Novedades — FLACSO | PENT'}
            shareTitle={'FLACSO | PENT'}
            keywords={'Género, Enseñanza, Derecho, Academia, Docentes, Universidad'}
            description={'Un espacio de capacitación, investigación y creación en educación y tecnologías digitales.'}
        />
    
        {windowSize >= 1025 ?
        <CustomScrollbar>   
            <div className={styles.pin_block}>  
                <div className={styles.col_left}>

                    <header>
                        <Link className={styles.back_arrow} href="/novedades" onClick={ () => goToPage() }><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver novedades</strong></span></Link>

                        <h1>{data.title}</h1>
                            
                        <p className={styles.info}>
                            {data.category} {data.date ? <>— <span>{data.date}</span></> : ''}
                        </p>
                    </header>

                    <article>
                        { data.description ?           
                            <div dangerouslySetInnerHTML={{__html: data.description }} /> :
                        ""}

                        <Link className={styles.share_btn} href="#" target="_blank">Compartir</Link>

                        { data.license ?
                            <div className={styles.legal}>                         
                                <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.license }}/>                  
                            </div>
                        : "" }
                    </article>

                </div>
                <section className={styles.col_right}>
                    <h2>Ultimas novedades</h2>
                    <ExploringBtns data={DescriptionexploringBtn} dataStyle="btnMedium" /> 
                </section>
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
                <div className={styles.col_left}>

                    <header>
                        <Link className={styles.back_arrow} href="/novedades" onClick={ () => goToPage() }><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver novedades</strong></span></Link>

                        <h1>{data.title}</h1>
                        
                        <p className={styles.info}>
                            {data.category} {data.date ? <>— <span>{data.date}</span></> : ''}
                        </p>
                    </header>

                    <article>
                        { data.description ?           
                        <div dangerouslySetInnerHTML={{__html: data.description }} /> :
                        ""}

                        <Link className={styles.share_btn} href="#" target="_blank">Compartir</Link>

                        { data.license ?
                            <div className={styles.legal}>                         
                                <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.license }}/>                  
                            </div>
                        : "" }
                    </article>

                </div>
                <section  className={styles.col_right}>
                    <h2>Ultimas novedades</h2>
                    <ExploringBtns data={DescriptionexploringBtn} dataStyle="btnMedium" /> 
                </section>
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
    )
}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/novedades/${query.category}-${query.title}.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data }   }
}

  export default Index;