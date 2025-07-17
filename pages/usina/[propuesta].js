import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'next/router';
import NavBarUsina from '../../components/usina/NavBarUsina/NavBarUsina';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import Promotion from '../../components/usina/Promotion/Promotion';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import WhatsappBtn from '../../components/usina/WhatsappBtn/WhatsappBtn';
import styles from "./propuesta.module.scss";
import stylesVerano from "./propuestaVerano.module.scss";

function Index({ data }){
  const container = useRef();
  const navBarBrand = useRef();
  const [ elementHeight, setElementHeight ] = useState(0);  
  const [ brandVisibility, setBrandVisibility ] = useState(true);
  const [ whatsAppBtnStatus, setWhatsAppBtnStatus] = useState(0);
  const [ customStyles, setCustomStyles] = useState('default');
  const router = useRouter();


  const { windowSize, setDataStrip,announcementStatus } = useAppContext();  
  



      useEffect(() => {
          setDataStrip(data.data[0].strip);
      }, [])
      

  useEffect(() => {    
    if(router.asPath == '/usina/verano'){
      setCustomStyles('verano');
    } else{
      setCustomStyles('default');
    }
  }, [router.asPath]);


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
    let stOne = ScrollTrigger.create({
      trigger: navBarBrand.current,
      start: "top top",
      end: "top top",
      onEnter: () => setWhatsAppBtnStatus(1),
      onEnterBack: () => setWhatsAppBtnStatus(0),            
    });
    let stTwo = ScrollTrigger.create({
      trigger: "#footer",    
      start: "top bottom",
      end: "top bottom",  
      onEnter: () => setWhatsAppBtnStatus(2),
      onEnterBack: () => setWhatsAppBtnStatus(3),       
    });
    return () => {
      stOne.revert();
      stTwo.revert();
    };
  }, [elementHeight]);


  return(
    <>      
     <WhatsappBtn whatsAppBtnStatus={whatsAppBtnStatus} course = {data.data[0].titleShare} announcementOverlapping = {announcementStatus} />      
      {/* La barra de navegación irá por fuera del PageBuilder */}       
      <NavBarUsina courseStatus={data.data[0].status[0].value} refNavBrand={navBarBrand} brandVisibility={brandVisibility} startDate={data.data[0].startDate} formURL = {data.data[0].form}/>            
      <div ref={container}>
        
        <Promotion />
        
        <PageBuilder
        data={ data.data }
        stylesx={ customStyles === 'verano' ? stylesVerano : styles }
        />                        
      </div>     
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { propuesta, revisionid } = query;
  // Incluye `revisionid` en la llamada a la API si es necesario
  const res = await fetch(`https://redaccion.pent.org.ar/data/courses/${propuesta}${revisionid ? `?revisionid=${revisionid}` : ''}`);
  
  const referrer = context.req.headers.referer;
  
  let pathnameParts = "";
  let prevUrl = "";

  if (referrer) {
    // Página interna
    const referrerURL = new URL(referrer);
    pathnameParts = referrerURL.pathname.split('/').filter(part => part);
    
    prevUrl = pathnameParts[1] && pathnameParts[1] === query.produccion ? "/usina" : referrer;

  } else {
    // Página externa
    prevUrl = "/usina";
  }

  // MiddleWare 404 | 505
  const data = await handleServerRedirect(res);

  return { 
    props: { 
      data: { ...data.props }, 
      prevUrl: prevUrl, 
      pathName: pathnameParts,
      revisionid: revisionid || null // Incluye `revisionid` en los props
    } 
  };
}

export default Index;