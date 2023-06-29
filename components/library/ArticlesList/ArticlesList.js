import { useAppContext } from '../../../context/AppContext';
import { useEffect, useState, Fragment  } from 'react';
import Card from '../Card/Card';
import styles from "./ArticlesList.module.scss";


export default function ArticlesList({ data }){

    const { windowSize } = useAppContext();

    //Data a utilizar
    const [dataToUse, setDataToUse] = useState(data);
    //Data limitada por cantidad a mostrar 
    const [dataLimit, setDataLimit] = useState(data.slice(0,6));
    //Contador
    const [itemCount, setItemCount] = useState(6);    
    //Estado del boton de carga de data
    const [availablePlusData, setAvailablePlusData] = useState(true);


    //Al cambiar la data actualiza los siguientes estados
    useEffect(() => {
        setDataToUse(data)
        setDataLimit(data.slice(0,6))
        setItemCount(6)
    }, [data]); 


    //Función botón de carga de data
    const handleChangePagination = () => {
        setItemCount(itemCount + 6);
    };


    //Cada vez que el contador o la data a utilizar cambia, se ejecuta el siguiente condicional
    useEffect(() => {       
        if(dataToUse.length >= 7){
            setAvailablePlusData(true)
            setDataLimit(dataToUse.slice(0, itemCount))
        } else if(dataToUse.length < itemCount){
            setAvailablePlusData(false)
        }

        dataLimit.length < itemCount && setAvailablePlusData(false)
        
    }, [itemCount, dataToUse]);  


    return( 
        <div className={styles.wrapper}>

            <div className={styles.containerList}>

            {windowSize >= 1025 ?
            <>
                {dataLimit.length !== 0 ?  
                <>
                    <div className={styles.col_left}>
                        {dataLimit.map((data, i) => {
                            return (
                                <Fragment key={i}>                    
                                    { i % 2 === 0 && <Card { ...data} /> }
                                </Fragment>                                        
                            );
                        })}
                    </div>

                    <div className={styles.col_right}>
                        {dataLimit.map((data, i) => {
                            return (
                                <Fragment key={i}>                    
                                    { i % 2 !== 0 && <Card {...data} /> }
                                </Fragment>                                        
                            );
                        })}
                    </div>
                </>
                : <p className={styles.no_data}>No se encontraron resultados</p>
                }
            </>
            :
            <>
                {dataLimit.length !== 0 ?  
                    <div className={styles.content}>
                        {dataLimit.map((data, i) => {
                            return (
                                <Fragment key={i}>                    
                                    <Card { ...data}/>
                                </Fragment>                                        
                            );
                        })}
                    </div>
                : <p className={styles.no_data}>No se encontraron resultados</p>
                }
            </>
            }

            </div>

            {availablePlusData && <button type="button" onClick={() => handleChangePagination()} className={styles.show_more}>Ver más producciones</button>} 

        </div>         
    );
}