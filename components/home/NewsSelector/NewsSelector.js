import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import Link from "next/link";
import styles from "./NewsSelector.module.scss";
import $ from "../../../node_modules/jquery";

export default function NewsSelector({ data }){
    
    const [ showNews, setShowNews ] = useState('none');

    return(
        <div className={styles.wrapper}>
            <div className={styles.marquee_btns}>
                {data.map((e, i) => {
                    
                    useEffect(() => {

                        $(`.${styles.btn}.news-${i}`).on("mouseenter", function mouseEnterBtns() {
                            setShowNews(i);
                        });
                        $(`.${styles.btn}.news-${i}`).on("mouseleave", function mouseEnterBtns() {
                            setShowNews('none');                 
                        });

                    }, []);

                    return (               
                        
                    <Link href={`/${e.path_id}`} className={`${styles.btn} news-${i}`} key={i}>
                        { showNews === i &&
                            <div className={styles.description_marquee}>
                                <Marquee speed="50" gradientWidth="0" direction="left">
                                    <div dangerouslySetInnerHTML={{__html: e.description }} />
                                    <div dangerouslySetInnerHTML={{__html: e.description }} />
                                    <div dangerouslySetInnerHTML={{__html: e.description }} />
                                </Marquee>      
                            </div>      
                        }         
                        <span>{e.title}</span>                
                    </Link>                 
                                                        
                    );
                })}                                 
            </div>

            <div className={styles.show_all_btn}>
                <Link href={`/novedades`}>Ver todo</Link> 
            </div>

        </div>
    );
}