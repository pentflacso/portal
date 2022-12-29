import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
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
            authors: [ "Corina Rogovsky" ],
            hashtags: [ "#EntornosDigitales" ,  "#Docencia" ]
        },
        {
            category: "Ponencia",
            title: "Una tormenta no anunciada: escenarios del sacudón tecnológico en la docencia.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Silvina Casablancas" ],
            hashtags: [ "#EntornosDigitales" ,  "#Docencia" , "#EducaciónEnLínea" ]
        },
        {
            category: "Conferencia",
            title: "¡Qué la música siga sonando en casa! Experiencia argentina de diseño de materiales didácticos hipermediales para educación infantil durante la pandemia del covid-19.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Eugenia Bosch" ],
            hashtags: [ "#MaterialesDidácticos" ,  "#Infancia",  "#Docencia" ]
        },
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",            
            authors: [ "Corina Rogovsky" ],
            hashtags: [ "#EntornosDigitales" ,  "#Jóvenes" ]
        },
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",            
            authors: [ "Corina Rogovsky", "Ariel Fumagalli" ],
            hashtags: [ "#AplicacionesDigitales" ,  "#Didáctica" ]
        },
        {
            category: "Conferencia",
            title: "¡Qué la música siga sonando en casa! Experiencia argentina de diseño de materiales didácticos hipermediales para educación infantil durante la pandemia del covid-19.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",            
            authors: [ "Martín Gauto" ],
            hashtags: [ "#EntornosDigitales" ,  "#Jóvenes" ]
        },
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Corina Rogovsky" ],
            hashtags: [ "#EntornosDigitales" ,  "#Docencia" ]
        },
        {
            category: "Ponencia",
            title: "Una tormenta no anunciada: escenarios del sacudón tecnológico en la docencia.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Silvina Casablancas" ],
            hashtags: [ "#EntornosDigitales" ,  "#Docencia" , "#EducaciónEnLínea" ]
        },
        {
            category: "Conferencia",
            title: "¡Qué la música siga sonando en casa! Experiencia argentina de diseño de materiales didácticos hipermediales para educación infantil durante la pandemia del covid-19.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: [ "Valeria Odetti" ],
            hashtags: [ "#MaterialesDidácticos" ,  "#Infancia",  "#Docencia" ]
        },
        {
            category: "Material didáctico",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",            
            authors: [ "Fabio Tarasow" ],
            hashtags: [ "#EntornosDigitales" ,  "#Jóvenes" ]
        },
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",            
            authors: [ "Christian Milillo", "Ariel Fumagalli" ],
            hashtags: [ "#AplicacionesDigitales" ]
        },
        {
            category: "Conferencia",
            title: "¡Qué la música siga sonando en casa! Experiencia argentina de diseño de materiales didácticos hipermediales para educación infantil durante la pandemia del covid-19.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",            
            authors: [ "John Lennon" ],
            hashtags: [ "#EntornosDigitales" ,  "#Jóvenes" ]
        }
           
    ]

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Investigación', path: 'investigacion'},
        {title: 'Asesorías', path: 'asesorias'}
    ]


    //Traemos lo que necesitamos de AppContext

    const { dataArticles, setDataArticles, currentArticleHashtag, currentArticleAuthor, searchInArticles } = useAppContext();    


    //Mandamos la data a dataArticles dentro de AppContext

    useEffect(() => {
        dataArticles === undefined && setDataArticles(data)      
    }, []); 


    //Filtramos la data a partir del estado actual de los filtros de hashtag y autores

    useEffect(() => {         
        if(currentArticleHashtag === 'all' && currentArticleAuthor === 'all' ){
            return setDataArticles(data)
        } else if(currentArticleHashtag !== 'all' && currentArticleAuthor !== 'all'){
            const filteredByHashtag = data.filter((article) => article.hashtags.includes(currentArticleHashtag))            
            return setDataArticles(filteredByHashtag.filter((article) => article.authors.includes(currentArticleAuthor)))
        } else if(currentArticleHashtag !== 'all' && currentArticleAuthor === 'all'){            
            return setDataArticles(data.filter((article) => article.hashtags.includes(currentArticleHashtag)))           
        } else if(currentArticleHashtag === 'all' && currentArticleAuthor !== 'all'){
            return setDataArticles(data.filter((article) => article.authors.includes(currentArticleAuthor)))
        }            
    }, [currentArticleHashtag, currentArticleAuthor]);
    
 
    return(
    <>
        <PageHeading title="<h1><span>Producciones</span></h1>" margin_bottom_type={1} />

        <ProductionsNav />     
        
        {dataArticles !== undefined && <ArticlesList data={searchInArticles(dataArticles)} section="producciones" />}        

        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}