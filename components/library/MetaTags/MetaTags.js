import Head from "next/head";
import { useRouter } from "next/router";


export default function MetaTags({ pageTitle, shareTitle, keywords, description  }){     
    
    const router = useRouter();

    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <meta charSet="UTF-8" />
                <meta name="language" content="es_ES" />         
                <meta name="title" content={shareTitle} />
                <meta name="description" content={description} />
                <meta property="keywords" content={keywords} /> 
                <meta name="author" content="FLACSO PENT" />
                <title>{pageTitle}</title>         
        
                <meta name="twitter:title" content={shareTitle} />
                <meta name="twitter:site" content="@pent_flacso"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@pent_flacso"/>
                <meta name="twitter:image" content=""/>
                <meta name="twitter:description" content={description}/>

                <meta property="og:title" content={shareTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={router.route}/>
                <meta property="og:type" content="article"/>
                <meta property="og:site_name" content="FLACSO | PENT" />
                <meta property="og:locale" content="es_LA"/>
                <meta property="og:image" itemProp="image" content=""/>
            </Head>
            
            <img src='' alt="FLACSO | PENT" style={{display: 'none'}}/>
        </>
    );
}