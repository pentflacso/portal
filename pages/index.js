import HomeHeading from '../components/home/HomeHeading/HomeHeading';
import CoverVideo from '../components/home/CoverVideo/CoverVideo';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
import SectionSelector from '../components/home/SectionSelector/SectionSelector';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import NovedadSelector from '../components/home/NovedadSelector/NovedadSelector';
// import styles from "./index.module.scss";

export default function Home(){
    return(
    <>
        <HomeHeading />
        <CoverVideo />

        <TextMarquee data="EXPLORAR&nbsp;-&nbsp;INVESTIGAR&nbsp;-&nbsp;APRENDER&nbsp;-&nbsp;DESCUBRIR&nbsp;-&nbsp;"/>

        <SectionSelector />
        <TextMarquee />
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
        <NovedadSelector />
    </>
    );
}