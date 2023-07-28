import { useAppContext } from '../../../context/AppContext';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import styles from "./NewsSelector.module.scss";
import $ from "../../../node_modules/jquery";

export default function NewsSelector({ data }){
    
    const { windowSize } = useAppContext();
    const [ showNews, setShowNews ] = useState('none');

    return(
        <div className={styles.wrapper}>
            <div className={styles.marquee_btns}>
                {data.map((e, i) => {
                    
                    if(i !== 4){


                    useEffect(() => {
                        if(windowSize >= 1025){                            
                            $(`.${styles.btn}.news-${i}`).on("mouseenter", function mouseEnterBtns() {
                                setShowNews(i);
                            });
                            $(`.${styles.btn}.news-${i}`).on("mouseleave", function mouseEnterBtns() {
                                setShowNews('none');                 
                            });
                        }
                    }, []);
                    
                    return (         
                    <Link href={`${e.path}`} className={`${styles.btn} news-${i}`} key={i}>
                        <div className={styles.arrow} />

                        {windowSize >= 1025 ? 
                        <>
                            { showNews === i &&
                                <div className={styles.description_marquee}>
                                    <Marquee speed="150" gradientWidth="0" direction="left">
                                        <div dangerouslySetInnerHTML={{__html: "&nbsp;— " + e.title + " — " + e.description }} />
                                        <div dangerouslySetInnerHTML={{__html: "&nbsp;— " + e.title + " — " + e.description }} />
                                        <div dangerouslySetInnerHTML={{__html: "&nbsp;— " + e.title + " — " + e.description }} />
                                    </Marquee>      
                                </div>      
                            }
                        </>
                        :                     
                        <div className={styles.description_marquee}>
                            <h4>{e.title}&nbsp;—&nbsp;</h4>
                            <p dangerouslySetInnerHTML={{__html: e.description }} />
                        </div>                 
                        }

                        {windowSize >= 1025 ?   
                        <>
                            <span>{e.title}</span> 
                        </>                             
                        : ''       
                        }                                  
                    </Link>                                              
                    );
                
                }

                })} 
                
                
            </div>
            
                <div className={styles.show_all_btn}>
                    <Link href={data[4].path}>{data[4].title} <span className={styles.arrow}><img src="/assets/icons/arrow_next_icon.svg" alt="botón flecha"/></span></Link> 
                </div>
                  
        </div>
    );
}