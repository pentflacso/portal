import { useState } from 'react';
import { useRouter } from "next/router";
import styles from "./SectionSelector.module.scss";

export default function SectionSelector(){

    const MemberData = [
        {
            id: 'fabio-t',
            cta_title: 'Formate con el PENT',
            picture: 'fabio_tarasow.png',
            description: 'En nuestras propuestas se <strong>aprende haciendo</strong> y <strong>co-creando</strong> con colegas de otros países. Ofrecemos cursos, talleres, diplomaturas superiores y carreras de posgrado para formar profesionales — Fabio Tarasow, director del PENT.',
            linked_path: '/formacion',
        },
        {
            id: 'gisela-s',
            cta_title: 'Trabajemos en conjunto',
            picture: 'gisela_schwartzman.png',
            description: 'En nuestras propuestas se <strong>aprende haciendo</strong> y <strong>co-creando</strong> con colegas de otros países. Ofrecemos cursos, talleres, diplomaturas superiores y carreras de posgrado para formar profesionales — Fabio Tarasow, director del PENT.',   
            linked_path: '/asesorias',        
        },
        {
            id: 'monica-t',
            cta_title: 'Explorá producciones',
            picture: 'monica_trech.png',
            description: 'En nuestras propuestas se <strong>aprende haciendo</strong> y <strong>co-creando</strong> con colegas de otros países. Ofrecemos cursos, talleres, diplomaturas superiores y carreras de posgrado para formar profesionales — Fabio Tarasow, director del PENT.',  
            linked_path: '/producciones',        
        }   
    ]

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
                    {MemberData.map((data) => {
                        return (
                            <button onClick={ () => changeTitleStatus(`${data.id}`)} className={titleSelected === `${data.id}` ? `${styles.active}` : `${styles.inactive}`} key={data.id}><span />{data.cta_title}</button>
                        );
                    })}
                </div>
            </div>                        

            <div className={styles.imagen_docente}>
                {MemberData.map((data) => {
                    return (
                        <img src={`/assets/images/${data.picture}`} alt={data.picture} className={titleSelected === data.id ? `${styles.visible} ${styles.slide_docente}` : ''} key={data.id} />              
                    );
                })}
                <span />
            </div>

            <div className={styles.texto_docente}>
                {MemberData.map((data) => {
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