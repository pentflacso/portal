import AppContext from '../context/AppContext';
import NavBar from '../components/library/NavBar/NavBar';
import "../styles/globals.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/swiperStyles.scss";

export default function App({ Component, pageProps }) {

    return(
        <AppContext>       
            <NavBar/>
            <Component {...pageProps} />                    
        </AppContext>
    );
}