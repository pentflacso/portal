import { useAppContext } from '../../../context/AppContext';
import styles from "./ProductionsAdvancedFilters.module.scss";

export default function ProductionsAdvancedFilters({ changeAdvancedFilterStatus, stateCurrentHashtag }){

    const { hashtagsArticlesList, currentArticleHashtag, authorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, setQueryArticles } = useAppContext();

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

            <input onChange={(e) => setQueryArticles(e.target.value)} type="text" placeholder='buscar' className={styles.search_bar} />

            <button type="button" className={styles.menu_btn} onClick={ () => changeAdvancedFilterStatus(false) }>Cerrar filtros</button> 

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