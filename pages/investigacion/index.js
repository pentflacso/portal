import MetaTags from '../../components/library/MetaTags/MetaTags';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import styles from "./investigacion.module.scss";

export default function Investigacion({data}){    
    

    if(Object.keys(data).length > 0){  
        return(
            <>
                <MetaTags
                    pageTitle={'Investigación — FLACSO | PENT'}
                    shareTitle={'Investigación — FLACSO | PENT'}
                    keywords={'investigación, academia, ámbito académico, cultura digital, tecnología educativa, innovación educativa, educación en línea, conocimiento científico, líneas de investigación, contenido abierto, dispositivos de aprendizaje, jóvenes e infancias, infancias y pantallas, EdTech, plataformas y productos EdTech, plataformas educativas, entornos y procesos tecnopedagógicos, prácticas docentes, ciudadanía digital, evaluación en línea, diseño de trayecto formativo, propuestas didácticas, formación docente, gamificación, entornos gamificados, experiencia de usuario, interfaaces, metodologías ágiles, entornos tecnificados, formación en género y diversidad, experiencias en primera persona, prácticas institucionales'}
                    description={'Nos apasiona investigar y compartir conocimiento con la comunidad.'}
                />        
                <PageBuilder data={ data } stylesx={styles} explorerBtn={true} />
            </>
        )
    }


}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/66`)    
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data  }
}