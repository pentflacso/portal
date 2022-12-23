import { useEffect, useState } from 'react';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import ProductionsNav from '../../components/producciones/ProductionsNav/ProductionsNav';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import styles from "./producciones.module.scss";

export default function Producciones(){  
    
    const data = [
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Christian Milillo", "Silvina Casablancas", "Ariel Fumagalli" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        },
        {
            category: "Ponencia",
            title: "Artículo hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Silvina Casablancas" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        }, 
        {
            category: "Conferencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Martín Gauto" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        }, 
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Fabio Tarasow", "Silvina Casablancas", "Ariel Fumagalli" ],
            hashtags: [ "#EntornosDigitales", "#Palabra" ]
        },
        {
            category: "Ponencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Ariel Fumagalli" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        }, 
        {
            category: "Conferencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Monica Trech" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        },  
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Christian Milillo", "Silvina Casablancas", "Ariel Fumagalli" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        },
        {
            category: "Ponencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Silvina Casablancas" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        }, 
        {
            category: "Conferencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Gustavo Cerati" ],
            hashtags: [ "#Docencia" ]
        }, 
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Paul McCartney" ],
            hashtags: [ "#EntornosDigitales", "#Docencia", "#EducaciónEnLínea" ]
        },
        {
            category: "Ponencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "John Lennon" ],
            hashtags: [ "#Diseño" ]
        }, 
        {
            category: "Conferencia",
            title: "Anseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "George Harrison" ],
            hashtags: [ "#Demo" ]
        },  
    ]

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Investigación', path: 'investigacion'},
        {title: 'Asesorías', path: 'asesorias'}
    ]


    const [hashtagsList, setHashtagsList] = useState([]);
    const [currentHashtag, setCurrentHashtag] = useState('all');
    const [authorsList, setAuthorsList] = useState([]);
    const [currentAuthor, setCurrentAuthor] = useState('all');
    const [query, setQuery] = useState('');


    const queryKeys = ["category", "title", "description"]

    const search = (data) => {   
              
        if(currentHashtag !== 'all'){            
           return data.filter((article) => article.hashtags.includes(currentHashtag))
        }  else if(currentAuthor !== 'all'){
            return data.filter((article) => article.authors.includes(currentAuthor))
        } 

        return data.filter(
            (item) => 
                queryKeys.some(key => item[key].toLowerCase().includes(query.toLowerCase()))           
        );         
    };

    
    const stateQuery = (query) => {
        setQuery(query)
        setCurrentHashtag('all')    
        setCurrentAuthor('all')    
    }

    const stateCurrentHashtag = (hashtag) => {

        setCurrentAuthor('all')

        if(hashtag === 'all'){
            setCurrentHashtag('all')
        } else if (hashtag === currentHashtag) {
            setCurrentHashtag('all')
        } else if (hashtag !== currentHashtag){
            setCurrentHashtag(hashtag)
        }       
    }

    const statecurrentAuthor = (author) => {

        setCurrentHashtag('all')

        if (author === 'all'){
            setCurrentAuthor('all')
        } else if (author === currentAuthor) {
            setCurrentAuthor('all')
        } else if (author !== currentAuthor){
            setCurrentAuthor(author)   
        }  
    }


    function isInHashtagsList( hashtag ) {  
        const findToName = hashtagsList.find(value => value.name === hashtag);
        return hashtag === undefined ? undefined : findToName === undefined;   
    }

    function isInAuthorsList( author ) {  
        const findToName = authorsList.find(value => value.name === author);
        return author === undefined ? undefined : findToName === undefined;   
    }

    function addHashtag( hashtag ) {
        isInHashtagsList(hashtag) && setHashtagsList( [...hashtagsList, {name: hashtag }] )   
    }
    
    function addAuthor( author ) {
        isInAuthorsList(author) && setAuthorsList( [...authorsList, {name: author }] )   
    }


    useEffect(() => {

        if(data !== undefined){
            data.map((articles) => {
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
        
    }, [hashtagsList, authorsList]);  
      
 
    return(
    <>
        <PageHeading title="<h1><span>Producciones</span></h1>" margin_bottom_type={1} />
        <ProductionsNav />
       
        <input onChange={(e) => stateQuery(e.target.value)} type="text" placeholder='buscar' />

        <div className={styles.filter_hashtags_demo}>

            <button onClick={ () => stateCurrentHashtag('all') } className={currentHashtag === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button>

            {hashtagsList && hashtagsList.map((hashtag) => {   
                    return ( 
                    <button key={hashtag.name} onClick={ () => stateCurrentHashtag(hashtag.name) } className={currentHashtag === hashtag.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{hashtag.name}</button>
                    );
                })
            }
        </div>

        <div className={styles.filter_Authors_demo}>

            <button onClick={ () => statecurrentAuthor('all') } className={currentAuthor === 'all'  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>Ver todo</button>

            {authorsList && authorsList.map((author) => {   
                    return ( 
                    <button key={author.name} onClick={ () => statecurrentAuthor(author.name) } className={currentAuthor === author.name  ? `${styles.btn_filter} ${styles.active}` : `${styles.btn_filter}`}>{author.name}</button>
                    );
                })
            }
        </div>
        
        <ArticlesList data={search(data)} dataLimit={search(data).slice(0,3)} />
        

        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}