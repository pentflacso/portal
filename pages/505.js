import MainWrapper from '../components/library/MainWrapper/MainWrapper';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
import PageHeading from '../components/library/PageHeading/PageHeading';
import HighlightParagraph from '../components/library/HighlightParagraph/HighlightParagraph';
import Footer from '../components/library/Footer/Footer';
import styles from "./505.module.scss";


export default function Error505() {
  const exploringBtnsData = [
    {title: 'Propuestas de formación', path: 'formacion'},
    {title: 'Asesorías y soluciones a medida ', path: 'asesorias'},
    {title: 'Investigación y divulgación', path: 'investigacion'}        
  ]

  return (
    <MainWrapper> 
<div className={styles.page_heading}>
        <PageHeading title="Algo salió mal.<br data-contex='desk'> Por favor, <span>intentá más tarde.</span>" />
      </div>  
      <div className={styles.marquee}>
        <TextMarquee data={[{ value: "Error" }]} />
      </div>    
      
      <Footer />

    </MainWrapper> 
  );
}
