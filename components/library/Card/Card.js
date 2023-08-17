import { useAppContext } from '../../../context/AppContext';
import { useEffect } from 'react';
import Link from "next/link";
import { gsap, Back, Elastic } from 'gsap';
import $ from "jquery";
import styles from "./Card.module.scss";


export default function Card({ lead, title, subtitle, description, category, hashtags, date, url, year }){

  const { windowSize } = useAppContext();   
  

  useEffect(() => {

    if(windowSize >= 1025 ){   
        
      $(`.${styles.card}`).on("mouseenter", function mouseEnterContainer() {
          gsap.to(".cursor_ver", {
              duration: 0.8,
              scale: 1,
              opacity: 1,
              ease: Elastic.easeOut.config( 1, 0.6)
          });
      });
      $(`.${styles.card}`).on("mouseleave", function mouseLeaveContainer() {
          gsap.to(".cursor_ver", {
              duration: 0.8,
              scale: 0,
              opacity: 0,
              ease: Back.easeOut.config(3)
          });
      }); 
    }

  }, [windowSize]);


  return( 
    
    <Link href={url} className={lead ? `${styles.card}` : `${styles.card} ${styles.new}`}>
        { lead
        ?
          <>
            <span>{lead}</span>
            <h5>{title}&nbsp;<span>{subtitle}.&nbsp;{year !== '' && `(${year})`}</span></h5>
            { description && <p>{description}</p> }  
            <ul className={styles.hashtags}>{ hashtags.map((hashtags , i) => <li key={i}>{hashtags}</li>) }</ul>                            
          </>
          :    
          <>    
            <h5>{title}</h5>
            <p className={styles.info}>{category} —&nbsp;<span>{date}</span></p>
            { description && <p>{description}</p> }
          </>
        }
    </Link> 
  );
}