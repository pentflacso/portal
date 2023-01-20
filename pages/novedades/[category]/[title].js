import TextMarquee from '../../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../../components/library/ExploringBtns/ExploringBtns';
import styles from './title.module.scss';
import Link from 'next/link';

function Index(data){
    const DescriptionexploringBtn = [
        {title: 'VII Jornadas de Educación a Distancia y Universidad', path: 'formacion'},
        {title: 'Metaverso: ¿un nuevo territorio para enseñar y aprender en línea?', path: 'producciones'},
        {title: 'Tecnologías digitales en el capitalismo de plataformas', path: 'asesorias'}
    ]

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    return(
        <>  
        <div className={styles.twoColumns}>  
            <div className={styles.col_left}>
                <div className={styles.arrowBack}>
                    <Link href="/novedades">Ver novedades</Link>
                </div>
                <h1>{data.title}</h1>
                
                <p className={styles.info}>
                    <span className={styles.category}>{data.category} {data.date ? "- ": ""}</span> 
                    {data.date ? <span className={styles.date}> {data.date}</span>: ""}
                </p>

                { data.description ?           
                <div dangerouslySetInnerHTML={{__html: data.description }} /> :
                ""}

                { data.share ?
                <Link className={styles.btn_share} href={data.share} target="_blank">Compartir</Link> :
                ""}

                { data.licence ?
                    <div className={styles.licence} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.licence }}/> : 
                ""}

            </div>
            <div className={styles.col_right}>
                <h4>Ultimas novedades</h4>
                <ExploringBtns data={DescriptionexploringBtn} dataStyle="btnMedium" />       

            </div>
        </div>
        <div className={styles.marquee}>
            <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
        </div>
        <ExploringBtns data={exploringBtnsData} />        
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