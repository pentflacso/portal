import { useAppContext } from '../../../context/AppContext';
import { useEffect, useState, Fragment  } from 'react';
import Card from '../Card/Card';
import styles from "./ArticlesNov.module.scss";


export default function ArticlesNov({ data, category, totalData }){

    const { windowSize } = useAppContext();

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
	
    //Si se cambia la categoria reseteo informacion
    useEffect(() =>{
        setNotesToShow(data.slice(0, NOTES_TO_SHOW));        
        setNotesOffset(NOTES_TO_FETCH);
        setCachedNotes(data.slice(NOTES_TO_SHOW));

        data.length != 0 ? setShowLoadMore(true): setShowLoadMore(false) ;

    }, [category])

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

                    const res = await fetch(`https://redaccion.pent.org.ar/data/news/${category ? category : "all"}/${NOTES_TO_FETCH + notesOffset}/${notesOffset}`);

                    if (res.status === 500) {
                        // Redirige a la página 505.js en caso de error del servidor
                        return {
                            redirect: {
                              destination: '/505',
                              permanent: false, // Puedes cambiarlo a true si deseas un redireccionamiento permanente (301)
                            }
                          }
                      } else if (res.status === 400 || data.status == false){
                        console.log("entre");
                        return {
                            redirect: {
                              destination: '/404',
                              permanent: false, // Puedes cambiarlo a true si deseas un redireccionamiento permanente (301)
                            }
                          }        
                      }


                    const {news} = await res.json()
                    
                    const newNotes = news;

                    setCachedNotes(newNotes);
                    setNotesOffset(notesOffset + NOTES_TO_FETCH);

                    if(newNotes.length  == 0 || res.ok == false){
                        setShowLoadMore(false);
                    }
                }
                
                catch(error) {
                    //console.log(`Hubo un error => ${error.message}`);
                    setShowLoadMore(false);            
                }
            }
        //Si no las 12 que tiene las divide 6 para notas para mostrar y 6 guarda en el cache                
		} else {
			setNotesToShow(
				notesToShow.concat(cachedNotes.slice(0, NOTES_TO_SHOW))
			);
			setCachedNotes(cachedNotes.slice(NOTES_TO_SHOW));
		}     
	};

    return( 
        <div className={styles.wrapper}>

            <div className={styles.containerList}>

            {windowSize >= 1025 ?
            <>
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
            </>
            :
            <>
                {notesToShow.length !== 0 ?
                    <div className={styles.content}>
                        {notesToShow.map((data, key) => {
                            return (
                                <Fragment key={key}>                    
                                   <Card { ...data}/>
                                </Fragment>                                        
                            );
                        })}
                    </div>
                : <p>No se encontraron resultados</p>
                }
            </>
            }

            </div>

            {showLoadMore && <button type="button" onClick={handleChangePagination} className={styles.show_more}>Ver más novedades</button>} 

        </div>         
    );
}