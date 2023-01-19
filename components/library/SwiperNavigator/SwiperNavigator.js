import {NavigatorNext, NavigatorPrev, NavigatorSeparator} from "./swiperNavigatorStyles";
export const SwiperNavigatorClasses={
    nextEl: ".NavigatorNext",
    prevEl: ".NavigatorPrev"
  }
export function SwiperNavigator(){
    return(
        <div style={NavigatorSeparator}> 
<div className="NavigatorPrev" style={NavigatorPrev}></div>  
<div className="NavigatorNext" style={NavigatorNext}></div>
</div> 
    );
}

