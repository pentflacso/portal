
import NavBarUsina from '../../components/usina/NavBarUsina/NavBarUsina';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import Footer from '../../components/library/Footer/Footer';
import styles from "./usina.module.scss";

export default function Usina({ data }){

    

    return(
      <>      
      {/* La barra de navegación irá por fuera del PageBuilder */} 

       <NavBarUsina listCourses={data[1].courses}/>
        

               
           <PageBuilder data={ data } stylesx={styles} />
            

           

            <Footer />

            
           
    </>
    )

}

 
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/36290`) 
    
    return handleServerRedirect(res);
  }