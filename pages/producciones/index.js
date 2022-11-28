import PageHeading from '../../components/library/PageHeading/PageHeading';
import ProductionsNav from '../../components/producciones/ProductionsNav/ProductionsNav';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';

export default function Producciones(){

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Investigación', path: 'investigacion'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    
    return(
    <>
        <PageHeading title="<h1><span>Producciones</span></h1>" margin_bottom_type={1} />
        <ProductionsNav />
        <ArticlesList />
        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}