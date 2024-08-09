import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import NavBarUsina from '../../components/usina/NavBarUsina/NavBarUsina';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import Footer from '../../components/library/Footer/Footer';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./propuesta.module.scss";

function Index({data , prevUrl, pathName}){
  //const { currentRoute, windowSize } = useAppContext();
  const container = useRef();
  const navBarBrand = useRef();
  const [ elementHeight, setElementHeight ] = useState(0);  
  const [ brandVisibility, setBrandVisibility ] = useState(true);

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


  return(
        <>      
          {/* La barra de navegación irá por fuera del PageBuilder */} 
         
           <NavBarUsina refNavBrand={navBarBrand} brandVisibility={brandVisibility} startDate={data.data[0].startDate} formURL = {data.data[0].form}/>
            
          <div ref={container}>

                   
               <PageBuilder data={ data.data } stylesx={styles} />
                
               


                
               
          </div>       
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