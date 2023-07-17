import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./LeafsItem.module.scss";


export default function LeafsItem({ items }){

    const { windowSize } = useAppContext();

    const [currentLeaf, setCurrentLeaf] = useState('leaf_0');
    const [leafsPosition, setLeafsPosition] = useState(styles.position_0);

    function changeLeafsPosition(value) {
        if(value === 'leaf_0'){
            setLeafsPosition(styles.position_0)
        } else if (value === 'leaf_1'){
            setLeafsPosition(styles.position_1)
        } else if (value === 'leaf_2'){
            setLeafsPosition(styles.position_2)
        } else if (value === 'leaf_3'){
            setLeafsPosition(styles.position_3)
        }          
    } 
    
    function changeCurrentLeaf(value) {
        currentLeaf !== value && setCurrentLeaf(value);  
        changeLeafsPosition(value)      
    } 


    useEffect(() => {
        if(windowSize >= 1025){
            
            // Follow custom cursor
            const ball = document.querySelector(".cursor_dot");
            gsap.set(".cursor_dot", {xPercent: -46, yPercent: -32});       
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
            $(`.${styles.leaf_item}`).on("mouseenter", function mouseEnterContainer() {
                gsap.to(".cursor_dot", {
                    duration: 0.8,
                    scale: 1,
                    opacity: 1,
                    ease: Elastic.easeOut.config( 1, 0.6)
                });
            });
            $(`.${styles.leaf_item}`).on("mouseleave", function mouseLeaveContainer() {
                gsap.to(".cursor_dot", {
                    duration: 0.8,
                    scale: 0,
                    opacity: 0,
                    ease: Back.easeOut.config(3)
                });
            });  
        }
                                  
    }, []);


    return(

        <div className={styles.container}>
            {windowSize >= 1025 ?           
            <div className={`${styles.wrapper} ${leafsPosition}`}>
                {
                    items.map((item, i) => {                   
                        return ( 
                            <div key={i} className={styles.leaf_item} onClick={ () => changeCurrentLeaf(`leaf_${i}`)}>
                                <img src={item.img.url} alt={item.img.alt} />
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div> 
                        );
                    })
                }
            </div>         
            :
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation={true}    
                className={`${styles.carrousel_formacion} swiper-cards`}       
            >   
            {
            items.map((item, i) => (
            <SwiperSlide key={i}>
                <div className={styles.item_slide}>
                    <img src={item.img.url} alt={item.img.alt} />
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </div>            
            </SwiperSlide>
            ))
            }                            
            </Swiper>
            }

        </div>        
    );
}