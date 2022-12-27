import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import reactDom from "react-dom";
import ProductionsAdvancedFilters from "../ProductionsAdvancedFilters/ProductionsAdvancedFilters";
import styles from "./ProductionsNav.module.scss";


export default function ProductionsNav(){

    const { dataArticles, hashtagsArticlesList, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList } = useAppContext();
    
    const [advancedFilterStatus, setAdvancedFilterStatus] = useState(false);


    function changeAdvancedFilterStatus(value) {
        advancedFilterStatus !== value && setAdvancedFilterStatus(value);
    }


    const stateCurrentHashtag = (hashtag) => {
        if(hashtag === 'all'){
            setCurrentArticleHashtag('all')
        } else if (hashtag === currentArticleHashtag) {
            setCurrentArticleHashtag('all')
        } else if (hashtag !== currentArticleHashtag){
            setCurrentArticleHashtag(hashtag)
        }       
    }


    function isInHashtagsList( hashtag ) {  
        const findToName = hashtagsArticlesList.find(value => value.name === hashtag);
        return hashtag === undefined ? undefined : findToName === undefined;   
    }

    function isInAuthorsList( author ) {  
        const findToName = authorsArticlesList.find(value => value.name === author);
        return author === undefined ? undefined : findToName === undefined;   
    }

    function addHashtag( hashtag ) {
        isInHashtagsList(hashtag) && setHashtagsArticlesList( [...hashtagsArticlesList, {name: hashtag }] )   
    } 

    function addAuthor( author ) {
        isInAuthorsList(author) && setAuthorsArticlesList( [...authorsArticlesList, {name: author }] )   
    }


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
                advancedFilterStatus === true &&  reactDom.createPortal(<ProductionsAdvancedFilters changeAdvancedFilterStatus={changeAdvancedFilterStatus} stateCurrentHashtag={stateCurrentHashtag} />, document.getElementById("modal-root"))
            }

            <div className={styles.wrapper}>

                <div className={styles.hashtags}>
                    <button onClick={ () => stateCurrentHashtag('all') } className={currentArticleHashtag === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button>

                    {hashtagsArticlesList && hashtagsArticlesList.map((hashtag) => {   
                            return ( 
                            <button key={hashtag.name} onClick={ () => stateCurrentHashtag(hashtag.name) } className={currentArticleHashtag === hashtag.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{hashtag.name}</button>
                            );
                        })
                    }
                </div>

                <button type="button" className={styles.menu_btn} onClick={ () => changeAdvancedFilterStatus(true) }>Filtros</button>
            
            </div>                     
        </>       
    );
}