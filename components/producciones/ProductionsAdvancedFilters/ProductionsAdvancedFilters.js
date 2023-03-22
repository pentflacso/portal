import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import styles from "./ProductionsAdvancedFilters.module.scss";

export default function ProductionsAdvancedFilters({ changeAdvancedFilterStatus, stateCurrentHashtag }){

    const { hashtagsArticlesList, currentArticleHashtag, authorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, setQueryArticles } = useAppContext();

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
 

    return(
        <div className={styles.wrapper}>

            <div className={styles.search_container}>
                <div className={styles.wrapper}>

                    <button type="button" className={styles.close_btn} onClick={ () => changeAdvancedFilterStatus(false) }>Cerrar</button>

                    <input onChange={(e) => setQueryArticles(e.target.value)} type="text" placeholder='Buscar por palabras clave' className={styles.search_bar} /> 

                    <div className={styles.switch_filter}>
                        <button type="button" className={showFilters === 'hashtags' ? `${styles.switch_btn} ${styles.active}` : `${styles.switch_btn}`} onClick={ () => changeShowFilters('hashtags') }>Filtrar por temática<span><img src="/assets/icons/triangle_icon.svg" alt="Icono de flecha" /></span></button>
                        <button type="button" className={showFilters === 'authors' ? `${styles.switch_btn} ${styles.active}` : `${styles.switch_btn}`} onClick={ () => changeShowFilters('authors') }>Filtrar por autor<span><img src="/assets/icons/triangle_icon.svg" alt="Icono de flecha" /></span></button>
                    </div>                    

                    <div className={styles.filter_tags}>                        
                        {
                            showFilters === 'hashtags'                            
                            ?
                            <>
                                <button onClick={ () => stateCurrentHashtag('all') } className={currentArticleHashtag === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button>

                                {hashtagsArticlesList && hashtagsArticlesList.map((hashtag) => {   
                                        return ( 
                                        <button key={hashtag.name} onClick={ () => stateCurrentHashtag(hashtag.name) } className={currentArticleHashtag === hashtag.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{hashtag.name}</button>
                                        );
                                    })
                                }
                            </>
                            :
                            <>
                                <button onClick={ () => statecurrentAuthor('all') } className={currentArticleAuthor === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button>

                                {authorsArticlesList && authorsArticlesList.map((author) => {   
                                        return ( 
                                        <button key={author.name} onClick={ () => statecurrentAuthor(author.name) } className={currentArticleAuthor === author.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{author.name}</button>
                                        );
                                    })
                                }
                            </>
                        }
                    </div>

                </div>
            </div>

            <button type="button" className={styles.overlay_close} onClick={ () => changeAdvancedFilterStatus(false) } />

        </div>
    );
}