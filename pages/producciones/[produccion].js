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
                <div className={styles.arrowBack}>
                    <Link href="/producciones">Ver producciones</Link>
                </div>
                <h1>{data.title}</h1>

                { data.authors ?
                    <div className={styles.authors}>
                        {data.authors.map((a, key) => (
                            <Link key={key} href={a.url} target="_blank">
                                <span className={styles.img}><img src={a.img} alt={a.name} /></span>
                                <span className={styles.imgName}>{a.name}</span>
                            </Link>
                         ) ) } 
                    </div> : ""
                }

                { data.hashtags ?
                    <div className={styles.hashtags}>
                        <ul>{ data.hashtags.map((hashtags , key) => <li key={key}>{hashtags}</li>) }</ul>                            
                    </div> : ""
                }

                <Link className={`${styles.btn} ${styles.btn_file}`} href="#" target="_blank">Descargar</Link>

                { data.share ?
                <Link className={styles.btn} href={data.share} target="_blank">Compartir</Link> :
                ""}

            </div>
            <div className={styles.col_right}>
            { data.img ? <img src={ data.img } alt={ data.title } className={styles.imgTop} /> : ""}



                { data.description ?           
                <div dangerouslySetInnerHTML={{__html: data.description }} /> :
                ""}

                { data.quote || data.license ?
                    <div className={styles.card}> 
                    { data.quote ? <div className={styles.quote} dangerouslySetInnerHTML={{__html: "<h4>Cómo citar</h4>"+ data.quote }}/> : "" } 
                    
                    { data.license ? <div className={styles.license} dangerouslySetInnerHTML={{__html: "<h4>Licencia</h4>"+ data.license }}/> : "" }
                    
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