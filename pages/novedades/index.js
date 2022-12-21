import PageHeading from '../../components/library/PageHeading/PageHeading';
import NewsNav from '../../components/novedades/NewsNav/NewsNav';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';

export default function Novedades(){

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
    ]

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    
    return(
    <>
        <PageHeading title="<h1><span>Novedades</span></h1>" margin_bottom_type={0} />
        <NewsNav />

        <ArticlesList data={dataArticles} dataLimit={dataArticles.slice(0,3)} />

        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}