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

  const queryArticlesKeys = ["lead", "title", "description"];

  const [ articlesFiltersStatus, setArticlesFiltersStatus ] = useState({ hashtag: 0, author: 0, query: 0 });

  const [ articlesFiltersCounter, setArticlesFiltersCounter] = useState(0);

  const [ windowSize, setWindowSize ] = useState(0);

  const [ isLoading, setLoadingState ] = useState(false);

  const [ menuState, setMenuState ] = useState(false);

  const [ menuBtnAnimation, setMenuBtnAnimation ] = useState(false);

  const [ currentRoute, setCurrentRoute] = useState('');
    
  const [ advancedFilterStatus, setAdvancedFilterStatus ] = useState(false);

  const [ announcementStatus, setAnnouncementStatus ] = useState();
  
  
  const [ dataStrip, setDataStrip ] = useState();  
  
  const menuOverlay = useRef();  

  function changeMenuState(value) {
    menuState !== value && setMenuState(value);
  }

  useEffect(() =>{   
    setCurrentRoute(router.route);
  }, [router.route]);

  useEffect(() =>{   
    router.events.on("routeChangeComplete", () => {
      setLoadingState(false);
    });
  }, []);  

  
  useEffect(() =>{   
    setArticlesFiltersStatus({ ...articlesFiltersStatus, ["hashtag"] : currentArticleHashtag !== 'all' ? 1 : 0, ["author"] : currentArticleAuthor !== 'all' ? 1 : 0, ["query"] : queryArticles !== '' ? 1 : 0  });   
  }, [currentArticleHashtag, currentArticleAuthor, queryArticles]);

  useEffect(() =>{   
    setArticlesFiltersCounter(articlesFiltersStatus.hashtag + articlesFiltersStatus.author + articlesFiltersStatus.query);  
  }, [articlesFiltersStatus]);


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
    } else if(url === currentRoute){
        handleClose();
    } else{
        setLoadingState(true);        
        setTimeout(() => {
            handleClose();
        }, 300);  
    }           
  }

  const goToPage = () => {
    if(currentRoute !== '/'){   
      setLoadingState(true);            
    }      
  }


  function normalizeText(text) {
    const sustitutions = {
      àáâãäå: "a",
      ÀÁÂÃÄÅ: "A",
      èéêë: "e",
      ÈÉÊË: "E",
      ìíîï: "i",
      ÌÍÎÏ: "I",
      òóôõö: "o",
      ÒÓÔÕÖ: "O",
      ùúûü: "u",
      ÙÚÛÜ: "U",
      ýÿ: "y",
      ÝŸ: "Y",
      ß: "ss",
      ñ: "n",
      Ñ: "N"
    };

    function getLetterReplacement(letter, replacements) {
      const findKey = Object.keys(replacements).reduce(
        (origin, item) => (item.includes(letter) ? item : origin),
        false
      );
      return findKey !== false ? replacements[findKey] : letter;
    }

    return text
      .split("")
      .map((letter) => getLetterReplacement(letter, sustitutions))
      .join("")
      .replace(/\s+/g, '')
      .toLowerCase();
  }


  //Filtra dataArticles, a partir de lo que el usuario escribe en el input que se encuentra en ProductionsAdvancedFilters

  const searchInArticles = (dataArticles) => { 
    return dataArticles.filter( (item) => queryArticlesKeys.some(key => normalizeText(item[key]).includes(normalizeText(queryArticles))) );         
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);    
      window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);            
    });    
  }, []);

  return (
    <AppContext.Provider value={{ dataArticles, setDataArticles, hashtagsArticlesList, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, queryArticles, setQueryArticles, searchInArticles, articlesFiltersCounter, windowSize, isLoading, setLoadingState, currentRoute, setCurrentRoute, menuBtnAnimation, advancedFilterStatus, setAdvancedFilterStatus, changePage, handleClose, menuOverlay, changeMenuState, menuState, setMenuState, goToPage, announcementStatus, setAnnouncementStatus, dataStrip, setDataStrip }}> {children} </AppContext.Provider>
  );
}