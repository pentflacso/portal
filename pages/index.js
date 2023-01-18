import HomeHeading from '../components/home/HomeHeading/HomeHeading';
import CoverVideo from '../components/home/CoverVideo/CoverVideo';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
import SectionSelector from '../components/home/SectionSelector/SectionSelector';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import NewsSelector from '../components/home/NewsSelector/NewsSelector';
import Card from '../components/library/Card/Card';
import styles from "./index.module.scss";

function Home(d){
    const data = Object.values(d);

    const NewsData = [
        {title: 'Un sincrónico para pensar lo sincrónico', description: 'Many desktop publishing packages and web', path_id: 'formacion'},
        {title: 'Una travesía con senderos, fronteras y horizontes para capacitarse', description: 'Many desktop publishing packages and web', path_id: 'formacion'},
        {title: 'Aprendizaje por indagación para potenciar un rol activo', description: 'Many desktop publishing packages and web', path_id: 'formacion'},
        {title: 'Enseñar, aprender y trabajar en línea', description: 'Many desktop publishing packages and web', path_id: 'formacion'}
    ]

    return(
    <>
        <HomeHeading title="Somos un espacio de <span>capacitación</span><br /> en educación y tecnologías digitales" />

        <CoverVideo />

        <div className={styles.marquee_1}>
            <TextMarquee data="EXPLORAR&nbsp;-&nbsp;INVESTIGAR&nbsp;-&nbsp;APRENDER&nbsp;-&nbsp;DESCUBRIR&nbsp;-&nbsp;"/>
        </div>

        <SectionSelector />

        <div className={styles.marquee_1}>
            <TextMarquee data="NOVEDADES&nbsp;-&nbsp;NOVEDADES&nbsp;-&nbsp;"/>
        </div>

        <div className={`${styles.carrousel_novedades} swiper-cards`}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={2.5}
                navigation   
                freeMode={true}   
                grabCursor={true} 
            >

                {data.map((d, key)=>(
                    <SwiperSlide key={key}>
                        <Card {...d} />
                    </SwiperSlide> 
                ))}  

            </Swiper>
        </div>

        <NewsSelector data={NewsData} />
    </>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/home.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data}   }
  }

  export default Home;