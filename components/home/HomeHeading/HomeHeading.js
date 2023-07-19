import { useRef, useLayoutEffect, useState  } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import styles from "./HomeHeading.module.scss";
gsap.registerPlugin(TextPlugin);

export default function HomeHeading({ title, initial, final }){

    const element = useRef(null);
    //const captions = ["capacitación", "investigación", "creación", "innovación"];
    const [captions, setCaption] = useState(title);
    const tl = gsap.timeline({ repeat: -1 });
 
    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            for (let i = 0; i < captions.length; i++) {
                tl.to(element.current, { duration: 2 }).fromTo(
                    element.current,
                { text: element.current, opacity: 1 },
                { text: captions[i].value, duration: 1, opacity: 1 },
                "<"
                );
            }

            }, element); 

        return () => ctx.revert(); 

    }, []);


    return(
        <header>
            <h2 className={styles.heading}>{initial[0].value}<br className={styles.mobile} /> <span ref={element} /><br />{final[0].value}</h2>
        </header>
    );
}