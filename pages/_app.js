import {useEffect} from "react";
import TagManager from 'react-gtm-module';
import Script from 'next/script';
import { useRouter } from 'next/router';
import * as fbq from '../lib/fpixel';
import AppContext from '../context/AppContext';
import NavBar from '../components/library/NavBar/NavBar';
import "../styles/globals.scss";
import "../styles/specific.css";

import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/swiperStyles.scss";

export default function App({ Component, pageProps }) {

    useEffect(() => {
        TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_TAGMANAGER_GTM_ID });
    }, []);

    const router = useRouter();
    /*
    useEffect(() => {
        // This pageview only triggers the first time (it's important for Pixel to have real information)
        /*fbq.pageview()*/
    
        /*const handleRouteChange = () => {
          fbq.pageview()
        }*/
    
        /*router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
*/

    return(
        <AppContext>       
            {router.pathname != "/usina/[propuesta]" && <NavBar/> }
            {/* Global Site Code Pixel - Facebook Pixel */}
            {/*<Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    <!-- Meta Pixel Code -->
                    <script>
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${fbq.FB_PIXEL_ID}');
                    fbq('track', 'PageView');
                    </script>
                    <noscript><img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1"
                    /></noscript>
                    <!-- End Meta Pixel Code -->
                `,
                }}
            />   */}
                     
            <Component {...pageProps} />                    
        </AppContext>
    );
}