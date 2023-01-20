import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import ProductionsNav from '../../components/producciones/ProductionsNav/ProductionsNav';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import styles from "./producciones.module.scss";

function Producciones(d){  
    let data = Object.values(d);

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},
        {title: 'Asesorías y soluciones a medida ', path: 'asesorias'},
        {title: 'Investigación y divulgación', path: 'investigacion'}        
    ]

    //Incorporar Subtitulo
    // data = data.map((d, key)=>{
    //     const author = d.authors.map((a, key, array) => {    
    //         if(key > 0) {  
    //             if(key !== array.length -1) { 
    //                 return ", " + a 
    //             }else{ 
    //                 return " y " + a
    //             }
    //         }else{
    //             return a
    //         };
    //     })
        
    //     const subtitle = "Por - " + author.join("")

    //     return { ...d, subtitle: subtitle}
    // })

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
        
        {dataArticles !== undefined && <ArticlesList data={searchInArticles(dataArticles)} />}        

        <div className={styles.marquee}>
            <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
        </div>


        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/produciones.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data}   }
  }

  export default Producciones;