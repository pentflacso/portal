import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer';
import styles from "./baja.module.scss";


export default function Baja() {

  const exploringBtnsData = [
    {title: 'Facebook', path: 'https://www.facebook.com/pentflacso.argentina'},
    {title: 'Twitter', path: 'https://twitter.com/pent_flacso'},
    {title: 'Instagram', path: 'https://www.instagram.com/pentflacso/'},
    {title: 'LinkedIn', path: 'https://ar.linkedin.com/company/pentflacso'},
    {title: 'YouTube', path: 'https://www.youtube.com/user/PENTFLACSO'}           
  ]

  return (
    <MainWrapper> 

      <div className={styles.highlight}>
        <HighlightParagraph title={[{ value: "Has cancelado tu suscripción.<br/> ¡Sigamos en contacto en <span>redes sociales</span>!" }]} />
      </div>  

      <div className={styles.marquee}>
        <TextMarquee data={[{ value: "SEGUINOS" }]} />
      </div>    

      <ExploringBtns data={exploringBtnsData} />

      <Footer />

    </MainWrapper> 
  );
}
