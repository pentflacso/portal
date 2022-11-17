import PageHeading from '../../components/library/PageHeading/PageHeading';
import NewsNav from '../../components/novedades/NewsNav/NewsNav';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';

export default function Novedades(){

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    
    return(
    <>
        <PageHeading title="<h1>Ofrecemos <span>propuestas de formación</span> para innovar en educación y tecnologías</h1>" margin_bottom_type={0} />
        <NewsNav />
        <ArticlesList />
        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}