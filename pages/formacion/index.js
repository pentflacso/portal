import PageHeading from '../../components/library/PageHeading/PageHeading';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Quotes from '../../components/library/Quotes/Quotes';
import styles from "./formacion.module.scss";
import Card from '../../components/library/Card/Card';

export default function Formacion(data){
    console.log(data)
    return(
    <>
        <PageHeading title={data.PageHeading} margin_bottom_type={0} />

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee1} />
        </div>

        <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={0}
            slidesPerView={2.5}
            navigation={false}
            freeMode={true}   
            grabCursor={true} 
            
        >   
        {
        data.courses.map((item, key) => (
          <SwiperSlide key={key}><Card { ...item}  /></SwiperSlide>
          ))
        }
                         
        </Swiper>

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee2} />
        </div>

        <div className={styles.quotes_container}>
        
        
          <Quotes items={data.quotes}/>
          
        
        </div>    
    </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/formacion.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }