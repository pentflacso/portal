import Card from '../../library/Card/Card';
import React, { useState } from "react";

export default function CarrouselCards({items}){
    const [currentCard, setCurrentCard] = useState(0);
    return(
        <div style={{position: "relative", height: "900px", width: "100%"}}>   
            {
            items.map((item, key) => (
                <div onClick={() => setCurrentCard(key)} key={key} style={{position: "absolute", width: `calc(100% - (${items.length} - 1) * 13.33%)`, left: key*100, zIndex: key==currentCard ? 100 : items.length - key}}><Card { ...item}  /></div>
                ))
            }                
        </div>  
    );
}



