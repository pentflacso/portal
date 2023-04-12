import { useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import Head from "next/head";
import CustomScrollbar from '../customScrollbar/CustomScrollbar';
import NavBar from '../components/library/NavBar/NavBar';
import Footer from '../components/library/Footer/Footer';
import "../styles/globals.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/swiperStyles.scss";

export default function App({ Component, pageProps }) {

    const [ windowSize, setWindowSize ] = useState(0);

    useEffect(() => {
        setWindowSize(window.innerWidth);    
        window.addEventListener("resize", () => {
          setWindowSize(window.innerWidth);            
        } );    
    }, []);


    return(
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <title>FLACSO | PENT</title>
        </Head>

        <main className="main-container">
            <AppContext>       
                <NavBar />
                {windowSize >= 1025 ?
                <>
                    <CustomScrollbar>            
                        <Component {...pageProps} />                    
                        <Footer />
                    </CustomScrollbar>
                </>
                :
                <>
                    <Component {...pageProps} />                    
                    <Footer />
                </>
                }
            </AppContext>

            <div className="cursor_leer">
                <div className="circle"><span>Leer</span></div>
            </div>

            <div className="cursor_ver">
                <div className="circle"><span>Ver</span></div>
            </div>

            <div className="cursor_deslizar">
                <div className="circle"><span>Deslizar</span></div>
            </div>

            <div className="cursor_conocer">
                <div className="circle"><span>Conocer</span></div>
            </div>

            <div className="cursor_dot">
                <div className="circle" />
            </div>

        </main>
    </>
    );
}