import React, { useEffect, useState } from 'react';
import styles from "./ArticlesList.module.scss";


export default function ProductionArticlesList(){

    // La idea es recibir la data vía props y mostrarla utilizando el método .MAP - Dependiendo de que el index de cada elemento sea par o impar, lo mandaremos en la columna izquierda o derecha.

    const [Articles, setArticles] = useState([]);
    const [Type, setType] = useState([]);
    const [Authors, setAuthors] = useState([]);
    const [Hashtags, setHashtags] = useState([]);
    

    const getArticles = async () => {
        const res = await fetch('/data.json');
        const data = await res.json();
      
        setArticles(data.articles);
        setType(data.type);
        setAuthors(data.authors);
        setHashtags(data.hashtags);
    };


    useEffect(() => {
      getArticles();
    }, []);


    return(
        <>

            {/* La estructura HTML y estilos debería quedar así:
            
            <div className={styles.wrapper}>

            <div className={styles.cards}>

                <div className={styles.col_left}></div>
                <div className={styles.col_right}></div>

            </div>

            <button type="button" className={styles.verMas_btn}>Ver más</button> 

            </div> */}

            <h3>ArticlesList</h3>
            {Articles.map((articles, key) => (
                <div key={key}>
                     <strong>{ Type[articles.type] }</strong>
                        
                        <h3>{articles.title} Por -   <span> { articles.authors.map(( a ) => Authors[a]) } </span></h3>

                        <p>{ articles.description }</p>
                        <br></br>

                        <div>

                        { articles.hashtags.map(( h, key) => (
                            <a key={key}> {Hashtags[h]} &nbsp;</a>
                        )) }                            
                        </div>
                        <br></br>
                    </div>
            ))}
        </>          
    );
}