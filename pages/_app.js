// import AppContext from '../context/AppContext';
import CustomScrollbar from '../customScrollbar/CustomScrollbar';
import NavBar from '../components/library/NavBar/NavBar';
import Footer from '../components/library/Footer/Footer';
import "../styles/globals.scss";
import 'swiper/css';
import 'swiper/css/navigation';

export default function App({ Component, pageProps }) {
    return(
        <main className="main-container">
            {/* <AppContext> */}        
                <NavBar />
                <CustomScrollbar>             
                    <Component {...pageProps} />                    
                    <Footer />
                </CustomScrollbar>
            {/* </AppContext> */}
        </main>
    );
}