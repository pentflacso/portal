import { data } from "jquery";
import styles from "./Quotes.module.scss";
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

export default function Quotes({items}){
    return(
    <>
        <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={50}
            slidesPerView={1}
            navigation   
            freeMode={true}   
            grabCursor={true} 
        > 
        {
        items.map((item, key) => (
            
          <SwiperSlide><div className={styles.data_wrapper}>

          <div className={styles.img_cont}>
              <img src={item.img} alt={item.name} />
          </div>
          
          <div className={styles.text_cont}>
              <h4>{item.description}</h4>
              <p><strong>{item.name}</strong><br />{item.subtitle}</p>
          </div>

      </div></SwiperSlide>
          ))
        }
        </Swiper>
        
    </>
    );
}