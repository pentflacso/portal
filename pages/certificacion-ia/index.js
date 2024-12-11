import { useRef, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import NavBarIa from '../../components/certificacionIa/NavBarIa/NavBarIa';
import HeroIa from '../../components/certificacionIa/HeroIa/HeroIa';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import WriteMessageIa from '../../components/certificacionIa/WriteMessageIa/WriteMessageIa';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import CTA from '../../components/library/CTA/CTA';
import ExperienceBlockIa from '../../components/certificacionIa/ExperienceBlockIa/ExperienceBlockIa';
import SectionSelector from '../../components/home/SectionSelector/SectionSelector';
import PaymentBlockIa from '../../components/certificacionIa/PaymentBlockIa/PaymentBlockIa';
import FooterIa from '../../components/certificacionIa/FooterIa/FooterIa';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./certificacion.module.scss";

export default function Index(){
  const { windowSize } = useAppContext();
  const navBarBrand = useRef();
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
  }, [navBarBrand.current]);


  useEffect(() => {
    if(windowSize >= 1025 ){
      let timeOutResize; 
      function workAfterResizeIsDone() {
        window.location.reload();
      }  
      window.addEventListener("resize", ()=> {
          clearTimeout(timeOutResize);
          timeOutResize = setTimeout(workAfterResizeIsDone, 100);
      });  
      return () => window.removeEventListener("resize", null);
    }
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

            <ThemesAccordion
                data={[
                    {
                      "description": [
                        {
                          "value": "<p>Lorem Ipsum.</p>",
                          "format": "basic_html"
                        }
                      ],
                      "title": [{ "value": "Creación de estrategias educativas" }],
                      "field_hidden": [{ "value": "0" }]
                    },
                    {
                      "description": [
                        {
                          "value": "<p>Lorem Ipsum.</p>",
                          "format": "basic_html"
                        }
                      ],
                      "title": [{ "value": "Exploración de herramientas" }],
                      "field_hidden": [{ "value": "0" }]
                    },
                    {
                      "description": [
                        {
                          "value": "<p>Lorem Ipsum.</p>",
                          "format": "basic_html"
                        }
                      ],
                      "title": [{ "value": "Planificación y evaluación" }],
                      "field_hidden": [{ "value": "0" }]
                    },
                    {
                      "description": [
                        {
                          "value": "<p>Lorem Ipsum.</p>",
                          "format": "basic_html"
                        }
                      ],
                      "title": [{ "value": "Análisis y uso crítico" }],
                      "field_hidden": [{ "value": "0" }]
                    }
                ]} 
            /> 
            
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

            <ExperienceBlockIa />

            <div className={styles.marquee_4}>
                <TextMarquee data={[{ value: "EQUIPO DOCENTE" }]} />
            </div>

            <SectionSelector
            data={
                [
                    {
                      "field_hidden": [],
                      "description": [
                        {
                          "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine y televisión en la Universi...",
                          "format": "restricted_html"
                        }
                      ],
                      "picture": {
                        "alt": "Fabio Tarasow",
                        "url": "https://redaccion.pent.org.ar/sites/default/files/2023-06/fabio_tarasow.png"
                      },
                      "linked_path": [{ "title": "", "src": "/formacion" }],
                      "cta_title": [{ "value": "Fabio Tarasow" }]
                    },
                    {
                      "field_hidden": [],
                      "description": [
                        {
                          "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine y televisión en la Universi...",
                          "format": "restricted_html"
                        }
                      ],
                      "picture": {
                        "alt": "Corina Rogovsky",
                        "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/monica_trech.png"
                      },
                      "linked_path": [{ "title": "", "src": "/asesorias" }],
                      "cta_title": [{ "value": "Corina Rogovsky" }]
                    },
                    {
                      "field_hidden": [],
                      "description": [
                        {
                          "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine y televisión en la Universi...",
                          "format": "restricted_html"
                        }
                      ],
                      "picture": {
                        "alt": "Gisela Schwartzman",
                        "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/gisela_schwartzman.png"
                      },
                      "linked_path": [{ "title": "", "src": "/producciones" }],
                      "cta_title": [{ "value": "Gisela Schwartzman" }]
                    },
                    {
                      "field_hidden": [],
                      "description": [
                        {
                          "value": "Es Master en Comunicación y Tecnología Educativa por el Instituto Latinoamericano de la Comunicación Educativa (ILCE) de México, graduado en Ciencias de la Educación por la UBA y docente de nivel primario. Realizó estudios de cine y televisión en la Universi...",
                          "format": "restricted_html"
                        }
                      ],
                      "picture": {
                        "alt": "Mónica Trech",
                        "url": "https://redaccion.pent.org.ar/sites/default/files/2023-07/gisela_schwartzman.png"
                      },
                      "linked_path": [{ "title": "", "src": "/producciones" }],
                      "cta_title": [{ "value": "Mónica Trech" }]
                    }
                  ]
            } 
            />

            <div className={styles.marquee_5}>
                <TextMarquee data={[{ value: "SUMATE" }]} />
            </div>

            <PaymentBlockIa />

            <FooterIa />  

        </MainWrapper> 
    </>
  )
}