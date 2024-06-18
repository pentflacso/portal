import Marquee from "react-fast-marquee";
import { useEffect, useState } from 'react';
import styles from "./InscriptionMarquee.module.scss";

export default function InscriptionMarquee({ data }){
    const [fieldValue, setFieldValue] = useState('');

    //Concatena los valores de data
    useEffect(() => {
      let t = '';
      let cont = 0;
      const contValues = data.length;
      
      if(Array.isArray(data)){
        data.forEach((value) => {
          if (contValues === 1) {
            if(value.value[0]!="+")
            {
              t = value.value + ' — ' + value.value + ' —&nbsp;';
            }else
            {
              t = value.value + '  ' + value.value + '&nbsp;';
            }
          } else {
            t += value.value + ' —&nbsp;';
          }
          cont++;
        });
        
       // t+="&nbsp;";
        setFieldValue(t);
      }
    }, [data]);

    return(
        <div className={styles.wrapper}>
          <Marquee speed="50" gradientWidth="0" direction="left">
              <h2 dangerouslySetInnerHTML={{__html: `${fieldValue}` }} />
          </Marquee> 
        </div>
    );
}