import styles from "./Quotes.module.scss";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

export default function Quotes({items}){
    //console.log(items);
    return(
    <>
        <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}    
            grabCursor={true}
            className={`${styles.quotes_container} swiper-cards quotes`}
        > 
        {
            items.map((item, key) => (            
                <SwiperSlide key={key}>
                    <div className={styles.card}>
                        <div className={styles.wrapper}>
                            <div className={styles.img_cont}>
                                <img src={item.img} alt={item.name[0].value} />
                            </div>
                            <div className={styles.text_cont}>
                                <h4>{item.description[0].value}</h4>
                                <p><strong>{item.name[0].value}</strong><br /><span dangerouslySetInnerHTML={{__html: `${item.subtitle[0].value}` }} /></p> 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
            }
            <div className={styles.line} />     
        </Swiper>         
    </>
    );
}