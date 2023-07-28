import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer';
import styles from "./suscripcion.module.scss";


export default function Suscripcion() {

  const exploringBtnsData = [
    {title: 'Propuestas de formación', path: 'formacion'},
    {title: 'Asesorías y soluciones a medida ', path: 'asesorias'},
    {title: 'Investigación y divulgación', path: 'investigacion'}        
  ]

  return (
    <MainWrapper> 

      <div className={styles.marquee}>
        <TextMarquee data={[{ value: "Gracias" }]} />
      </div>

      <div className={styles.highlight}>
        <HighlightParagraph title={[{ value: "Te suscribiste al boletín y novedades del PENT, pronto recibirás novedades. Te invitamos a <span>seguir explorando</span>" }]} />
      </div>      

      <ExploringBtns data={exploringBtnsData} />

      <Footer />

    </MainWrapper> 
  );
}
