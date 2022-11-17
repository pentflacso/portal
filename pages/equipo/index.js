import PageHeading from '../../components/library/PageHeading/PageHeading';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./equipo.module.scss";

export default function Equipo(){
    return(
    <>
        <PageHeading title="<h1>Somos un <span>equipo de especialistas</span><br /> en educación y tecnologías digitales</h1>" margin_bottom_type={0} />

        <TwoColumsText />

        <div className={styles.marquee_1}>
            <TextMarquee data="CONOCENOS&nbsp;—&nbsp;CONOCENOS&nbsp;—&nbsp;" />
        </div>

        <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={0}
            slidesPerView={"auto"}
            navigation   
            freeMode={true}   
            grabCursor={true} 
        >     
            <SwiperSlide>1</SwiperSlide>    
            <SwiperSlide>2</SwiperSlide> 
            <SwiperSlide>3</SwiperSlide> 
            <SwiperSlide>4</SwiperSlide>               
        </Swiper> 
        <h3>Equipo listado HTML</h3>
    </>
    )
}