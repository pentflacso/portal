import PageBuilder from '../../components/PageBuilder/PageBuilder';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import styles from "./investigacion.module.scss";

export default function Investigacion({data}){    
    

    if(Object.keys(data).length > 0){  
        return(
            <>        
                <PageBuilder data={ data } stylesx={styles} explorerBtn={true} />
            </>
        )
    }


}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/66`)    
    const data = await res.json()
  

    return handleServerRedirect(res, data);
    // Pass data to the page via props
    //return { props: data  }
}