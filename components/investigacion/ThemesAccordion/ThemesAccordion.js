import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap/dist/gsap";
import { Power2, Power4 } from "gsap";
import $ from 'jquery';
import styles from "./ThemesAccordion.module.scss";

export default function ThemesAccordion(){

    const data = [
        {
            id: 'clave-1',
            title: 'Educación en línea',
            description: `Profundizás en nuevos enfoques de educación y capacitación en línea en diversos ámbitos como organizaciones civiles, empresas, organismos internacionales y públicos, universidades o escuelas. Conocés metodologías de planificación y ponés en juego diferentes modalidades de trabajo interdisciplinario.`
        },
        {
            id: 'clave-2',
            title: 'Jóvenes, infancias y cultura digital',
            description: `Desarrollás nuevas habilidades sobre tutoría en línea, producción de contenidos, diseño de actividades y desarrollo de recursos digitales. Experimentás con nuevas herramientas de trabajo colaborativo de la web y plataformas de e-learning.`
        },
        {
            id: 'clave-3',
            title: 'Enseñanza y tecnologías',
            description: `Te formás para tomar decisiones sobre el diseño tecno-pedagógico, la inclusión de modelos de tutoría, la elección de plataformas digitales, el manejo de tiempos sincrónicos y asincrónicos, la forma de evaluación y la gestión de una oferta de formación. Aprendés a trabajar junto a un equipo de desarrollo interdisciplinario, a conformarlo y guiarlo.`
        },
        {
            id: 'clave-4',
            title: 'Plataformas y productos EdTech',
            description: `Creás entornos virtuales de aprendizaje. Experimentás con el diseño y el montaje de talleres en línea, experiencias inmersivas, comunidades de aprendizaje, redes colaborativas, cursos virtuales, programas de capacitación, trayectos formativos, actividades en línea sincrónicas y asincrónicas.`
        }
    ]

    useEffect(() => {

        const accordion_items = $(".wrapper");
  
            function handlerClick() {
    
                const area = $(this).parent();
                const js_link = $(this).find(".js_link");
                const siblingsLinks = area.siblings().find('.js_link');
                this.parentElement.classList.toggle("isActive");
    
                const contenido = area.find('.contenido');
                const siblingsArea = $(this).parent().siblings();
                const siblingsContenidos = $(this).parent().siblings().find('.contenido');
                
                if(area.hasClass("isActive")) {
                
                    $(this).parent().addClass(`${styles.cerrar}`);
                    $(js_link).addClass('js_link_rotated');
                    
                    var newHeight = contenido.css("height","auto");
                    var heightContenido = newHeight.height();
                    
                    gsap.to(contenido, {
                    duration: .2,
                    height: heightContenido,
                    ease: "none"
                    });
                    
                    siblingsArea.removeClass("isActive");
                    siblingsArea.removeClass(`${styles.cerrar}`);                
                    
                    gsap.to(siblingsContenidos, {
                    duration: .2,
                    height: 0,
                    ease: Power4.easeOut
                    });                
                    
                    gsap.to(js_link, {
                    duration: .5,
                    rotate: 180,
                    ease: Power2.easeOut
                    });              
                    
                    newHeight = contenido.css({
                        height: "0",
                        transition: 'all .3s'
                    });
                
                } else {
                    
                    area.removeClass(`${styles.cerrar}`);
                    
                    gsap.to(contenido, {
                    duration: .2,
                    height: 0,
                    ease: "none"
                    });
                    
                    gsap.to(js_link, {
                    duration: .5,
                    rotate: 0,
                    ease: Power2.easeOut
                    });  
                    
                }
                
                if(siblingsLinks.hasClass('js_link_rotated')){
                    
                    gsap.to(siblingsLinks, {
                        duration: .2,
                        rotate: 0,
                        ease: Power2.easeOut
                    });
    
                    siblingsLinks.removeClass('js_link_rotated');  
                }                
            }
    
            for (var i = 0 ; i < accordion_items.length; i++) {
                accordion_items[i].addEventListener('click' , handlerClick , false ) ; 
            }

    }, []);


    return(
        <div className={styles.acordeon}>
            {data.map((e, i) => {
                return (
                <div key={i} className={`${styles.area} ${e.id}`}>
                    <div className={`${styles.wrapper} wrapper`}>
                        <div className={styles.panel}>
                            <h3 className={styles.accordion}>{e.title}</h3>
                            <span className={`${styles.js_link} js_link`}><FontAwesomeIcon icon={faAngleDown} /></span>
                        </div>
                        <div className={`${styles.contenido} contenido`}>
                            <p>{e.description}</p>
                        </div>
                    </div> 
                </div>                                             
                );
            })}                                 
        </div>
    );
}