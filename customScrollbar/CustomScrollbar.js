import { useRef, useEffect } from 'react';
import { useRouter } from "next/router";
import { useAppContext } from '../context/AppContext';
import SmoothScrollbar from 'smooth-scrollbar';
import { gsap, Circ } from 'gsap';
import ScrollToPlugin from "../node_modules/gsap/ScrollToPlugin";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import $ from "jquery";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Layout({ children, ...rest }) {
  
  let $content = useRef();
  let scrollbar = useRef();

  const router = useRouter();

  const { advancedFilterStatus } = useAppContext();

  useEffect(() => {

    const contentScroll = $content.current;

    scrollbar.current = SmoothScrollbar.init(contentScroll, {
      damping: 0.06,
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

  useEffect(() => {
    // Esta función se ejecutará cada vez que cambie la ruta
    const handleRouteChange = (url) => {
      // Aquí puedes realizar las acciones que desees al cambiar la ruta
      scrollbar.current.setPosition(0, 0);
      // Por ejemplo, puedes realizar una llamada a una API o actualizar el estado de tu componente.
    };
    
    // Suscribirse a los cambios de ruta
    router.events.on('routeChangeComplete', handleRouteChange);

    // Es importante cancelar la suscripción cuando el componente se desmonte
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


  useEffect(() => {
    if(router.route === '/producciones'){
      
      function scrollToNav(e) {
        const btnId = e.target.dataset.id;
        
        if(btnId !== undefined && btnId.includes('triggerScrollTo')){
          gsap.to(scrollbar.current, {
            scrollTo: {y: $("#productions-nav").offset().top + scrollbar.current.offset.y + 1},
            duration: 0.8,
            ease: Circ.easeOut
          });          
        } 
      } 

      $(".filters").on('click', scrollToNav);   
      
      return () => {
        $(".filters").off();
      };
    }
  }, [advancedFilterStatus]);

  useEffect(() => {
    const hash = router.asPath.split('#')[1];
    if (hash) {
      const element = document.getElementsByName(hash)[0];
      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + scrollbar.current.scrollTop - 100;

          scrollbar.current.scrollTo(0, elementPosition, 600);
        }, 0); // El timeout puede ser ajustado según necesidad
      }
    }
  }, [router.asPath]); // Escucha los cambios en la ruta, incluyendo el hash

  return (
    <div data-scrollbar ref={$content} {...rest} id="scroll-container"><main className='main-container'>{children}</main></div>
  );
}