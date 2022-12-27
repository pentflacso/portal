import React, { useContext, useState } from 'react';

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }) {   

  const [dataArticles, setDataArticles] = useState();
  const [hashtagsArticlesList, setHashtagsArticlesList] = useState([]);
  const [currentArticleHashtag, setCurrentArticleHashtag] = useState('all');
  const [authorsArticlesList, setAuthorsArticlesList] = useState([]);
  const [currentArticleAuthor, setCurrentArticleAuthor] = useState('all');
  const [queryArticles, setQueryArticles] = useState('');
  const queryArticlesKeys = ["category", "title", "description"]

  const searchInArticles = (dataArticles) => { 
    return dataArticles.filter( (item) => queryArticlesKeys.some(key => item[key].toLowerCase().includes(queryArticles.toLowerCase())) );         
  };


  return (
    <AppContext.Provider value={{ dataArticles, setDataArticles, hashtagsArticlesList, setHashtagsArticlesList, currentArticleHashtag, setCurrentArticleHashtag, authorsArticlesList, setAuthorsArticlesList, currentArticleAuthor, setCurrentArticleAuthor, queryArticles, setQueryArticles, searchInArticles }}> {children} </AppContext.Provider>
  );
}