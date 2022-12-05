import PageHeading from '../../components/library/PageHeading/PageHeading';
import NewsNav from '../../components/novedades/NewsNav/NewsNav';
import NewsList from '../../components/novedades/NewsList/NewsList';
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
        <PageHeading title="<h1><span>Novedades</span></h1>" margin_bottom_type={0} />
        <NewsNav />
        <NewsList />
        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}