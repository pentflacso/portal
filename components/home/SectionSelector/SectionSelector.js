import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import Link from "next/link";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SectionSelector.module.scss";

export default function SectionSelector({data}){    

    const { windowSize } = useAppContext();
    const [ titleSelected, setTitleSelected ] = useState('fabio-t');

    const changeTitleStatus = (title) => {
        setTitleSelected(title);
    };

    return(

        <div className={styles.container}>

            {windowSize >= 1025 ?
            <>            
                <div className={styles.cta_title}>                            
                    <div className={styles.wrapper}>
                        {data.map((data) => {
                            return (
                                <button onClick={ () => changeTitleStatus(`${data.id}`)} className={titleSelected === `${data.id}` ? `${styles.active}` : `${styles.inactive}`} key={data.id}><span />{data.cta_title}</button>
                            );
                        })}
                    </div>
                </div>                        

                <div className={styles.imagen_docente}>
                    {data.map((data) => {
                        return (
                            <img src={data.picture} alt={data.picture} className={titleSelected === data.id ? `${styles.visible} ${styles.slide_docente}` : ''} key={data.id} />              
                        );
                    })}
                    <span />
                </div>

                <div className={styles.texto_docente}>
                    {data.map((data) => {
                        return (
                        <div key={data.id}>
                            { titleSelected === `${data.id}` &&
                            <> 
                                <p dangerouslySetInnerHTML={{__html: data.description }} />      
                                <Link href={`${data.linked_path}`} className={styles.go_to_page}>Conocer más</Link>                                  
                            </>
                            }                                        
                        </div>
                        );
                    })}                                                      
                </div>
            </>
            :
            <>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    navigation={true}     
                    className={`${styles.carrousel_formacion} swiper-cards quotes`}       
                >   
                {
                data.map((data, i) => (
                <SwiperSlide key={i}>
                    <article className={styles.slide_mobile}>
                        <div className={styles.wrapper}>
                            <div className={`${styles.img_docente}`}>
                                <img src={data.picture} alt={data.picture}/>
                                <span />
                            </div>                            
                            <h4>{data.cta_title}</h4>
                            <p dangerouslySetInnerHTML={{__html: data.description }} />
                            <Link href={`${data.linked_path}`} className={styles.go_to_page}>Conocer más</Link> 
                        </div>                   
                    </article>            
                </SwiperSlide>
                ))
                }                            
                </Swiper>
            </>
            }

        </div>
    );
}