import AppContext from '../context/AppContext';
import Head from "next/head";
import NavBar from '../components/library/NavBar/NavBar';
import "../styles/globals.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import "../styles/swiperStyles.scss";

export default function App({ Component, pageProps }) {

    return(
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <title>FLACSO | PENT</title>
        </Head>

        <main className="main-container">

            <AppContext>       
                <NavBar />
                <Component {...pageProps} />                    
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