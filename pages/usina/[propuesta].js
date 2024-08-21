import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import NavBarUsina from '../../components/usina/NavBarUsina/NavBarUsina';
// import MetaTags from '../../components/library/MetaTags/MetaTags';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
// import Footer from '../../components/library/Footer/Footer';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./propuesta.module.scss";

function Index({data , prevUrl, pathName}){
  //const { currentRoute, windowSize } = useAppContext();
  const container = useRef();
  const navBarBrand = useRef();
  const [ elementHeight, setElementHeight ] = useState(0);  
  const [ brandVisibility, setBrandVisibility ] = useState(true);
  const { windowSize } = useAppContext();

  useLayoutEffect(() => {
    if(container.current){
      const resizeObserver = new ResizeObserver(() => {
        setElementHeight(container.current.offsetHeight);
      });
      resizeObserver.observe(container.current);
      return () => resizeObserver.disconnect();
    }    
  }, []);

  useEffect(() => {   
    setBrandVisibility(true);
    let st = ScrollTrigger.create({
      trigger: navBarBrand.current,
      start: "top top",
      end: "top top",
      onEnter: () => setBrandVisibility(false),
      onEnterBack: () => setBrandVisibility(true),
    });
    return () => st.revert();      
  }, [elementHeight]);

  useEffect(() => {
        
    if(windowSize >= 1025){
        
        // Follow custom cursor
        const ball = document.querySelector(".cursor_deslizar");
        gsap.set(".cursor_deslizar", {xPercent: -50, yPercent: -70});       
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
        $(`.swiper-wrapper`).on("mouseenter", function mouseEnterContainer() {
            gsap.to(".cursor_deslizar", {
                duration: 0.8,
                scale: 1,
                opacity: 1,
                ease: Elastic.easeOut.config( 1, 0.6)
            });
        });
        $(`.swiper-wrapper`).on("mouseleave", function mouseLeaveContainer() {
            gsap.to(".cursor_deslizar", {
                duration: 0.8,
                scale: 0,
                opacity: 0,
                ease: Back.easeOut.config(3)
            });
        });   
        $(`.swiper-wrapper .cta_btn`).on("mouseenter", function mouseEnterCta() {
            gsap.to(".cursor_deslizar", {
                duration: 0.8,
                scale: 0,
                opacity: 0,
                ease: Back.easeOut.config(3)
            });
        }); 
        $(`.swiper-wrapper .cta_btn`).on("mouseleave", function mouseLeaveCta() {
            gsap.to(".cursor_deslizar", {
                duration: 0.8,
                scale: 1,
                opacity: 1,
                ease: Elastic.easeOut.config( 1, 0.6)
            });
        });     
    }           
  }, [windowSize]);


  return(
    <>      
      {/* La barra de navegación irá por fuera del PageBuilder */}       
      <NavBarUsina refNavBrand={navBarBrand} brandVisibility={brandVisibility} startDate={data.data[0].startDate} formURL = {data.data[0].form}/>
            
      <div ref={container}>
        <PageBuilder data={ data.data } stylesx={styles} />                        
      </div> 
      
      {windowSize >= 1025 &&
        <div className="cursor_deslizar">
          <div className="circle"><span>Deslizar</span></div>
        </div>
      }     
    </>
  )
}

export async function getServerSideProps(context) {
  const {query} = context;
  // Fetch data from external API
  const res = await fetch(`https://redaccion.pent.org.ar/data/courses/${query.propuesta}`)
  const referrer = context.req.headers.referer;
  
  let pathnameParts = "";
  let prevUrl = "";

  if(referrer){
      //Pagina Interna
      const referrerURL = new URL(referrer);
      pathnameParts = referrerURL.pathname.split('/').filter(part => part);
      
      prevUrl = pathnameParts[1] && pathnameParts[1] == query.produccion ? "/usina" : referrer;

  }else{
      //Pagina Externa
      prevUrl = "/usina"
  }

  //
  //MiddleWare 404 | 505
  const data = await handleServerRedirect(res);

  return { props:{ data:{...data.props}, prevUrl: prevUrl, pathName: pathnameParts } };
}

export default Index;