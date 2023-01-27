import PageHeading from '../../components/library/PageHeading/PageHeading';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import styles from "./investigacion.module.scss";
import Card from '../../components/library/Card/Card';
import {SwiperNavigator, SwiperNavigatorClasses} from '../../components/library/SwiperNavigator/SwiperNavigator';


export default function Investigacion(data){

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]

    return(
    <>
        <PageHeading title={data.PageHeading} margin_bottom_type={0} />

        <KeysBox data={data.keyFeatures} />

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee1} />
        </div>

        <ThemesAccordion data={data.accordion} />
        
        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee2} />
        </div>


        <div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2.5}
                navigation={SwiperNavigatorClasses}   
                grabCursor={true} 
            >     
                {
                data.articles.map((item, key) => (
                <SwiperSlide key={key}><Card { ...item} /></SwiperSlide>
                
                ))
                }<SwiperNavigator/>
                                         
            </Swiper> 
        </div>

        <div className={styles.marquee_1}>
            <TextMarquee data={data.marquee3} />
        </div>

        <div className={styles.highlight_paragraph}>
            <HighlightParagraph title={data.paragraph1} />
        </div>
        
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/investigacion.php`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data.data  }
  }