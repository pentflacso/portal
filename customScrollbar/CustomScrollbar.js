import { useRef, useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';

export default function Layout({ children, ...rest }) {
  
  let $content = useRef();
  let scrollbar = useRef();

  useEffect(() => {

    const contentScroll = $content.current;

    scrollbar.current = SmoothScrollbar.init(contentScroll, {
      damping: 0.075,
      delegateTo: document.querySelector('#content-root'),
    });

    scrollbar.current.setPosition(0, 0);
    scrollbar.current.track.xAxis.element.remove();   

    return () => {      
      if (scrollbar.current) {
        scrollbar.current.destroy();
        scrollbar.current = null;
      }
    };
    
  }, []);


  return (
    <div data-scrollbar ref={$content} {...rest} id="#content-root">
      <div className="container">{children}</div>
    </div>
  );
}