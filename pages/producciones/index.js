import PageHeading from '../../components/library/PageHeading/PageHeading';
import ProductionsNav from '../../components/producciones/ProductionsNav/ProductionsNav';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';

export default function Producciones(){

    const dataArticles = [
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        },
        {
            category: "Ponencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        }, 
        {
            category: "Conferencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        }, 
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        },
        {
            category: "Ponencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        }, 
        {
            category: "Conferencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        },  
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        },
        {
            category: "Ponencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        }, 
        {
            category: "Conferencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        }, 
        {
            category: "Capítulo de libro",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        },
        {
            category: "Ponencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        }, 
        {
            category: "Conferencia",
            title: "Enseñar hoy. Niños, niñas y jóvenes protagonistas: la tecnología como escenario.",
            description: "Descripción breve, esta palabra, como sabrán muchos de ustedes, permite hacer referencia a algo de extensión o duración corta.",
            authors: "Christian Milillo",
            hashtags: [ "#EntornosDigitales" ,"#Docencia" , "#EducaciónEnLínea" ]
        },  
    ]

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Investigación', path: 'investigacion'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    
    return(
    <>
        <PageHeading title="<h1><span>Producciones</span></h1>" margin_bottom_type={1} />
        <ProductionsNav />
       
        <ArticlesList data={dataArticles} dataLimit={dataArticles.slice(0,3)} />
        

        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}