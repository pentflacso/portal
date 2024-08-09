import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CvSelector.module.scss";

export default function CvSelector({persons}){    

    const { windowSize } = useAppContext();

    const [dataSelector, setDataSeletor] = useState(persons);


    


    const [ personSelected, setpersonSelected ] = useState(persons[0].nid);

   

    return(

        <div className={styles.container}>

            {windowSize >= 1025 ?
            <>            
                <div className={styles.cta_title}>               
                    <div className={styles.wrapper}>
                        {persons.map((data, item) => {
                            return (
                                <button onClick={ () => setpersonSelected(`${data.nid}`)} className={personSelected === `${data.nid}` ? `${styles.active}` : `${styles.inactive}`} key={item}><span />{data.nombre}</button>
                            );
                        })}
                    </div>
                </div>                        

                <div className={styles.imagen_docente}>
                    {dataSelector.map((data, item) => {
                        return (
                            <img src={data.img.url} alt={data.img.alt} className={personSelected === data.nid ? `${styles.visible} ${styles.slide_docente}` : ''} key={item} />              
                        );
                    })}
                    <span />
                </div>

                <div className={styles.texto_docente}>
                    {dataSelector.map((data, item) => {
                        return (
                        <div key={item}>
                            { personSelected === `${data.nid}` &&
                            <> 
                                <p dangerouslySetInnerHTML={{__html: data.bio }} />          
                                <a href={data.alias} rel="noopener noreferrer" target="_blank" className={styles.cv_view}>Ver CV</a>                             
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
                dataSelector.map((data, i) => (
                <SwiperSlide key={i}>
                    <article className={styles.slide_mobile}>
                        <div className={styles.wrapper}>
                            <div className={`${styles.img_docente}`}>
                                <img src={data.img.url} alt={data.img.alt} />
                                <span />
                            </div>                            
                            <h4>{data.nombre}</h4>
                            <p dangerouslySetInnerHTML={{__html: data.bio }} />
                            <a href={data.alias} rel="noopener noreferrer" target="_blank" className={styles.cv_view}>Ver CV</a>
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