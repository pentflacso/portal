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

    return(
    <>
        <HomeHeading title={d.PageHeading} />

        <CoverVideo />

        <div className={styles.marquee_1}>
            <TextMarquee data={d.marquee1}/>
        </div>

        <SectionSelector data={d.MemberData} />

        <div className={styles.marquee_1}>
            <TextMarquee data={d.marquee2} />
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

                {d.courses.map((d, key)=>(
                    <SwiperSlide key={key}>
                        <Card {...d} />
                    </SwiperSlide> 
                ))}  

            </Swiper>
        </div>

        <NewsSelector data={d.NewsData} />
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