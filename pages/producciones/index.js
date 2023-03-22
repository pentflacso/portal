import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import ProductionsNav from '../../components/producciones/ProductionsNav/ProductionsNav';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./producciones.module.scss";

function Producciones(d){  
    let data = Object.values(d);

    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},
        {title: 'Asesorías y soluciones a medida ', path: 'asesorias'},
        {title: 'Investigación y divulgación', path: 'investigacion'}        
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


    //Follow cursor 

    useEffect(() => {

        const ball = document.querySelector(".cursor_ver");
        gsap.set(".cursor_ver", {xPercent: -50, yPercent: -70});       
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.25;
        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");
        
        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y; 
        });
        
        gsap.ticker.add(() => {
            // adjust speed for higher refresh monitors
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });

        $('.clickable').on("mouseenter", function mouseEnterContainer() {
            gsap.to(".cursor_ver", {
                duration: 0.8,
                scale: 1,
                opacity: 1,
                ease: Elastic.easeOut.config( 1, 0.6)
            });
        });
        $('.clickable').on("mouseleave", function mouseLeaveContainer() {
            gsap.to(".cursor_ver", {
                duration: 0.8,
                scale: 0,
                opacity: 0,
                ease: Back.easeOut.config(3)
            });
        }); 

    }, []);
    
 
    return(
    <>
        <PageHeading title="<span>Producciones</span>" margin_bottom_type={1} />

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