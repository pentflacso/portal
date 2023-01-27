import Marquee from "react-fast-marquee";
import styles from "./BrandsMarquee.module.scss";



export default function BrandsMarquee({ partners }){

const middleIndex = Math.floor(partners.length / 2);
const leftArray = partners.slice(0, middleIndex);
const rightArray = partners.slice(middleIndex);
    
    return(
    
    <>
      <Marquee speed="100" gradientWidth="0" direction="right">
        {leftArray.map((item, index) => (
          <img key={index} src={item.img}/>
        ))}
      </Marquee>
      <Marquee speed="100" gradientWidth="0" direction="left">
        {rightArray.map((item, index) => (
            <img key={index} src={item.img}/>
        ))}
      </Marquee>
    </>
        
    );
}