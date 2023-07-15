import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SectionSelector.module.scss";

export default function SectionSelector({data}){    

    const { windowSize } = useAppContext();

    const [dataSelector, setDataSeletor] = useState(data);


    //Crea las variables que se consume de la API. 
    useEffect(() => {
        const newDataSelector = data.map((item, index) => {
            const hyphenated = item.picture.alt.replace(/\s+/g, '-');
  
            // Obtener la primera palabra
            const firstWord = hyphenated.split('-')[0].toLowerCase();
            
            // Obtener las iniciales de las palabras restantes en minúscula y sin acentos
            const initials = hyphenated.split('-').slice(1).map(word => word.charAt(0).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')).join('');
            
            // Concatenar la primera palabra y las iniciales
            const id = `${firstWord}-${initials}`;
            const title = item.cta_title[0].value;
            const picture = item.picture.url;
            const name = item.picture.alt;
            const description = item.description[0].value;
            const link = item.linked_path[0].src;

            return { id, link, title, description, name , picture  , key: index };
        });
        
    
        setDataSeletor(newDataSelector);
    }, [data]);



    const [ titleSelected, setTitleSelected ] = useState('fabio-t');
    const router = useRouter();

    const changeTitleStatus = (title) => {
        setTitleSelected(title);
    };

    return(

        <div className={styles.container}>

            {windowSize >= 1025 ?
            <>            
                <div className={styles.cta_title}>               
                    <div className={styles.wrapper}>
                        {dataSelector.map((data, item) => {
                            return (
                                <button onClick={ () => changeTitleStatus(`${data.id}`)} className={titleSelected === `${data.id}` ? `${styles.active}` : `${styles.inactive}`} key={item}><span />{data.title}</button>
                            );
                        })}
                    </div>
                </div>                        

                <div className={styles.imagen_docente}>
                    {dataSelector.map((data, item) => {
                        return (
                            <img src={data.picture} alt={data.picture} className={titleSelected === data.id ? `${styles.visible} ${styles.slide_docente}` : ''} key={item} />              
                        );
                    })}
                    <span />
                </div>

                <div className={styles.texto_docente}>
                    {dataSelector.map((data, item) => {
                        return (
                        <div key={item}>
                            { titleSelected === `${data.id}` &&
                            <> 
                                <p dangerouslySetInnerHTML={{__html: data.description }} />
                                <button type="button">Conocer más</button>                                         
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
                                <img src={data.picture} alt={data.picture}/>
                                <span />
                            </div>                            
                            <h4>{data.title}</h4>
                            <p dangerouslySetInnerHTML={{__html: data.description }} />
                            <button type="button">Conocer más</button> 
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