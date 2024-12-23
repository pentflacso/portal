import { useRef, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import NavBarIa from '../../components/certificacionIa/NavBarIa/NavBarIa';
import HeroIa from '../../components/certificacionIa/HeroIa/HeroIa';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import WriteMessageIa from '../../components/certificacionIa/WriteMessageIa/WriteMessageIa';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import CTA from '../../components/library/CTA/CTA';
//import StudyPlanBtn from '../../components/certificacionIa/StudyPlanBtn/StudyPlanBtn';
import ExperienceBlockIa from '../../components/certificacionIa/ExperienceBlockIa/ExperienceBlockIa';
import CvSelector from '../../components/usina/CvSelector/CvSelector';
import PaymentBlockIa from '../../components/certificacionIa/PaymentBlockIa/PaymentBlockIa';
import FooterIa from '../../components/certificacionIa/FooterIa/FooterIa';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./certificacion.module.scss";

export default function Index(){
  const { windowSize } = useAppContext();
  const themesAccordion = useRef(null);
  const navBarBrand = useRef(null);
  const [ brandVisibility, setBrandVisibility ] = useState(true);


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
  }, [windowSize]);

  
  return(
    <>
      <NavBarIa refNavBrand={navBarBrand} brandVisibility={brandVisibility}/>
        
        <MainWrapper>  

          <HeroIa />         

            <WriteMessageIa />

            <div className={styles.marquee_2}>
                <TextMarquee data={[{ value: "APRENDIZAJES CLAVES" }]} />
            </div>  

            <div ref={themesAccordion}>
              <ThemesAccordion
                  data={[
                      {
                        "description": [
                          {
                            "value": "<p>Desarrollarás competencias para diseñar e implementar estrategias educativas que integren de manera ética y efectiva la inteligencia artificial, a fin de potenciar el aprendizaje activo, colaborativo y significativo, en diversos contextos educativos. Comprenderás los fundamentos de la IA, sus diferentes tipos y aplicaciones en el ámbito educativo.</p>",
                            "format": "basic_html"
                          }
                        ],
                        "title": [{ "value": "Creación de estrategias educativas" }],
                        "field_hidden": [{ "value": "0" }]
                      },
                      {
                        "description": [
                          {
                            "value": "<p>Conocerás diferentes herramientas basadas en IA para integrarlas en diferentes áreas de la tarea educativa. Adquirirás criterios para seleccionarlas y utilizarlas en función de los objetivos de aprendizaje y las necesidades de los estudiantes. Desarrollarás habilidades para crear y adaptar materiales educativos con IA.</p>",
                            "format": "basic_html"
                          }
                        ],
                        "title": [{ "value": "Exploración de herramientas" }],
                        "field_hidden": [{ "value": "0" }]
                      },
                      {
                        "description": [
                          {
                            "value": "<p>Incorporarás una mirada tecno-pedagógica tanto al momento de diseñar como de evaluar los aprendizajes con IA. Aplicarás estrategias de evaluación, que tomen en consideración el uso de la IA. Reflexionarás sobre las mejores prácticas para la evaluación del aprendizaje en un contexto mediado por la IA.</p>",
                            "format": "basic_html"
                          }
                        ],
                        "title": [{ "value": "Planificación y evaluación" }],
                        "field_hidden": [{ "value": "0" }]
                      },
                      {
                        "description": [
                          {
                            "value": "<p>Desarrollarás criterios para analizar y aplicar de manera responsable la IA en los procesos de enseñanza y aprendizaje. Compartirás experiencias, analizarás ventajas y desventajas de la IA en la educación, así como su impacto potencial en el aprendizaje y la enseñanza. Reflexionarás sobre las implicaciones éticas y sociales del uso de la IA en la educación.</p>",
                            "format": "basic_html"
                          }
                        ],
                        "title": [{ "value": "Análisis y uso crítico" }],
                        "field_hidden": [{ "value": "0" }]
                      }
                  ]} 
              /> 
            </div>

            {/* <StudyPlanBtn /> */}
            
            <div className={styles.cta_1}>
              <CTA blockProps={
                  {
                      "field_button_cta": [{ "value": "Descargar plan de estudio" }],
                      "field_button_file": "https://redaccion.pent.org.ar/sites/default/files/2024-08/Escape_programa_2024.pdf",
                      "field_button_type": [{ "value": "file" }],
                      "field_hidden": []
                  }}
              />    
            </div>

            <div className={styles.marquee_3}>
                <TextMarquee data={[{ value: "EXPERIENCIA PENT" }]} />
            </div>  

            <ExperienceBlockIa themesAccordionRef={themesAccordion} />

            <div className={styles.marquee_4}>
                <TextMarquee data={[{ value: "EQUIPO DOCENTE" }]} />
            </div>

            <CvSelector persons={[
              {
                "nombre": "Fabio Tarasow",
                "bio": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine y televi...",
                "nid": "10",
                "alias": "/equipo/fabio-tarasow",
                "img": {
                  "alt": "Foto Fabio Tarasow",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/fabio_tarasow_profile.webp"
                }
              },
              {
                "nombre": "Gisela Schwartzman",
                "bio": "Es Máster en Enseñanza y Aprendizaje Abiertos y a Distancia (UNED, España) y Licenciada en Ciencias de la Educación (UBA). Se desempeña en la docencia universitaria desde 1992, en los últimos años con foco en carreras de posgrado. Es Di...",
                "nid": "41",
                "alias": "/equipo/gisela-schwartzman",
                "img": {
                  "alt": "Foto Gisela Schwartzman",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/gisela_schwartzman_profile.webp"
                }
              },
              {
                "nombre": "Corina Rogovsky",
                "bio": "Magister en Tecnología Educativa en la Universidad de Buenos Aires. Licenciada en Ciencias de la Comunicación (UBA), Especialista en Educación y Nuevas Tecnologías (FLACSO). Especialista en Tecnología Educativa (UBA). Maestra de...",
                "nid": "5",
                "alias": "/equipo/corina-rogovsky",
                "img": {
                  "alt": "Foto Corina Rogovsky",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/corina_rogovsky_profile.webp"
                }
              },
              {
                "nombre": "Mónica Trech",
                "bio": "Especialista en e-learning. Consultora en educación y nuevas tecnologías. Coordinadora del PENT FLACSO desde su fundación, en el año 2004. Colabora en el diseño de experiencias de aprendizaje significativas, memorables y empá...",
                "nid": "48",
                "alias": "/equipo/monica-trech",
                "img": {
                  "alt": "Foto Mónica Trech",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/monica_trech_profile.webp"
                }
              }
            ]}/>

            <div className={styles.marquee_5}>
                <TextMarquee data={[{ value: "SUMATE" }]} />
            </div>

            <PaymentBlockIa />

            <FooterIa />  

        </MainWrapper>         
    </>
  )
}