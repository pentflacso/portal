import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import reactDom from "react-dom";
import ProductionsAdvancedFilters from "../ProductionsAdvancedFilters/ProductionsAdvancedFilters";
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductionsNav.module.scss";


export default function ProductionsNav({dataHashtags}){
    const { dataArticles, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList, articlesFiltersCounter, advancedFilterStatus, setAdvancedFilterStatus } = useAppContext();
    
    const [advancedFilterOutAnimation, setAdvancedFilterOutAnimation] = useState(false);
    const [has, setHas] = useState([]);

    //Muestra u oculta los filtros avanzados 
    function changeAdvancedFilterStatus(value) {
        if(value === true){
            setAdvancedFilterStatus(true);
            setAdvancedFilterOutAnimation(false);
        } else{
            setAdvancedFilterOutAnimation(true);
            setTimeout(() => {
                setAdvancedFilterStatus(false);
            }, 600); 
        }       
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
    function isInAuthorsList( author ) {  
        const findToName = authorsArticlesList.find(value => value.name === author);
        return author === undefined ? undefined : findToName === undefined;   
    }


    //Estas funciones reciben por parámetro el nombre de los autores y hashtags
    //Se ejecuta una función que chequea si ya se encuentran en el listado que almacena los autores y hashtags, y en caso de ser negativo, envían el nombre al estado que contiene el listado correspondiente
    function addAuthor( author ) {
        isInAuthorsList(author) && setAuthorsArticlesList( [...authorsArticlesList, {name: author }] )   
    }

    //Mapea los artículos y envía el nombre de los autores y hashtags a las funciones addHashtag o addAuthor, según corresponda

    useEffect(() => {
        if(dataHashtags){        
            setHas(dataHashtags.map(tag => ({ name: tag })));
            setHashtagsArticlesList( [...has] )
        }

        if(dataArticles !== undefined){
            dataArticles.map((articles) => {
                articles.authors.map((author) => {
                    return (
                        addAuthor(author) 
                    );     
                })        
            })
        }        
    }, [dataHashtags, dataArticles, authorsArticlesList]); 


    return(
        <>
            {
                advancedFilterStatus === true && reactDom.createPortal(<ProductionsAdvancedFilters changeAdvancedFilterStatus={changeAdvancedFilterStatus} stateCurrentHashtag={stateCurrentHashtag} advancedFilterOutAnimation={advancedFilterOutAnimation} />, document.getElementById("modal-root"))
            }
   
            <div className={`${styles.wrapper} filters`}>     
                <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}  
                freeMode={false}
                grabCursor={true}
                className={`${styles.hashtags} swiper-btns`}
                >
                    <SwiperSlide>  
                        <button type="button" data-id="triggerScrollTo" onClick={ () => stateCurrentHashtag('all') } className={currentArticleHashtag === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button> 
                    </SwiperSlide>  

                    {has && has.map((hashtag) => {
                        return (  
                            <SwiperSlide key={hashtag.name}>
                                <button type="button" data-id="triggerScrollTo" onClick={ () => stateCurrentHashtag(hashtag.name) } className={currentArticleHashtag === hashtag.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{hashtag.name}</button>  
                            </SwiperSlide>
                        );
                    })}
                        
                </Swiper>

                <button type="button" className={styles.menu_btn} onClick={ () => changeAdvancedFilterStatus(true) }><span>Filtros</span><img src="/assets/icons/filter_icon.svg" alt="icono de filtro" className={styles.filter_icon}/>{articlesFiltersCounter > 0 && <span className={styles.counter}>{articlesFiltersCounter}</span>}</button>
            
            </div>                     
        </>       

    );
}