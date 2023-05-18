import React, { useContext, useRef, useEffect, useState } from 'react';
import { gsap, Power1 } from 'gsap';
import { useRouter } from "next/router";

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }) {  
  
  const router = useRouter();

  //Guarda la data a utilizar
  const [dataArticles, setDataArticles] = useState();
  //Guarda el listado total de Hastags
  const [hashtagsArticlesList, setHashtagsArticlesList] = useState([]);
  //Guarda el nombre del hashtag seleccionado
  const [currentArticleHashtag, setCurrentArticleHashtag] = useState('all');
  //Guarda el listado total de autores
  const [authorsArticlesList, setAuthorsArticlesList] = useState([]);
  //Guarda el nombre del autor seleccionado
  const [currentArticleAuthor, setCurrentArticleAuthor] = useState('all');
  //Guarda lo que el usuario escribe en la barra de búsqueda
  const [queryArticles, setQueryArticles] = useState('');
  
  const queryArticlesKeys = ["lead", "title", "description"]

  const [ windowSize, setWindowSize ] = useState(0);

  const [isLoading, setLoadingState] = useState(false);

  const [ menuState, setMenuState ] = useState(false);

  const [ menuBtnAnimation, setMenuBtnAnimation ] = useState(false);

  const [ currentRoute, setCurrentRoute] = useState('');

  const menuOverlay = useRef();  

  function changeMenuState(value) {
    menuState !== value && setMenuState(value);
  }

  useEffect(() =>{   
    setCurrentRoute(router.route);
  }, [router]);

  const handleClose = () => {   
    if(menuOverlay !== undefined){
      gsap.to(menuOverlay.current, {
        duration: .3,
        opacity: 0,            
        ease: Power1.easeInOut
      });
    }    
    setTimeout(() => {
        setMenuBtnAnimation(true)
        changeMenuState(false)
    }, 300);       
  }

  const changePage = (url) => {   
    if(url === '/' && url !== currentRoute){
        setLoadingState(true);        
        setTimeout(() => {
            setLoadingState(false);
        }, 1600); 
    } else if(url === currentRoute){
        handleClose();
    } else{
        setLoadingState(true);        
        setTimeout(() => {
            setLoadingState(false);
        }, 1600); 
        setTimeout(() => {
            handleClose();
        }, 300);  
    }           
  }

  const blurToPage = () => {
    if(currentRoute !== '/'){   
      setLoadingState(true);        
      setTimeout(() => {
        setLoadingState(false);
      }, 1600);     
    }      
  }


  //Filtra dataArticles, a partir de lo que el usuario escribe en el input que se encuentra en ProductionsAdvancedFilters

  const searchInArticles = (dataArticles) => { 
    return dataArticles.filter( (item) => queryArticlesKeys.some(key => item[key].toLowerCase().includes(queryArticles.toLowerCase())) );         
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);    
      window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);            
    });    
  }, []);

  return (
    <AppContext.Provider value={{ dataArticles, setDataArticles, hashtagsArticlesList, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, queryArticles, setQueryArticles, searchInArticles, windowSize, isLoading, setLoadingState, currentRoute, setCurrentRoute, menuBtnAnimation, changePage, handleClose, menuOverlay, changeMenuState, menuState, setMenuState, blurToPage }}> {children} </AppContext.Provider>
  );
}