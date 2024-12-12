import { useRef, useEffect, useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styles from "./ExperienceBlockIa.module.scss";

export default function ExperienceBlockIa({ themesAccordionRef }) {

    const { windowSize } = useAppContext();
    const container = useRef(null);
    const colRight = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);
    const textThree = useRef(null);
    const [themesAccordionHeight, setThemesAccordionHeight] = useState(0);
    const [colRightHeight, setColRightHeight] = useState(0);
    const [currentImage, setCurrentImage] = useState('1');  


    useEffect(() => {
        if(windowSize >= 1025 ){
            if (!colRight.current) return;
            const resizeObserver = new ResizeObserver(() => {
            setColRightHeight(colRight.current.offsetHeight);
            });
            resizeObserver.observe(colRight.current);            
            return () => resizeObserver.disconnect();
        }
    }, [windowSize]);


    useEffect(() => {
        if(windowSize >= 1025 ){
            if (!themesAccordionRef.current) return;
            const resizeObserver = new ResizeObserver(() => {
            setThemesAccordionHeight(themesAccordionRef.current.offsetHeight);
            });
            resizeObserver.observe(themesAccordionRef.current);            
            return () => resizeObserver.disconnect();
        }      
    }, [windowSize]);
      
      
    useEffect(() => {
        if(windowSize >= 1025 ){   
            let st = ScrollTrigger.create({
                trigger: colRight.current,
                start: "top 16.5%", 
                end: () => `+=${colRightHeight} 76%`,          
                pin: `.${styles.col_left}`,
                pinSpacing: false,
                scrub: true
            });    
            return () => st.revert();         
        } 
    }, [windowSize, themesAccordionHeight, colRightHeight]);


    useEffect(() => {
        if(windowSize >= 1025 ){ 
            let ctx = gsap.context(() => {  
                ScrollTrigger.create({
                    trigger: textOne.current,
                    start: "top top",
                    end: "top top",
                    onEnter: () => setCurrentImage('2'),
                    onEnterBack: () => setCurrentImage('1'),
                });     
                ScrollTrigger.create({
                    trigger: textTwo.current,
                    start: "top top",
                    end: "top top",
                    onEnter: () => setCurrentImage('3'),
                    onEnterBack: () => setCurrentImage('2'),
                });
        
            }, container);     
            return () => ctx.revert(); 
        } 
    }, [windowSize, themesAccordionHeight, colRightHeight]);


    return (
        <div className={styles.wrapper} ref={container}>

            <div className={styles.col_left}>

                <div className={styles.img_container}>

                    <div className={currentImage == '1' ? `${styles.img_wrapper} ${styles.active}` : `${styles.img_wrapper}`}>
                        <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_1.webp" alt="Imagen experiencia 1"/>
                        <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_2.webp" alt="Imagen experiencia 1" className={styles.exp_1_el_2}/>
                        <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_3.gif" alt="Imagen experiencia 1" className={styles.exp_1_el_3}/>
                        <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_4.webp" alt="Imagen experiencia 1" className={styles.exp_1_el_4}/>
                    </div>

                    <div className={currentImage == '2' ? `${styles.img_wrapper} ${styles.active}` : `${styles.img_wrapper}`}>
                        <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_1.webp" alt="Imagen experiencia 2"/>
                        <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_2.webp" alt="Imagen experiencia 2" className={styles.exp_2_el_2}/>
                        <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_3.webp" alt="Imagen experiencia 2" className={styles.exp_2_el_3}/>
                        <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_4.webp" alt="Imagen experiencia 2" className={styles.exp_2_el_4}/>
                    </div>

                    <div className={currentImage == '3' ? `${styles.img_wrapper} ${styles.active}` : `${styles.img_wrapper}`}>
                        <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_1.webp" alt="Imagen experiencia 3"/>
                        <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_2.webp" alt="Imagen experiencia 3" className={styles.exp_3_el_2}/>
                        <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_3.webp" alt="Imagen experiencia 3" className={styles.exp_3_el_3}/>
                        <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_4.webp" alt="Imagen experiencia 3" className={styles.exp_3_el_4}/>
                    </div>

                </div>

            </div>

            <div className={styles.col_right} ref={colRight}>

                <div className={styles.experience_text_box} ref={textOne}>
                    <div className={`${styles.img_container} ${styles.show_mobile}`}>
                        <div className={`${styles.img_wrapper} ${styles.active}`}>
                            <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_1.webp" alt="Imagen experiencia 1"/>
                            <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_2.webp" alt="Imagen experiencia 1" className={styles.exp_1_el_2}/>
                            <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_3.gif" alt="Imagen experiencia 1" className={styles.exp_1_el_3}/>
                            <img src="../assets/images/certificacion_ia/exp_1/exp_1_element_4.webp" alt="Imagen experiencia 1" className={styles.exp_1_el_4}/>
                        </div>
                    </div>
                    <h4 className={styles.title}>Territorio de aprendizaje</h4>
                    <p className={styles.description}>Trabajamos 100% virtual en encuentros sincrónicos teórico-prácticos y espacios asincrónicos en el campus para experimentar, crear y reflexionar. Interactuamos con la IA desde el primer momento, con niveles de complejidad creciente.</p>
                </div>

                <div className={styles.experience_text_box} ref={textTwo}>
                    <div className={`${styles.img_container} ${styles.show_mobile}`}>
                        <div className={`${styles.img_wrapper} ${styles.active}`}>
                            <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_1.webp" alt="Imagen experiencia 2"/>
                            <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_2.webp" alt="Imagen experiencia 2" className={styles.exp_2_el_2}/>
                            <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_3.webp" alt="Imagen experiencia 2" className={styles.exp_2_el_3}/>
                            <img src="../assets/images/certificacion_ia/exp_2/exp_2_element_4.webp" alt="Imagen experiencia 2" className={styles.exp_2_el_4}/>
                        </div>
                    </div>                   
                    <h4 className={styles.title}>Equipos que construyen</h4>
                    <p className={styles.description}>Potenciamos tu experiencia de aprendizaje con espacios de intercambio, reflexión, exploración compartida y producción colectiva. Realizamos producciones individuales y colectivas, en compañía permanente del equipo docente y la tutoría dedicada en pequeños grupos de trabajo.</p>
                </div>

                <div className={styles.experience_text_box} ref={textThree}>
                    <div className={`${styles.img_container} ${styles.show_mobile}`}>
                        <div className={`${styles.img_wrapper} ${styles.active}`}>
                            <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_1.webp" alt="Imagen experiencia 3"/>
                            <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_2.webp" alt="Imagen experiencia 3" className={styles.exp_3_el_2}/>
                            <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_3.webp" alt="Imagen experiencia 3" className={styles.exp_3_el_3}/>
                            <img src="../assets/images/certificacion_ia/exp_3/exp_3_element_4.webp" alt="Imagen experiencia 3" className={styles.exp_3_el_4}/>
                        </div>
                    </div>                   
                    <h4 className={styles.title}>Mirada tecno-pedagógica</h4>
                    <p className={styles.description}>Construimos conocimiento junto a un equipo pionero con más de 20 años de experiencia en la integración de tecnologías digitales en la educación. Desarrollamos las habilidades necesarias para integrar la IA de manera ética, responsable y pedagógicamente sólida.</p>
                </div>

            </div>

        </div>
    );
}