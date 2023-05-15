import { useRef, useLayoutEffect  } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import styles from "./HomeHeading.module.scss";
gsap.registerPlugin(TextPlugin);

export default function HomeHeading({ title }){

    const element = useRef(null);
    const captions = ["capacitación", "investigación", "creación", "innovación"];
    const tl = gsap.timeline({ repeat: -1 });
 
    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            for (let i = 0; i < captions.length; i++) {
                tl.to(element.current, { duration: 3 }).fromTo(
                    element.current,
                { text: element.current, opacity: 0 },
                { text: captions[i], duration: 1, opacity: 1 },
                "<"
                );
            }

            }, element); 

        return () => ctx.revert(); 

    }, []);


    return(
        <h1 className={styles.heading}>Somos un espacio<br className={styles.mobile} /> de <span ref={element} /><br />en educación y tecnologías digitales</h1>
    );
}