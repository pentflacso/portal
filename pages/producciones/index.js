import PageHeading from '../../components/library/PageHeading/PageHeading';
import ProductionsNav from '../../components/producciones/ProductionsNav/ProductionsNav';
import ArticlesList from '../../components/producciones/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';

export default function Producciones(){

    // Aquí colocamos el array de objetos (articlesData) con la data que irá al componente ArticlesList

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Investigación', path: 'investigacion'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    
    return(
    <>
        <PageHeading title="<h1><span>Producciones</span></h1>" margin_bottom_type={1} />
        <ProductionsNav />

        {/* Enviar articlesData como propiedad "data" al componente ArticlesList */}
        <ArticlesList />

        <TextMarquee />
        hola
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}