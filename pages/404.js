import MainWrapper from '../components/library/MainWrapper/MainWrapper';
import TextMarquee from '../components/library/TextMarquee/TextMarquee';
import HighlightParagraph from '../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../components/library/ExploringBtns/ExploringBtns';
import Footer from '../components/library/Footer/Footer';
import styles from "./404.module.scss";


export default function Error404() {
  const exploringBtnsData = [
    {title: 'Portada', path: ''},
    {title: 'Formación', path: 'formacion'},
    {title: 'Asesorías', path: 'asesorias'},
    {title: 'Producciones', path: 'producciones'},
    {title: 'Investigación', path: 'investigacion'},
    {title: 'Novedades', path: 'novedades'},
    {title: 'Equipo', path: 'equipo'}             
  ]

  return (
    <MainWrapper> 

      <div className={styles.marquee}>
        <TextMarquee data={[{ value: "Error 404" }]} />
      </div>


      <div className={styles.highlight}>
        <HighlightParagraph title={[{ value: "El contenido que estás buscando ya no está en esta ubicación. Te invitamos a <span>seguir explorando:</span>" }]} />
      </div>


      

      <ExploringBtns data={exploringBtnsData} />

      <Footer />

    </MainWrapper> 
  );
}
