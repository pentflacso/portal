import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import styles from './producciones.module.scss';
import Link from 'next/link';


function Index(data){
    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]    
    return(
    <>
        <div className={styles.twoColumns}>  
            <div className={styles.col_left}>
                <Link href="/producciones">Ver producciones</Link>
                <h2>{data.title}</h2>

                <p dangerouslySetInnerHTML={{__html: data.subtitle}} />

                { data.hashtags ?
                    <div className={styles.hashtags}>
                        <ul>{ data.hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul>                            
                    </div> : ""
                }

                { data.download ?
                <Link className={`${styles.btn} ${styles.btn_download}`} href={data.download} target="_blank">Descargar</Link> :
                ""} 

                { data.share ?
                <Link className={styles.btn} href={data.share} target="_blank">Compartir</Link> :
                ""}


            </div>
            <div className={styles.col_right}>
                { data.description ?           
                <div dangerouslySetInnerHTML={{__html: data.description }} /> :
                ""}

                { data.cite || data.licence ?
                    <div className={styles.card}> 
                    { data.cite ? <div className={styles.cite} dangerouslySetInnerHTML={{__html: "<h4>Cómo citar</h4>"+ data.cite }}/> : "" } 
                    
                    { data.licence ? <div className={styles.licence} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.licence }}/> : "" }
                    
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