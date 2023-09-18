import {useEffect} from "react";
import TagManager from 'react-gtm-module';
import AppContext from '../context/AppContext';
import NavBar from '../components/library/NavBar/NavBar';
import "../styles/globals.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/swiperStyles.scss";

export default function App({ Component, pageProps }) {

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-5RTC8HD' });
    }, []);

    return(
        <AppContext>       
            <NavBar/>
            <Component {...pageProps} />                    
        </AppContext>
    );
}