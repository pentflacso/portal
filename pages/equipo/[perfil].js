import PageHeading from '../../components/library/PageHeading/PageHeading';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./perfil.module.scss";
import ArticlesCard from '../../components/library/ArticlesCard/ArticlesCard';
import SectionTitle from '../../components/library/SectionTitle/SectionTitle';


function Perfil(data){
/* console.log(data) */
    // Armar un array de objeto con la data que utilizaremos en el componente Swiper y el contenedor con el listado del Equipo. - El nombre deberá ser teamData. 
    
    // Ejemplo: const teamData = [ {name: 'Fabio Tarasow', areas: ['direccionGeneral', 'docenciaEID'} ]
   

    return(
    <>

        <PageHeading title={data.name} margin_bottom_type={0} />

        <div className={styles.twoColumns}>
        <div><h2>{data.description}</h2>
        <p>{data.cv}</p>
        </div>
        <img src={data.picture}/>
        </div>

        <SectionTitle title="Producciones" />

        <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={50}
            slidesPerView={2}
            navigation   
            freeMode={true}   
            grabCursor={true} 
        >   
        {
        data.productions.map((item, key) => (
          <SwiperSlide key={key}><ArticlesCard className={styles.card} section="producciones" { ...item}  /></SwiperSlide>
          ))
        }
                           
        </Swiper> 

    </>
    )
}

export async function getServerSideProps({query}) {
    // Fetch data from external API 
    console.log(query.perfil);
    const res = await fetch(`https://flacso.pent.org.ar/api/perfil-${query.perfil}.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }

  export default Perfil