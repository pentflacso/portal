import PageHeading from '../../components/library/PageHeading/PageHeading';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import Link from 'next/link';
import TeamData from '../../components/equipo/TeamData/TeamData';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./equipo.module.scss";



function Equipo(data){

   

    return(
    <>

        <PageHeading title={data.PageHeading} margin_bottom_type={0} />

        <TwoColumsText texto={data.TwoColumnsText}/>

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee} />
        </div>

        <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={50}
            slidesPerView={"auto"}
            navigation   
            freeMode={true}   
            grabCursor={true} 
        >   
        {
        data.members.map((item, key) => (
          <SwiperSlide key={key} className={styles.swiperTeam}><Link className={styles.link} href={item.url} ><div><img src={item.img}/></div><h3>{item.nombre}</h3></Link></SwiperSlide>
          ))
        }
                           
        </Swiper> 

        
        <div className={styles.team_container}>
        <TeamData team={data.team}/>
        </div>
    </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/equipo.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }

  export default Equipo
