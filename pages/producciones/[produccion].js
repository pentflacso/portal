import { Fragment } from 'react';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import styles from './produccion.module.scss';
import Link from 'next/link';


function Index(data){

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},        
        {title: 'Asesorías y soluciones a medida', path: 'asesorias'},
        {title: 'Investigación y divulgación', path: 'investigacion'}
    ]

    return(
    <>
        <div className={styles.pin_block}>  

            <div className={styles.col_left}>
                
     
                <Link className={styles.back_arrow} href="/producciones"><span><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/><strong>Ver producciones</strong></span></Link>

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

            </div>

            <div className={styles.col_right}>

                { data.img ? <img src={ data.img } alt={ data.title } className={styles.imgTop} /> : ""}

                { data.description && <div className={styles.content} dangerouslySetInnerHTML={{__html: data.description }} /> }

                { data.quote || data.license ?
                    <div className={styles.legal}> 
                        { data.quote ? <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Cómo citar</h4>"+ data.quote }}/> : "" } 
                    
                        { data.license ? <div className={styles.box} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.license }}/> : "" }                    
                    </div>
                : "" }

            </div>

        </div>

        <div className={styles.marquee}>
            <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
        </div>

        <ExploringBtns data={exploringBtnsData} />     
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