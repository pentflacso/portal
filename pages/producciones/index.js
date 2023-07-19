import { useAppContext } from '../../context/AppContext';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import { useRef, useEffect } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import ProductionsNav from '../../components/producciones/ProductionsNav/ProductionsNav';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer';
import { gsap, Circ } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import $ from "jquery";
import styles from "./producciones.module.scss";


function Producciones(d){  

    let  {strip, ...data}  = d;
    data =  Object.values(data);

    const content = useRef();   
    const pageHeading = useRef();
    const productionsNav = useRef();
    
    const exploringBtnsData = [
        {title: 'Propuestas de formación', path: 'formacion'},
        {title: 'Asesorías y soluciones a medida ', path: 'asesorias'},
        {title: 'Investigación y divulgación', path: 'investigacion'}        
    ]
    
    //Traemos lo que necesitamos de AppContext
    
    const { dataArticles, setDataArticles, currentArticleHashtag, currentArticleAuthor, searchInArticles, windowSize, advancedFilterStatus, setDataStrip } = useAppContext();    
    
    useEffect(() => {
        setDataStrip(strip);
   }, [])

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


    useEffect(() => {

        let ctx;

        if(windowSize >= 1025){    

            //Follow cursor 
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

            
            //Pin Production Nav

            ctx = gsap.context(() => {                
                ScrollTrigger.create({
                   trigger: pageHeading.current,
                   start: "top top", 
                   end: '+=5000%',             
                   pin: productionsNav.current,
                   pinSpacing: false,
                   scrub: true,
                   //markers: true
               });         
            }, content);          

            /* setTimeout(function(){
                ScrollTrigger.create({
                    trigger: `.${styles.marquee}`,
                    start: "top center", 
                    end: "top center",
                    onEnter: () => gsap.to(`.${styles.productions_nav}`, {opacity: "0", display:"none", duration: 0.2}),
                    onEnterBack: () => gsap.to(`.${styles.productions_nav}`, {opacity: "1", display:"block", duration: 0.2}),
                    //markers: true
                });  
            }, 100); */      
        } else{
            ctx = gsap.context(() => {                
                ScrollTrigger.create({
                   trigger: pageHeading.current,
                   start: "50% top", 
                   end: '+=5000%',             
                   pin: productionsNav.current,
                   pinSpacing: false,
                   scrub: true,
                   //markers: true
               });         
            }, content);
        }  

        return () => {
            ctx.revert();
        }

    }, [windowSize]); 


    useEffect(() => {
        if(windowSize <= 1025 && window !== null){     

            function scrollToNav(e) {
                const btnId = e.target.dataset.id;            
                if(btnId !== undefined && btnId.includes('triggerScrollTo')){                
                    gsap.to(window, {
                        scrollTo:{y: pageHeading.current, offsetY: - pageHeading.current.offsetHeight},
                        duration: 0.5,
                        ease: Circ.easeOut
                    });                    
                } 
            } 
    
            $(".filters").on('click', scrollToNav); 

            return () => {
                $(".filters").off();
            };  
        }      
    }, [advancedFilterStatus]);


    return(
    <>
        <MetaTags
            pageTitle={'Producciones — FLACSO | PENT'}
            shareTitle={'Producciones — FLACSO | PENT'}
            keywords={'publicaciones, producciones, papers, artículos, trabajos académicos, ponencias, conferencias, divulgación académica, abstract, material didáctico, material didáctico hipermedial, actualización profesional, aplicaciones digitales, aprendizaje en línea, ciudadanía digital, comunidades de práctica, consumos culturales, didáctica, dispositivos tecnopedagógicos, educación en línea, entornos digitales, formación docente, inclusión, infancias, jóvenes, materiales didácticos, metodología de investigación, microlearning, neurociencias, políticas tecno-educativas, programación, redes sociales, subjetividades, tendencias educativas, tutoría y moderación'}
            description={'Publicaciones del equipo del PENT.'}
        />

        <MainWrapper>    
            <div ref={content}>    
                <div ref={pageHeading}>
                    <PageHeading title="<span>Producciones</span>" margin_bottom_type={1} />        
                </div> 

                <section id="productions-nav">    
                    <div className={`${styles.productions_nav}`} ref={productionsNav}>
                        <ProductionsNav/>   
                    </div>       
                    {dataArticles !== undefined && <ArticlesList data={searchInArticles(dataArticles)}/>}     
                </section> 

                <section> 
                    <div className={styles.marquee}>
                        <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
                    </div>
                    <ExploringBtns data={exploringBtnsData} />
                </section>

                <Footer />
            </div>   
        </MainWrapper>  
                        
        {windowSize >= 1025 &&
            <div className="cursor_ver">
                <div className="circle"><span>Ver</span></div>
            </div>
        }
    </>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    //const res = await fetch(`https://flacso.pent.org.ar/api/produciones.json`)
    const res = await fetch(`https://redaccion.pent.org.ar/data/productions`);
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data}   }
  }

  export default Producciones;