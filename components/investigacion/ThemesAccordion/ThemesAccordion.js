import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { gsap } from "gsap/dist/gsap";
import { Power2, Power4 } from "gsap";
import styles from "./ThemesAccordion.module.scss";

export default function ThemesAccordion({ data }) {
  const [dataAccordion, setDataAccordion] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRef = useRef(null);
  const contentRefs = useRef([]);
  const iconRefs = useRef([]);

  // Genera un ID único para cada instancia del componente
  const instanceId = useRef(`accordion-${Math.random().toString(36).substr(2, 9)}`);

  // Crea las variables que se consume de la API
  useEffect(() => {
    const newDataAccordion = data.map((item, index) => {
      const id = `${instanceId.current}-item-${index}`;
      const title = item.title[0].value;
      const description = item.description[0].value;

      return { id, title, description, key: index };
    });

    setDataAccordion(newDataAccordion);
    
    // Inicializa los refs arrays
    contentRefs.current = newDataAccordion.map(() => null);
    iconRefs.current = newDataAccordion.map(() => null);
  }, [data]);

  const handleItemClick = (index) => {
    const isCurrentlyActive = activeIndex === index;
    const newActiveIndex = isCurrentlyActive ? null : index;
    
    // Cierra todos los elementos primero
    dataAccordion.forEach((_, i) => {
      if (contentRefs.current[i] && iconRefs.current[i]) {
        // Anima el contenido
        gsap.to(contentRefs.current[i], {
          duration: 0.2,
          height: i === index && !isCurrentlyActive ? 'auto' : 0,
          ease: i === index && !isCurrentlyActive ? "none" : Power4.easeOut
        });

        // Anima el ícono
        gsap.to(iconRefs.current[i], {
          duration: 0.5,
          rotate: i === index && !isCurrentlyActive ? 180 : 0,
          ease: Power2.easeOut
        });
      }
    });

    setActiveIndex(newActiveIndex);
  };

  // Función para establecer la altura automática después de la animación
  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      const content = contentRefs.current[activeIndex];
      
      // Establece height auto temporalmente para obtener la altura real
      const originalHeight = content.style.height;
      content.style.height = 'auto';
      const autoHeight = content.offsetHeight;
      content.style.height = originalHeight;
      
      // Anima a la altura real
      gsap.to(content, {
        duration: 0.2,
        height: autoHeight,
        ease: "none",
        onComplete: () => {
          // Después de la animación, establece height auto para responsive
          content.style.height = 'auto';
        }
      });
    }
  }, [activeIndex]);

  return (
    <div className={styles.acordeon} ref={accordionRef}>
      {dataAccordion.map((item, index) => {
        const isActive = activeIndex === index;
        
        return (
          <div 
            key={item.key} 
            className={`${styles.area} ${isActive ? 'isActive' : ''} ${isActive ? styles.cerrar : ''}`}
            id={item.id}
          >
            <div 
              className={`${styles.wrapper}`}
              onClick={() => handleItemClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.panel}>
                <h3 className={styles.accordion}>{item.title}</h3>
                <span 
                  className={`${styles.js_link} ${isActive ? 'js_link_rotated' : ''}`}
                  ref={(el) => (iconRefs.current[index] = el)}
                >
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </div>
            
            <div 
              className={styles.contenido}
              ref={(el) => (contentRefs.current[index] = el)}
              style={{ 
                height: 0, 
                overflow: 'hidden',
                transition: 'none' // Deshabilitamos transition CSS ya que usamos GSAP
              }}
              dangerouslySetInnerHTML={{ __html: item.description }} 
            />
            </div>
          </div>
        );
      })}
    </div>
  );
}