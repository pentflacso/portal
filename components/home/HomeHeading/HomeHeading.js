import { useRef, useEffect  } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import styles from "./HomeHeading.module.scss";
gsap.registerPlugin(TextPlugin);

export default function HomeHeading({ title, initial, final }){

    const element = useRef(null);
    const tl = gsap.timeline({ repeat: -1 });
 
    useEffect(() => {

        let ctx = gsap.context(() => {

            for (let i = 0; i < title.length; i++) {
                tl.to(element.current, { duration: 2 }).fromTo(
                    element.current,
                { text: element.current, opacity: 1 },
                { text: title[i].value, duration: 1, opacity: 1 },
                "<"
                );
            }

        }, element); 

        return () => ctx.revert(); 

    }, []);


    return(
        <header>

            <h2 className={styles.heading}><span dangerouslySetInnerHTML={{__html: initial[0].value }}></span><strong ref={element} /><span dangerouslySetInnerHTML={{__html: final[0].value }}></span></h2>
        </header>
    );
}