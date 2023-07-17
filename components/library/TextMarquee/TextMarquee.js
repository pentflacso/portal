import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';
import styles from "./TextMarquee.module.scss";

export default function TextMarquee({ data }){
    const [fieldValue, setFieldValue] = useState('');

    //Concatena los valores de data
    useEffect(() => {
      let t = '';
      let cont = 0;
      const contValues = data.length;
      
      if(Array.isArray(data)){
        data.forEach((value, title) => {
          if (contValues === 1) {
            t = value.value + ' — ' + value.value + ' — ';
          } else {
            t += value.value + ' — ';
          }
          cont++;
        });
    
        setFieldValue(t);
      }
    }, [data]);



    return(
        <>
        <Marquee speed="140" gradientWidth="0" direction="left">
            <h2 dangerouslySetInnerHTML={{__html: `${fieldValue}` }} className={`${styles.text_marquee}`} />
        </Marquee> 
        </>
    );
}