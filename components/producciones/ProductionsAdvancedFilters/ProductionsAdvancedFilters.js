import { useAppContext } from '../../../context/AppContext';
import { useEffect } from 'react';
import styles from "./ProductionsAdvancedFilters.module.scss";

export default function ProductionsAdvancedFilters(){

    const { dataArticles, hashtagsArticlesList, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, setQueryArticles } = useAppContext();


    const stateCurrentHashtag = (hashtag) => {
        if(hashtag === 'all'){
            setCurrentArticleHashtag('all')
        } else if (hashtag === currentArticleHashtag) {
            setCurrentArticleHashtag('all')
        } else if (hashtag !== currentArticleHashtag){
            setCurrentArticleHashtag(hashtag)
        }       
    }

    const statecurrentAuthor = (author) => {
        if (author === 'all'){
            setCurrentArticleAuthor('all')
        } else if (author === currentArticleAuthor) {
            setCurrentArticleAuthor('all')
        } else if (author !== currentArticleAuthor){
            setCurrentArticleAuthor(author)   
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
        <div className={styles.wrapper}>

            <input onChange={(e) => setQueryArticles(e.target.value)} type="text" placeholder='buscar' />

            <div className={styles.hashtags}>

                <button onClick={ () => stateCurrentHashtag('all') } className={currentArticleHashtag === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button>

                {hashtagsArticlesList && hashtagsArticlesList.map((hashtag) => {   
                        return ( 
                        <button key={hashtag.name} onClick={ () => stateCurrentHashtag(hashtag.name) } className={currentArticleHashtag === hashtag.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{hashtag.name}</button>
                        );
                    })
                }
            </div>

            <div className={styles.authors}>

                <button onClick={ () => statecurrentAuthor('all') } className={currentArticleAuthor === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button>

                {authorsArticlesList && authorsArticlesList.map((author) => {   
                        return ( 
                        <button key={author.name} onClick={ () => statecurrentAuthor(author.name) } className={currentArticleAuthor === author.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{author.name}</button>
                        );
                    })
                }
            </div>

        </div>
    );
}