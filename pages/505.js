import MainWrapper from '../components/library/MainWrapper/MainWrapper';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
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

      <div className={styles.marquee}>
        <TextMarquee data={[{ value: "505 Server-side error occurred" }]} />
      </div>    

      <Footer />

    </MainWrapper> 
  );
}
