import { useState } from 'react';
import { useRouter } from "next/router";
import styles from "./SectionSelector.module.scss";

export default function SectionSelector({data}){    

    const [ titleSelected, setTitleSelected ] = useState('fabio-t');
    const router = useRouter();

    const changeTitleStatus = (title) => {
        setTitleSelected(title);
    };

    const goToPage = (path) => {
        router.push(`${path}`);
    };


    return(

        <div className={styles.container}>
            
            <div className={styles.cta_title}>                            
                <div className={styles.wrapper}>
                    {data.map((data) => {
                        return (
                            <button onClick={ () => changeTitleStatus(`${data.id}`)} className={titleSelected === `${data.id}` ? `${styles.active}` : `${styles.inactive}`} key={data.id}><span />{data.cta_title}</button>
                        );
                    })}
                </div>
            </div>                        

            <div className={styles.imagen_docente}>
                {data.map((data) => {
                    return (
                        <img src={data.picture} alt={data.picture} className={titleSelected === data.id ? `${styles.visible} ${styles.slide_docente}` : ''} key={data.id} />              
                    );
                })}
                <span />
            </div>

            <div className={styles.texto_docente}>
                {data.map((data) => {
                    return (
                    <div key={data.id}>
                        { titleSelected === `${data.id}` &&
                        <> 
                            <p dangerouslySetInnerHTML={{__html: data.description }} />
                            <button type="button" onClick={ () => goToPage(`${data.linked_path}`)}>Conocer más</button>                                         
                        </>
                        }                                        
                    </div>
                    );
                })}                                                      
            </div>

        </div>
    );
}