import { useEffect, useState, Fragment  } from 'react';
import Card from '../Card/Card';
import styles from "./ArticlesNov.module.scss";


export default function ArticlesNov({ data, section }){
 
	//Cantidad de notas a pedir
	const NOTES_TO_FETCH = 12;
	//cantidad de notas a mostrar
	const NOTES_TO_SHOW = NOTES_TO_FETCH / 2;
	
	//Notas que se muestran - desde 0 hasta el indicado
	const [notesToShow, setNotesToShow] = useState(
		data.slice(0, NOTES_TO_SHOW)
	);    

	//Cantidad de notas pedidas
	const [notesOffset, setNotesOffset] = useState(NOTES_TO_FETCH);
	
	//Las 6 notas que se pidieron pero no se mostraron aun.
	const [cachedNotes, setCachedNotes] = useState(
		data.slice(NOTES_TO_SHOW)
	);

	//Estado del boton para mostrar notas
	const [showLoadMore, setShowLoadMore] = useState(true);


    const handleChangePagination = async (e) => {
		e.preventDefault();

		//Verifica hay 6 notas guardadas en el cache pide 12 mas
		if (cachedNotes.length <= NOTES_TO_SHOW) {
			//Une las notas mostradas con las Notas guardadas para mostrar
			setNotesToShow(notesToShow.concat(cachedNotes));

            if (cachedNotes.length < NOTES_TO_SHOW) {
                setShowLoadMore(false);

            }else{
                try{
                    console.log(`https://flacso.pent.org.ar/api/novedades-${NOTES_TO_FETCH + notesOffset}-${notesOffset}.json`);

                    const res = await fetch(`/dataNovedades/novedades-${NOTES_TO_FETCH + notesOffset}-${notesOffset}.json`);

                    const newNotes = await res.json();

                    setCachedNotes(newNotes);
                    setNotesOffset(notesOffset + NOTES_TO_FETCH);

                    if(newNotes.length  == 0 || res.ok == false){
                        setShowLoadMore(false);
                    }
                }
                
                catch(error) {
                    console.log(`Hubo un error => ${error.message}`);
                    setShowLoadMore(false);            
                }
            }
        //Si no las 12 que tiene las divide 6 para notas para mostrar y 6 guarda en el cache                
		} else {
			setNotesToShow(
				notesToShow.concat(cachedNotes.slice(0, NOTES_TO_SHOW))
			);
			setCachedNotes(cachedNotes.slice(NOTES_TO_SHOW));
            console.log("Else cache Note: ", cachedNotes.length, " NOTES_TO_SHOW: ", NOTES_TO_SHOW)
		}     
	};

    return( 
        <div className={styles.wrapper}>

            <div className={styles.containerList}>

                {notesToShow.length !== 0 ?  
                <>
                    <div className={styles.col_left}>
                        {notesToShow.map((data, key) => {
                            return (
                                <Fragment key={key}>                    
                                    { key % 2 === 0 && <Card { ...data}  /> }
                                </Fragment>                                        
                            );
                        })}
                    </div>

                    <div className={styles.col_right}>
                        {notesToShow.map((data, key) => {
                            return (
                                <Fragment key={key}>                    
                                    { key % 2 !== 0 && <Card {...data} /> }
                                </Fragment>                                        
                            );
                        })}
                    </div>
                </>
                : <p>No se encontraron resultados</p>
                }

            </div>

            {showLoadMore && <button type="button" onClick={handleChangePagination} className={styles.show_more}>Ver más {section}</button>} 

        </div>         
    );
}