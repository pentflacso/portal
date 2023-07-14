import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap/dist/gsap";
import { Power2, Power4 } from "gsap";
import $ from 'jquery';
import styles from "./ThemesAccordion.module.scss";


export default function ThemesAccordion({data}){    

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