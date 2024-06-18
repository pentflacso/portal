import { useRef, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import NavBarUsina from '../../components/usina/NavBarUsina/NavBarUsina';
import HeaderPropuesta from '../../components/usina/HeaderPropuesta/HeaderPropuesta';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import CvSelector from '../../components/usina/CvSelector/CvSelector';
import JoinIn from '../../components/usina/JoinIn/JoinIn';
import InscriptionMarquee from '../../components/library/InscriptionMarquee/InscriptionMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import KeysBox from '../../components/library/KeysBox/KeysBox';
import ParagraphAndButton from '../../components/asesorias/ParagraphAndButton/ParagraphAndButton';
import Footer from '../../components/library/Footer/Footer';
//import PageBuilder from '../../components/PageBuilder/PageBuilder';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./propuesta.module.scss";

export default function Index({/* data */}){

  const { currentRoute, windowSize } = useAppContext();
  const container = useRef();
  const navBarBrand = useRef();  
  const [ inscriptionBtnStatus, setInscriptionBtnStatus ] = useState(false);

    const dataCards = [
        {
            "title": "Laboratorio de inteligencia artificial y educación",
            "description": "Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves.",
            "duration": "4 semanas",
            "modality": "Modalidad sincrónica",
            "inscription": true,
            "img": {
              "alt": "Posgrado en educaci\u00f3n y nuevas tecnolog\u00edas",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/posgrado_en_educacion_y_nuevas_tecnologias_3.webp"
            },
            "link": {
              "title": "",
              "href": "https://pent.flacso.org.ar/posgrado/educacion-nuevas-tecnologias/"
            },
            "state": null
          },
          {
            "title": "Educaci\u00f3n en l\u00ednea",
            "description": "Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves.",
            "duration": "4 semanas",
            "modality": "Modalidad sincrónica",
            "inscription": false,
            "img": {
              "alt": "Diplomatura superior en educaci\u00f3n en l\u00ednea y entornos virtuales multiplataforma",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/diplomatura_superior_en_educacion_en_linea_y_entornos_virtuales_multiplataforma_0.webp"
            },
            "link": {
              "title": "",
              "href": "https://flacso.pent.org.ar/diploma/e-learning/"
            },
            "state": null
          },
          {
            "title": "Usina de experiencias",
            "description": "Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves.",
            "duration": "4 semanas",
            "modality": "Modalidad sincrónica",
            "inscription": false,
            "img": {
              "alt": "Usina de experiencias",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/usina_de_experiencias_1.webp"
            },
            "link": { "title": "", "href": "https://flacso.pent.org.ar/usina/" },
            "state": null
        }
    ]

    const dataKeysBox = [
        {
            "img": "https://redaccion.pent.org.ar/sites/default/files/2023-06/keyFeatures1.svg",            
            "description": "Propuestas que otorgan certificación del PENT FLACSO una palabra."
        },
        {
            "img": "https://redaccion.pent.org.ar/sites/default/files/2023-06/keyFeatures1.svg",            
            "description": "Inscripción abierta a personas extranjeras y residentes en el exterior."
        },
        {
            "img": "https://redaccion.pent.org.ar/sites/default/files/2023-06/keyFeatures1.svg",            
            "description": "Capacitación con tiempos flexibles en modalidad virtual loren ipsum."
        },
        {
            "img": "https://redaccion.pent.org.ar/sites/default/files/2023-06/keyFeatures1.svg",            
            "description": "Aprendizaje con guía y acompamiento de tutores y tutoras loren ipsum."
        }
    ]

    const dataAccordion = [
        {
            "description": [
              {
                "value": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>",
                "format": "basic_html"
              }
            ],
            "title": [{ "value": "Sobre la experiencia" }]
        },
        {
            "description": [
              {
                "value": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>",
                "format": "basic_html"
              }
            ],
            "title": [{ "value": "Aprendizajes claves" }]
        },
        {
            "description": [
              {
                "value": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>",
                "format": "basic_html"
              }
            ],
            "title": [{ "value": "Modalidad de cursada" }]
        },
        {
            "description": [
              {
                "value": "<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>",
                "format": "basic_html"
              }
            ],
            "title": [{ "value": "Certificación" }]
        }
    ]

    const dataTeam = [
        {
            "description": [
              {
                "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine...",
                "format": "restricted_html"
              }
            ],
            "picture": {
              "alt": "Fabio Tarasow",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/fabio_tarasow.png"
            },
            "linked_path": [{ "title": "", "src": "https://pent-portal-testing.vercel.app/equipo/fabio-tarasow" }],
            "cta_title": [{ "value": "Fabio Tarasow" }]
        },
        {
            "description": [
              {
                "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine...",
                "format": "restricted_html"
              }
            ],
            "picture": {
              "alt": "Mónica Trech",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/monica_trech.png"
            },
            "linked_path": [{ "title": "", "src": "https://pent-portal-testing.vercel.app/equipo/fabio-tarasow" }],
            "cta_title": [{ "value": "Mónica Trech" }]
        },
        {
            "description": [
              {
                "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine...",
                "format": "restricted_html"
              }
            ],
            "picture": {
              "alt": "Gisela Schwartzman",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/gisela_schwartzman.png"
            },
            "linked_path": [{ "title": "", "src": "https://pent-portal-testing.vercel.app/equipo/fabio-tarasow" }],
            "cta_title": [{ "value": "Gisela Schwartzman" }]
        },
        {
            "description": [
              {
                "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine...",
                "format": "restricted_html"
              }
            ],
            "picture": {
              "alt": "Corina Rogovsky",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/monica_trech.png"
            },
            "linked_path": [{ "title": "", "src": "https://pent-portal-testing.vercel.app/equipo/fabio-tarasow" }],
            "cta_title": [{ "value": "Corina Rogovsky" }]
        }
    ]


  useEffect(() => {

    let ctx;

    const t = gsap.to(navBarBrand.current, {
      opacity: 0,
      duration: 0.2,
      paused: true,
    });

    ctx = gsap.context(() => {                
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top", 
        end: '+=5000%',   
        onEnter: function onEnter() {
          t.play();
          setInscriptionBtnStatus(true);
        },
        onEnterBack: function onEnterBack() {
          t.play();
          setInscriptionBtnStatus(true);
        },
        onLeave: function onLeave() {
          t.reverse();
          setInscriptionBtnStatus(false);
        },
        onLeaveBack: function onLeaveBack() {
          t.reverse();
          setInscriptionBtnStatus(false);
        }, 
        //markers: true        
      });         
    }, container);

    return () => {
      ctx.revert();
      //ScrollTrigger.getAll().forEach(t => t.kill());
    }

  }, [currentRoute, windowSize]);


  return(
        <>      
          {/* La barra de navegación irá por fuera del PageBuilder */} 
          <NavBarUsina refNavBrand={navBarBrand} startDate={"Inicio 18 de junio"} inscriptionBtnStatus={inscriptionBtnStatus} />
            
          <div ref={container}>

            {/* Estos componentes deberán construirse con el PageBuilder */}
            <MainWrapper>  

                <HeaderPropuesta />                 

                <div className={styles.keybox}>
                    <KeysBox data={dataKeysBox}/>
                </div>

                <div className={styles.marquee}>
                    <TextMarquee data={[{ value: "LA PROPUESTA" }]} />
                </div>

                <div className={styles.accordion}>
                    <ThemesAccordion data={dataAccordion} />
                </div>   

                <div className={styles.marquee}>
                    <TextMarquee data={[{ value: "EQUIPO DOCENTE" }]} />
                </div>    

                <div className={styles.team}>
                    <CvSelector data={dataTeam}/>  
                </div> 

                <div className={styles.marquee}>
                    <TextMarquee data={[{ value: "SUMATE" }]} />
                </div> 

                <JoinIn />

                <div className={styles.marquee}>
                    <TextMarquee data={[{ value: "OTRAS PROPUESTAS" }]} />
                </div>       

                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    navigation={true}  
                    freeMode={false}   
                    grabCursor={true}    
                    className={`${styles.carrousel_propuestas_usina} swiper-cards`}       
                >   
                    {dataCards.map((item, i) => (
                        <SwiperSlide key={i}>                           
                                <article className={styles.card}>
                                    {item.inscription && <InscriptionMarquee data={[{ value: "Inscripción abierta — Inscripción abierta" }]} />}
                                    <img src={item.img.url} alt={item.img.alt} />
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                    <div className={styles.duration_and_modality}>
                                      <p>{item.duration}</p>
                                      <p>{item.modality}</p>
                                    </div>                                    
                                    <a href={item.link.href} rel="noopener noreferrer" target="_blank" className="cta_btn">Más información</a>
                                </article>                   
                        </SwiperSlide>
                    ))}                            
                </Swiper>    

                <div className={styles.marquee}>
                    <TextMarquee data={[{ value: "EDICIONES ESPECIALES" }]} />
                </div>

                <ParagraphAndButton 
                    paragraph={"Si te interesa una propuesta de la Usina para tu institución o grupo cerrado, escribinos a <span>asesoriaspent@flacso.org.ar</span>."}
                    iconBtn={"https://redaccion.pent.org.ar/sites/default/files/2023-06/mail_icon.svg"}
                    urlBtn={"mailto:asesoriaspent@flacso.org.ar"}
                /> 

                <Footer />

            </MainWrapper>
               
          </div>       
        </>
  )
}

/* export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/52`) 
    
    return handleServerRedirect(res);
    //return { props: data  }
  } */