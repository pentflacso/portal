import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }) {   

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
    <AppContext.Provider value={{ dataArticles, setDataArticles, hashtagsArticlesList, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, queryArticles, setQueryArticles, searchInArticles, windowSize }}> {children} </AppContext.Provider>
  );
}