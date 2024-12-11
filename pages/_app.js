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
            {router.pathname != "/usina" && <NavBar/>
            && router.pathname != "/usina/[propuesta]" && <NavBar/>
            && router.pathname != "/certificacion-ia" && <NavBar/>}            
                     
            <Component {...pageProps} />                    
        </AppContext>
    );
}