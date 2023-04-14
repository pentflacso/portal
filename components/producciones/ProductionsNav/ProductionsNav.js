import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import reactDom from "react-dom";
import ProductionsAdvancedFilters from "../ProductionsAdvancedFilters/ProductionsAdvancedFilters";
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductionsNav.module.scss";


export default function ProductionsNav(){

    const { dataArticles, hashtagsArticlesList, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList } = useAppContext();
    
    const [advancedFilterStatus, setAdvancedFilterStatus] = useState(false);


    //Muestra u oculta los filtros avanzados 
    function changeAdvancedFilterStatus(value) {
        advancedFilterStatus !== value && setAdvancedFilterStatus(value);
    }

    
    //Cambia el estado con el hashtags seleccionado

    const stateCurrentHashtag = (hashtag) => {
        if(hashtag === 'all'){
            setCurrentArticleHashtag('all')
        } else if (hashtag === currentArticleHashtag) {
            setCurrentArticleHashtag('all')
        } else if (hashtag !== currentArticleHashtag){
            setCurrentArticleHashtag(hashtag)
        }       
    }


    //Chequea si un determinado hashtags o autor ya se encuentra en su listado  

    function isInHashtagsList( hashtag ) {  
        const findToName = hashtagsArticlesList.find(value => value.name === hashtag);
        return hashtag === undefined ? undefined : findToName === undefined;   
    }

    function isInAuthorsList( author ) {  
        const findToName = authorsArticlesList.find(value => value.name === author);
        return author === undefined ? undefined : findToName === undefined;   
    }


    //Estas funciones reciben por parámetro el nombre de los autores y hashtags
    //Se ejecuta una función que chequea si ya se encuentran en el listado que almacena los autores y hashtags, y en caso de ser negativo, envían el nombre al estado que contiene el listado correspondiente

    function addHashtag( hashtag ) {
        isInHashtagsList(hashtag) && setHashtagsArticlesList( [...hashtagsArticlesList, {name: hashtag }] )   
    } 

    function addAuthor( author ) {
        isInAuthorsList(author) && setAuthorsArticlesList( [...authorsArticlesList, {name: author }] )   
    }


    //Mapea los artículos y envía el nombre de los autores y hashtags a las funciones addHashtag o addAuthor, según corresponda

    useEffect(() => {
        if(dataArticles !== undefined){
            dataArticles.map((articles) => {
                articles.hashtags.map((hashtag) => {
                    return (
                        addHashtag(hashtag) 
                    );     
                })  
                articles.authors.map((author) => {
                    return (
                        addAuthor(author) 
                    );     
                })        
            })
        }        
    }, [dataArticles, hashtagsArticlesList, authorsArticlesList]); 

    return(
        <>

            {
                advancedFilterStatus === true && reactDom.createPortal(<ProductionsAdvancedFilters changeAdvancedFilterStatus={changeAdvancedFilterStatus} stateCurrentHashtag={stateCurrentHashtag} />, document.getElementById("modal-root"))
            }
   
            <div className={styles.wrapper}>     
                <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}  
                freeMode={true}
                grabCursor={true}
                className={`${styles.hashtags} swiper-btns`}
                >
                    <SwiperSlide>  
                        <button onClick={ () => stateCurrentHashtag('all') } className={currentArticleHashtag === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button> 
                    </SwiperSlide>  

                    {hashtagsArticlesList && hashtagsArticlesList.map((hashtag) => {
                        return (  
                            <SwiperSlide key={hashtag.name}>
                                <button onClick={ () => stateCurrentHashtag(hashtag.name) } className={currentArticleHashtag === hashtag.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{hashtag.name}</button>  
                            </SwiperSlide>
                        );
                    })}
                        
                </Swiper>

                <button type="button" className={styles.menu_btn} onClick={ () => changeAdvancedFilterStatus(true) }><span>Filtros</span><img src="/assets/icons/filter_icon.svg" alt="icono de filtro" className={styles.filter_icon}/></button>
            
            </div>                     
        </>       

    );
}