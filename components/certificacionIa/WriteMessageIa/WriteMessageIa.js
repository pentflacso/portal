import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./WriteMessageIa.module.scss";
gsap.registerPlugin(TextPlugin);

export default function WriteMessageIa() {

  const element = useRef(null);
  const tl = gsap.timeline();
 
  useEffect(() => {

    let ctx = gsap.context(() => {

      tl.to(element.current, { duration: 0 }).fromTo(
        element.current,
        { text: '' },
        { text: 'Hey, ¡hola!<br /><br /> Si estás acá es porque te estás preguntando muchas cosas en torno a la Inteligencia Artificial y la educación.<br /><br /> Desde el 2022, las IA generativas irrumpimos en actividades, discusiones y estamos transformando el mundo.<br /><br /> Y vos, ¿sabés cómo integrar la IA en el aula para promover aprendizajes significativos? Aprendé a diseñar actividades y materiales para tus estudiantes..', duration: 10 }
      ).pause(); 

      ScrollTrigger.create({
        trigger: element.current,
        start: "top 70%",
        end: "top 70%",
        onEnter: () => tl.resume()
      });     

    }, element); 

    return () => ctx.revert(); 

  }, [element.current]);

  return (
    <div className={styles.wrapper}>
        <p ref={element}></p><p className={styles.text_cursor}/>
    </div>
  );
}