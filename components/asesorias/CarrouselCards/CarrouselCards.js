import Card from '../../library/Card/Card';
import React, { useState } from "react";
import {NavigatorNext, NavigatorPrev, NavigatorSeparator} from "./CarrouselCardsStyles";

export default function CarrouselCards({items}){
    const [currentCard, setCurrentCard] = useState(0);
    return(
        <>
        <div style={{position: "relative", height: "900px", width: "100%"}}>   
            {
            items.map((item, key) => (
                <div onClick={() => setCurrentCard(key)} key={key} style={{boxShadow: "22px 0px 15px -16px rgba(0,0,0,0.1),-17px 0px 15px -16px rgba(0,0,0,0.1)", position: "absolute", width: `calc(100% - (${items.length} - 1) * 13.33%)`, left: key*100, zIndex: key==currentCard ? 100 : items.length - key}}><Card { ...item} /></div>
                ))
            }                
        </div>  
        <div style={NavigatorSeparator}> 
        <div className="NavigatorPrev" style={NavigatorPrev} onClick={() => setCurrentCard(currentCard == 0 ? items.length -1 : currentCard - 1)}></div>  
        <div className="NavigatorNext" style={NavigatorNext} onClick={() => setCurrentCard(currentCard == items.length - 1 ? 0 : currentCard + 1)}></div>
        </div>
        </>
    );
}



