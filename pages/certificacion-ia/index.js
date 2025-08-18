import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import NavBarIa from '../../components/certificacionIa/NavBarIa/NavBarIa';
import MetaTags from '../../components/library/MetaTags/MetaTags';
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
import WhatsappBtn from '../../components/usina/WhatsappBtn/WhatsappBtn';

import styles from "./certificacion.module.scss";

export default function Index(){
    const container = useRef();

  const themesAccordion = useRef(null);
  const navBarBrand = useRef(null);
  const [ brandVisibility, setBrandVisibility ] = useState(true);
  const [ whatsAppBtnStatus, setWhatsAppBtnStatus] = useState(0);
  const { windowSize, setDataStrip,announcementStatus } = useAppContext();  

  const [ elementHeight, setElementHeight ] = useState(0);  

  
  useEffect(() => {  
    let stOne = ScrollTrigger.create({
      trigger: navBarBrand.current,
      start: "top top",
      end: "top top",
      onEnter: () => { setWhatsAppBtnStatus(1);},
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
  }, [windowSize]);

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
    <div ref={container}>

      <MetaTags
          pageTitle= 'Certificación - Enseñanza y Aprendizaje con Inteligencia Artificial — FLACSO | PENT' 
          shareTitle='Certificación - Enseñanza y Aprendizaje con Inteligencia Artificial — FLACSO | PENT' 
          keywords='IA, educación, tecnología, TICS'
          description='Llevá la IA a tus espacios de formación e integrala en las actividades con estudiantes y el proceso de planificación.  Desarrollá secuencias didácticas, materiales y estrategias de evaluación propiciando un uso crítico, ético y responsable.'
          img='/assets/images/certificacion_ia/ia_cover.png'
          url='http://pent.flacso.org.ar/certificacion-ia'

      />
      
      <WhatsappBtn whatsAppBtnStatus={whatsAppBtnStatus} course = "Certificación - Enseñar y Aprender con Inteligencia Artificial" announcementOverlapping = {false} />      
      <NavBarIa refNavBrand={navBarBrand} brandVisibility={brandVisibility}/>
        


        <MainWrapper >  

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
                            "value": "<p>Incorporarás una mirada tecno-pedagógica tanto al momento de diseñar como de evaluar los aprendizajes con IA. Aplicarás estrategias de evaluación, que tomen en consideración el uso de la IA. Reflexionarás sobre las mejores prácticas para la evaluación del aprendizaje en un contexto mediado por la IA. Ensayarás tus secuencias didácticas en contextos reales.</p>",
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
                      "field_button_file": "https://redaccion.pent.org.ar/sites/default/files/2025-07/Programa%20-%20Certificacio%CC%81n%20IA%20%282025%29.pdf",
                      "field_button_type": [{ "value": "file" }],
                      "field_hidden": []
                  }}
              />    
            </div>

            <div className={styles.marquee_3}>
                <TextMarquee data={[{ value: "EXPERIENCIA PENT" }]} />
            </div>  

            <ExperienceBlockIa themesAccordionRef={themesAccordion} />


            <div className={styles.marquee_2}>
                <TextMarquee data={[{ value: "UNA CURSADA DIFERENTE" }]} />
            </div>  

            <div ref={themesAccordion}>
              <ThemesAccordion
                  data={[
                      {
                        "description": [
                          {
                            "value": "<p>Nuestro modelo de formación sincrónico y asincrónico te propone trabajar en vivo con docentes y compañeros, mientras que avanzás a tu ritmo a través de clases disponibles en Campus Virtual.</p> <p><strong>Cada semana</strong> se habilita una nueva clase en el Campus Virtual con actividades, materiales, herramientas y lecturas, para acceder según tu disponibilidad. </p> <p><strong>Cada 15 días</strong> trabajás en una clase en vivo super participativa y dinámica con docentes y compañeros vía Zoom.</p> <p><strong>Todos los días</strong> tendrás acompañamiento de tu tutor/a a través de un grupo de Whatsapp de tu comisión. </p>",
                            "format": "basic_html"
                          }
                        ],
                        "title": [{ "value": "Modalidad de las clases" }],
                        "field_hidden": [{ "value": "0" }]
                      },
                      {
                        "description": [
                          {
                            "value": `<p>Los encuentros sincrónicos vía Zoom se realizan cada 15 días y complementan las clases semanales asincrónicas que se publican en el Aula Virtual.</p><p><strong>Inicio:</strong> 20 de agosto de 2025</p><p><strong>Horario:</strong></p><ul><li><strong>Argentina, Chile y Uruguay:</strong> Miércoles de 21 a 23 h (GMT-3)</li>
                            <li><strong>Colombia, México, Panamá, Perú:</strong> Miércoles de 19 a 21 h (GMT-5)</li>
                            <li><strong>Costa Rica, El Salvador, Honduras:</strong> Miércoles de 18 a 20 h (GMT-6)</li>
                          </ul>
                          <p><strong>Fechas:</strong></p>
                          <ul>
                            <li><strong>20/8:</strong> Encuentro de embarque</li>
                            <li><strong>27/8:</strong> Diseño de actividades con IA: el concepto del vals</li>
                            <li><strong>10/9:</strong> Diseño de actividades con IA: prueba y retroalimentación</li>
                            <li><strong>24/9:</strong> La IA como copiloto</li>
                            <li><strong>8/10:</strong> La IA en las distintas etapas de la planificación</li>
                            <li><strong>15/10:</strong> Clínica complementaria</li>
                            <li><strong>22/10:</strong> La IA en el aula: mis hipótesis de trabajo</li>
                            <li><strong>5/11:</strong> La IA y la evaluación: revisando nuestras prácticas</li>
                            <li><strong>19/11:</strong> Encuentro de cierre y reflexión</li>
                          </ul>
                          `,
                            "format": "basic_html"
                          }
                        ],
                        "title": [{ "value": "Días y horarios de los sincrónicos" }],
                        "field_hidden": [{ "value": "0" }]
                      },
                      {
                        "description": [
                          {
                            "value": "<p>Formarás parte de una comisión reducida con acompañamiento personalizado. Tu tutor/a mantendrá una comunicación fluida (por WhatsApp y correo electrónico), hará seguimiento de tus actividades, resolverá dudas técnicas y pedagógicas, orientará en el uso de herramientas y te brindará retroalimentación con ejemplos concretos que potencien tu participación.</p><p>Además, durante los ensayos de tus secuencias didácticas en contextos reales, el equipo de tutoría te brindará una mentoría activa. Te acompañará en el diseño, la implementación y la evaluación de tus experiencias con IA en el aula, promoviendo el análisis situado, el intercambio reflexivo y la construcción colaborativa de saberes, para fortalecer el puente entre teoría y práctica.</p>",
                            "format": "basic_html"
                          }
                        ],
                        "title": [{ "value": "Tutoría y mentoría" }],
                        "field_hidden": [{ "value": "0" }]
                      }
                  ]} 
              /> 
            </div>

            <div className={styles.marquee_4}>
                <TextMarquee data={[{ value: "EQUIPO DOCENTE" }]} />
            </div>

            <CvSelector persons={[
              {
                "nombre": "Fabio Tarasow",
                "bio": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine y televi...",
                "nid": "1",
                "alias": "/equipo/fabio-tarasow",
                "img": {
                  "alt": "Foto Fabio Tarasow",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/fabio_tarasow_profile.webp"
                }
              },
              {
                "nombre": "Christian Milillo",
                "bio": "Es investigador y docente, Lidera el Laboratorio en Educación e Inteligencia Artificial y es parte del equipo de investigación en Inteligencia Artificial del PENT FLACSO...",
                "nid": "3",
                "alias": "/equipo/christian-milillo",
                "img": {
                  "alt": "Foto Christian Milillo",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/christian_milillo_profile.webp"
                }
              },
              {
                "nombre": "Nahuel Gonzalez",
                "bio": "Es Ingeniero en Electrónica (Universidad Tecnológica Nacional), docente universitario e investigador. Se formó como especialista en Educación y Nuevas Tecnologías (FLACSO)...",
                "nid": "4",
                "alias": "/equipo/nahuel-gonzalez",
                "img": {
                  "alt": "Foto Nahuel Gonzalez",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2024-02/nahuel%201.png"
                }
              },{
                "nombre": "Laura Parmigiano",
                "bio": "Es Licenciada en Ciencia Política (UBA). Profesora en Docencia Media y Superior (UTN). Especialista en Educación y Nuevas Tecnologías (FLACSO). Se encuentra cursando la Maestría en Procesos Educativos Mediados por Tecnología (UNC)...",
                "nid": "7",
                "alias": "/equipo/laura-parmigiano",
                "img": {
                  "alt": "Foto Laura Parmigiano",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2024-03/laura5.png"
                }
              },
              {
                "nombre": "Gisela Schwartzman",
                "bio": "Es Máster en Enseñanza y Aprendizaje Abiertos y a Distancia (UNED, España) y Licenciada en Ciencias de la Educación (UBA). Se desempeña en la docencia universitaria desde 1992, en los últimos años con foco en carreras de posgrado. Es Di...",
                "nid": "2",
                "alias": "/equipo/gisela-schwartzman",
                "img": {
                  "alt": "Foto Gisela Schwartzman",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/gisela_schwartzman_profile.webp"
                }
              },{
                "nombre": "Francisco Chamorro",
                "bio": "Es Profesor en Ciencias de la Educación por la Universidad Católica de Santa Fe. Especialista en Educación y Nuevas Tecnologías, y diplomado en Gestión Educativa (FLACSO)...",
                "nid": "5",
                "alias": "/equipo/francisco-chamorro",
                "img": {
                  "alt": "Foto Francisco  Chamorro",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/francisco_chamorro_profile.webp"
                }
              },{
                "nombre": "María Sol Carissimo",
                "bio": "Es Especialista en Tecnología Educativa y apasionada por la integración de la inteligencia artificial en el ámbito educativo, con una sólida formación en ciencias naturales y pedagogía...",
                "nid": "6",
                "alias": "/equipo/maria-sol-carissimo",
                "img": {
                  "alt": "Foto Sol Carissimo",
                  "url": "https://redaccion.pent.org.ar/sites/default/files/2025-07/Frame%202%20%282%29.png"
                }
              }
            ]}/>

            <div className={styles.marquee_5}>
                <TextMarquee data={[{ value: "SUMATE" }]} />
            </div>

            <PaymentBlockIa />

            <FooterIa />  

        </MainWrapper>         
    </div>
  )
}