import { useRef, useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children, ...rest }) {
  
  let $content = useRef();
  let scrollbar = useRef();

  useEffect(() => {

    const contentScroll = $content.current;

    scrollbar.current = SmoothScrollbar.init(contentScroll, {
      damping: 0.075,
      delegateTo: document.querySelector('#scroll-container'),
    });

    scrollbar.current.setPosition(0, 0);
    scrollbar.current.track.xAxis.element.remove();

    ScrollTrigger.scrollerProxy(contentScroll, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.current.scrollTop = value;
        }
        return scrollbar.current.scrollTop;
      }
    });
    
    ScrollTrigger.defaults({ scroller: contentScroll });
    scrollbar.current.addListener(ScrollTrigger.update);    
    
    
    setTimeout(() => {
      // Solo es necesario para corregir la posición del marcador; no es necesario en producción
      if (document.querySelector('.gsap-marker-scroller-start')) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	
        scrollbar.current.addListener(({ offset }) => {  
          gsap.set(markers, { marginTop: -offset.y })
        });
      } 
      }, 1000);      


 /*   return () => {      
       if (scrollbar.current) {
        scrollbar.current.destroy();
        scrollbar.current = null;
      } 
    }; */
    
  }, []);


  return (
    <div data-scrollbar ref={$content} {...rest} id="scroll-container"><main>{children}</main></div>
  );
}