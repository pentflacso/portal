import PageHeading from '../../components/library/PageHeading/PageHeading';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./equipo.module.scss";



function Perfil(data){
/* console.log(data) */
    // Armar un array de objeto con la data que utilizaremos en el componente Swiper y el contenedor con el listado del Equipo. - El nombre deberá ser teamData. 
    
    // Ejemplo: const teamData = [ {name: 'Fabio Tarasow', areas: ['direccionGeneral', 'docenciaEID'} ]
   

    return(
    <>

        <PageHeading title={data.name} margin_bottom_type={0} />

        <h2>{data.description}</h2>

        <p>{data.cv}</p>


        <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={50}
            slidesPerView={"auto"}
            navigation   
            freeMode={true}   
            grabCursor={true} 
        >   
        {
        data.productions.map((item, key) => (
          <SwiperSlide key={key} className={styles.swiperTeam}><a className={styles.link} href={item.url} target="_blank"><div><img src={item.img}/></div><h3>{item.nombre}</h3></a></SwiperSlide>
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