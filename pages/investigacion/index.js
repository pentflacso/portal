import PageBuilder from '../../components/PageBuilder/PageBuilder';
import styles from "./investigacion.module.scss";

export default function Investigacion({data}){
  console.log(data); 
    if(Object.keys(data).length > 0){  
        return(<PageBuilder data={ data } stylesx={styles} />)
    }

}

export async function getServerSideProps() {
    // Fetch data from external API

    
    //Equipo
    //const res = await fetch(`https://redaccion.pent.org.ar/data/section/52`)    
    //Home
    //const res = await fetch(`https://redaccion.pent.org.ar/data/section/75`)    
    //Asesoria
    //const res = await fetch(`https://redaccion.pent.org.ar/data/section/49`)
    //Investigacion
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/66`)
    //Formacion
    //const res = await fetch(`https://redaccion.pent.org.ar/data/section/48`)
    //const res = await fetch(`https://flacso.pent.org.ar/api/investigacion.php`)
    
    const data = await res.json();
    // Pass data to the page via props
    return { props: data  }
    //return { props: data.data  }
  }