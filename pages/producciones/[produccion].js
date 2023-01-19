import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import styles from './producciones.module.scss';
import Link from 'next/link';


function Index(){
    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]    
    return(
    <>

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