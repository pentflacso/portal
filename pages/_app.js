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
                <NavBar/>
                <Component {...pageProps} />                    
            </AppContext>

        </main>
    </>
    );
}