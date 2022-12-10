import React, { useEffect, useState } from 'react';

export default function ArticlesList(){
    const [Articles, setArticles] = useState([]);
    
    const getArticles = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
        console.log(data);
        
        setArticles(data);

    };


    useEffect(() => {
      getArticles();
    }, []);


    return(
        <>
            <h3>ArticlesList</h3>
   
        </>          
    );
}