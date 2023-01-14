import PageHeading from '../../components/library/PageHeading/PageHeading';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import styles from "./investigacion.module.scss";

export default function Investigacion(){

    const investigacionFeatures = [
        {img: '/assets/images/icon_investigacion_features_1.svg', description: 'Abordamos la educación en la cultura digital desde diferentes perspectivas.'},
        {img: '/assets/images/icon_investigacion_features_2.svg', description: 'Trabajamos en proyectos de investigación dentro del ámbito académico.'}, {img: '/assets/images/icon_investigacion_features_3.svg', description: 'Experimentamos con tecnologías, metodologías y plataformas digitales.'},
        {img: '/assets/images/icon_investigacion_features_4.svg', description: 'Divulgamos conocimiento científico, desarrollamos y transferimos saberes.'}
    ]

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]

    return(
    <>
        <PageHeading title="<h1>Nos apasiona <span>investigar y compartir</span> conocimiento con la comunidad</h1>" margin_bottom_type={0} />

        <KeysBox data={investigacionFeatures} />

        <div className={styles.marquee_1}>
            <TextMarquee data="LÍNEAS DE INVESTIGACIÓN&nbsp;—&nbsp;" />
        </div>

        <ThemesAccordion />
        
        <div className={styles.marquee_1}>
            <TextMarquee data="PROYECTOS&nbsp;—&nbsp;PROYECTOS&nbsp;—&nbsp;" />
        </div>

        <div className={`${styles.carrousel_projects} swiper-cards`}>
            <Swiper
                modules={[Navigation, FreeMode]}
                spaceBetween={0}
                slidesPerView={"auto"}
                navigation   
                freeMode={true}   
                grabCursor={true} 
            >     
                <SwiperSlide>
                    <article className={styles.card}>
                        <p>En proceso</p>
                        <h5>Rediseñando aplicaciones educativas para la primera infancia</h5>
                        <p>Junto a la Universidad de VIC, Universidad de Oviedo, Universidad de Barcelona, Fundación de la Universidad de Oberta, Universidad de Málaga y Universidad Federal de Santa Catarina.</p>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Más información</a>
                    </article>
                </SwiperSlide>        
                <SwiperSlide>
                    <article className={styles.card}>
                        <p>En proceso</p>
                        <h5>Rediseñando aplicaciones educativas para la primera infancia</h5>
                        <p>Junto a la Universidad de VIC, Universidad de Oviedo, Universidad de Barcelona, Fundación de la Universidad de Oberta, Universidad de Málaga y Universidad Federal de Santa Catarina.</p>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Más información</a>
                    </article>
                </SwiperSlide> 
                <SwiperSlide>
                    <article className={styles.card}>
                        <p>En proceso</p>
                        <h5>Rediseñando aplicaciones educativas para la primera infancia</h5>
                        <p>Junto a la Universidad de VIC, Universidad de Oviedo, Universidad de Barcelona, Fundación de la Universidad de Oberta, Universidad de Málaga y Universidad Federal de Santa Catarina.</p>
                        <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Más información</a>
                    </article>
                </SwiperSlide>                         
            </Swiper> 
        </div>

        <div className={styles.marquee_1}>
            <TextMarquee data="COMPARTIMOS&nbsp;—&nbsp;" />
        </div>

        <div className={styles.highlight_paragraph}>
            <HighlightParagraph title="<span>Divulgamos conocimiento</span> a través de formación de posgrado, contenido abierto y proyectos de asesoría." />
        </div>
        
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}