import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import styles from "./ProductionsAdvancedFilters.module.scss";

export default function ProductionsAdvancedFilters({ changeAdvancedFilterStatus, stateCurrentHashtag, advancedFilterOutAnimation }){

    const { hashtagsArticlesList, currentArticleHashtag, authorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, queryArticles, setQueryArticles, countDataToUse } = useAppContext();

    const [ showFilters, setShowFilters ] = useState('hashtags');


    function changeShowFilters(value) {
        showFilters !== value && setShowFilters(value);
    } 

    //Cambia el estado con el autor seleccionado

    const statecurrentAuthor = (author) => {
        if (author === 'all'){
            setCurrentArticleAuthor('all')
        } else if (author === currentArticleAuthor) {
            setCurrentArticleAuthor('all')
        } else if (author !== currentArticleAuthor){
            setCurrentArticleAuthor(author)   
        }  
    }

    useEffect(() => {
        document.getElementById("searchBar").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.key === 'Enter') {
                changeAdvancedFilterStatus(false);
            }
        });    
    }, []); 


    return(
        <div className={advancedFilterOutAnimation === true ? `${styles.wrapper} ${styles.animation_out} filters` : `${styles.wrapper} filters`}>

            <div className={styles.search_container}>

                <button type="button" data-id="triggerScrollTo" className={styles.close_btn} onClick={ () => changeAdvancedFilterStatus(false) }>Cerrar</button>  

                <div className={styles.wrapper}>                                      

                    <div className={styles.search_cont}>
                        {queryArticles !== '' && <button type="button" data-id="triggerScrollTo" className={styles.clear_btn} onClick={ () => setQueryArticles('') }>Borrar</button>}

                        <input id="searchBar" onChange={(e) => setQueryArticles(e.target.value)} type="text" placeholder='Buscar por palabras clave' value={queryArticles} className={styles.search_bar}/>
                    </div>                    

                    <div className={styles.switch_filter}>

                        <div className={styles.switch_box}>

                            {currentArticleHashtag !== 'all' && <button type="button" data-id="triggerScrollTo" onClick={ () => stateCurrentHashtag('all') } className={styles.clear_btn}>Quitar</button>}

                            <button type="button" className={showFilters === 'hashtags' ? `${styles.switch_btn} ${styles.active}` : `${styles.switch_btn}`} onClick={ () => changeShowFilters('hashtags') }>Filtrar por temática<span><img src="/assets/icons/triangle_icon.svg" alt="Icono de flecha" /></span></button>
                        </div>

                        <div className={styles.switch_box}>

                            {currentArticleAuthor !== 'all' && <button type="button" data-id="triggerScrollTo" onClick={ () => statecurrentAuthor('all') } className={styles.clear_btn}>Quitar</button>}

                            <button type="button" className={showFilters === 'authors' ? `${styles.switch_btn} ${styles.active}` : `${styles.switch_btn}`} onClick={ () => changeShowFilters('authors') }>Filtrar por autor<span><img src="/assets/icons/triangle_icon.svg" alt="Icono de flecha" /></span></button>

                        </div>                        
                        <div className={styles.resultContent}>
                            <span className={styles.resultData} ><span className={styles.resultNone}>Se encontraron</span> <strong>{countDataToUse}</strong> resultados.</span>
                        </div>
                    </div>                    

                    <div className={styles.filter_tags}>                        
                        {
                            showFilters === 'hashtags'                            
                            ?
                            <>
                                {hashtagsArticlesList && hashtagsArticlesList
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((hashtag) => {   
                                        return (
                                            <button type="button" key={hashtag.name} data-id="triggerScrollTo" onClick={ () => stateCurrentHashtag(hashtag.name) } className={currentArticleHashtag === hashtag.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{
                                                hashtag.name
                                                .slice(1)
                                                .replace(/([a-z])([A-Z])/g, '$1 $2')
                                                .replace(/([ ])Y([A-Z])/g, '$1 Y $2')
                                                .split(' ')
                                                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                                .join(' ')
                                            }</button>
                                        );
                                    })
                                }
                            </>
                            :
                            <>
                                {authorsArticlesList && authorsArticlesList
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((author) => {   
                                        return ( 
                                            <button type="button" key={author.name} data-id="triggerScrollTo" onClick={ () => statecurrentAuthor(author.name) } className={currentArticleAuthor === author.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{author.name}</button>
                                        );
                                    })
                                }
                            </>
                        }
                    </div>

                </div>
            </div>

            <button type="button" data-id="triggerScrollTo" className={styles.overlay_close} onClick={ () => changeAdvancedFilterStatus(false) } />

        </div>
    );
}