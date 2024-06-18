import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import HeroHeader from '../../components/usina/HeroHeader/HeroHeader';
import NavBarUsina from '../../components/usina/NavBarUsina/NavBarUsina';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import InscriptionMarquee from '../../components/library/InscriptionMarquee/InscriptionMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import Quotes from '../../components/library/Quotes/Quotes';
import ParagraphAndButton from '../../components/asesorias/ParagraphAndButton/ParagraphAndButton';
import Footer from '../../components/library/Footer/Footer';
//import PageBuilder from '../../components/PageBuilder/PageBuilder';
import styles from "./usina.module.scss";

export default function Usina({/* data */}){

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
              "href": "/usinadev/propuesta"
            },
            "state": null
          },
          {
            "title": "Educaci\u00f3n en l\u00ednea",
            "description": "Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves.",
            "duration": "4 semanas",
            "modality": "Modalidad sincrónica",
            "img": {
              "alt": "Diplomatura superior en educaci\u00f3n en l\u00ednea y entornos virtuales multiplataforma",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/diplomatura_superior_en_educacion_en_linea_y_entornos_virtuales_multiplataforma_0.webp"
            },
            "link": {
              "title": "",
              "href": "/usinadev/propuesta"
            },
            "state": null
          },
          {
            "title": "Usina de experiencias",
            "description": "Lanzamos la diplomatura con diferentes especialistas para claves de la educación en línea, diferentes especialistas sobre cuestiones claves de la educación en línea, claves.",
            "duration": "4 semanas",
            "modality": "Modalidad sincrónica",
            "img": {
              "alt": "Usina de experiencias",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/usina_de_experiencias_1.webp"
            },
            "link": { "title": "", "href": "/usinadev/propuesta" },
            "state": null
        }
    ]

    const dataKeysBox =[
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

    const dataQuotes =[
        {
            "description": [
              {
                "value": "\u201cAprend\u00ed a analizar y evaluar c\u00f3mo se gestionan las TIC en las instituciones, a planificar y dise\u00f1ar proyectos. Destaco la variedad de contenidos, formatos y lenguajes en todo el recorrido.\u201d"
              }
            ],
            "img": {
              "alt": "Imagen de Silvina Servedio",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/silvina_servedio_img_cita_1.jpg"
            },
            "subtitle": [
              {
                "value": "Estudiante de la Diplomatura superior\u003Cbr\u003E  en educaci\u00f3n y nuevas tecnolog\u00edas"
              }
            ],
            "name": [{ "value": "Silvina Paula Servedio" }]
        },
        {
            "description": [
              {
                "value": "\u201cMe fascin\u00f3 el an\u00e1lisis de los desaf\u00edos sociotecnol\u00f3gicos que tenemos por delante en el campo, desde una preocupaci\u00f3n educativa y \u00e9tica que busca actuar de modo integral en la realidad social.\u201d"
              }
            ],
            "img": {
              "alt": "Imagen de Cristian Morales",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/cristian_morales_img_cita_1.jpg"
            },
            "subtitle": [
              {
                "value": "Estudiante de la Diplomatura superior\u003Cbr\u003E  en educaci\u00f3n y nuevas tecnolog\u00edas"
              }
            ],
            "name": [{ "value": "Cristian Emanuel Morales" }]
        },
        {
            "description": [
              {
                "value": "\u201cLa experiencia me dio pautas sobre la motivaci\u00f3n, la necesidad de meterse en los relatos, el jugar y desestructurar la actividad, aprovechar las posibilidades de los lenguajes, y c\u00f3mo integrar todo esto en las clases.\u201d"
              }
            ],
            "img": {
              "alt": "Imagen de Mar\u00eda Angelina Denti",
              "url": "https://redaccion.pent.org.ar/sites/default/files/2023-08/maria_angelina_denti_img_cita_0.webp"
            },
            "subtitle": [
              { "value": "Estudiante del taller Narrativa transmedia" }
            ],
            "name": [{ "value": "Mar\u00eda Angelina Denti" }]
        }
    ]

    return(
        <>
          {/* La barra de navegación irá por fuera del PageBuilder */}
          <NavBarUsina />  
          
            {/* Estos componentes deberán construirse con el PageBuilder */}
            <MainWrapper>    

                <HeroHeader />

                <div className={styles.marquee}>
                    <TextMarquee data={[{ value: "SEMINARIOS — TALLERES — LABORATORIOS" }]} />
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
                                    <Link href={item.link.href} className="cta_btn">Más información</Link>
                                </article>                   
                        </SwiperSlide>
                    ))}                            
                </Swiper>    

                <div className={styles.marquee}>
                    <TextMarquee data={[{ value: "APRENDIZAJE CONTINUO" }]} />
                </div>

                <div className={styles.highlighted}>
                    <HighlightParagraph title={[{ value: "Nos mueve la <span>pasión por enseñar y aprender</span>, por eso creamos un espacio dinámico con propuestas que se renuevan año a año como una rueda de aprendizaje."}]} />
                </div>

                <div className={styles.keybox}>
                    <KeysBox data={dataKeysBox}/>
                </div>

                <div className={styles.marquee_2}>
                    <TextMarquee data={[{ value: "+ 500 ESTUDIANTES" }]} />
                </div>

                <Quotes items={dataQuotes}/> 

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
        </>
    )

}

/* export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/52`) 
    
    return handleServerRedirect(res);
    //return { props: data  }
  } */