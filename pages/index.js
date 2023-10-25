import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { useAppContext } from '../context/AppContext';
import { handleServerRedirect } from '../Middleware/ErrorRedirect';
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import PageBuilder from '../components/PageBuilder/PageBuilder';
import styles from "./index.module.scss";

function Home({data}){
/*    
    useEffect(() => {
        TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_TAGMANAGER_GTM_ID });  
        TagManager.dataLayer({
            dataLayer: {
            event: 'page_view',
            type: 'home'
            },
        }); 
    }, []);  
*/
    const { windowSize } = useAppContext();   

    useEffect(() => {   
        if(windowSize >= 1025){    
            
            // Follow custom cursor
            const ball = document.querySelector(".cursor_leer");
            gsap.set(".cursor_leer", {xPercent: -50, yPercent: -70});       
            const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            const mouse = { x: pos.x, y: pos.y };
            const speed = 0.25;
            const xSet = gsap.quickSetter(ball, "x", "px");
            const ySet = gsap.quickSetter(ball, "y", "px");
            
            window.addEventListener("mousemove", e => {
                mouse.x = e.x;
                mouse.y = e.y; 
            });
            
            gsap.ticker.add(() => {
                // adjust speed for higher refresh monitors
                const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
                pos.x += (mouse.x - pos.x) * dt;
                pos.y += (mouse.y - pos.y) * dt;
                xSet(pos.x);
                ySet(pos.y);
            });
            
            $(`.${styles.card_new}`).on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_leer", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            
            $(`.${styles.card_new}`).on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_leer", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            }); 
        }
        
    }, [windowSize]);
    
  
    if(Object.keys(data).length > 0){  
        return(
            <>   
                <PageBuilder data={ data } stylesx={styles} />
                
                {windowSize >= 1025 &&
                    <div className="cursor_leer">
                        <div className="circle"><span>Ver</span></div>
                    </div> 
                }    
            </>
        
        )
    }
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/75`)
    return handleServerRedirect(res);
    // Pass data to the page via props
    //return { props: data  }
}

export default Home;