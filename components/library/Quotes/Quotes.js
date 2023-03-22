//import { data } from "jquery";
import styles from "./Quotes.module.scss";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
//import {SwiperNavigator, SwiperNavigatorClasses} from '../SwiperNavigator/SwiperNavigator';

export default function Quotes({items}){
    return(
    <>
        <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}    
            grabCursor={true}
            className={`${styles.quotes_container} swiper-cards quotes`}
            /* modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={SwiperNavigatorClasses}    
            grabCursor={true} */ 
        > 
        {
            items.map((item, key) => (            
                <SwiperSlide key={key}>
                    <div className={styles.card}>
                        <div className={styles.wrapper}>
                            <div className={styles.img_cont}>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className={styles.text_cont}>
                                <h4>{item.description}</h4>
                                <p><strong>{item.name}</strong><br />{item.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
            }
            {/* <SwiperNavigator/> */}    
            <div className={styles.line} />     
        </Swiper>         
    </>
    );
}