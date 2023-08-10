import MainWrapper from '../components/library/MainWrapper/MainWrapper';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
import PageHeading from '../components/library/PageHeading/PageHeading';
import ExploringBtns from '../components/library/ExploringBtns/ExploringBtns';
import Footer from '../components/library/Footer/Footer';
import styles from "./404.module.scss";


export default function Error404() {

  const exploringBtnsData = [
    {title: 'Propuestas de formación', path: 'formacion'},
    {title: 'Asesorías y soluciones a medida ', path: 'asesorias'},
    {title: 'Investigación y divulgación', path: 'investigacion'}        
  ]

  return (
    <MainWrapper> 

      <div className={styles.page_heading}>
        <PageHeading title="¡Ouch! La página que estas buscando<br data-contex='desk'> actualmente <span>no está disponible.</span>" />
      </div>  

      <div className={styles.marquee}>
        <TextMarquee data={[{ value: "Seguir explorando" }]} />
      </div>          

      <ExploringBtns data={exploringBtnsData} />

      <Footer />

    </MainWrapper> 
  );
}
