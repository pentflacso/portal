import PageHeading from '../../components/library/PageHeading/PageHeading';
import LeafsItem from '../../components/asesorias/LeafsItem/LeafsItem';
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import BrandsMarquee from '../../components/asesorias/BrandsMarquee/BrandsMarquee';
import Quotes from '../../components/library/Quotes/Quotes';
import ParagraphAndButton from '../../components/asesorias/ParagraphAndButton/ParagraphAndButton';
import styles from "./asesorias.module.scss";

export default function Asesorias(){

    const keyFeatures = [
        {img: '/assets/images/icon_asesorias_proceso_1.svg', description: 'Definimos la estrategia pedagógica según las necesidades.'},
        {img: '/assets/images/icon_asesorias_proceso_2.svg', description: 'Creamos contenidos, recursos educativos y materiales didácticos.'}, {img: '/assets/images/icon_asesorias_proceso_3.svg', description: 'Diseñamos y construimos entornos virtuales, sitios y plataformas, LMS y CMS.'},
        {img: '/assets/images/icon_asesorias_proceso_4.svg', description: 'Brindamos soporte técnico, capacitamos y acompañamos.'}
    ]

    return(
    <>
        <PageHeading title="<h1>Creamos <span>experiencias de formación</span> únicas, a la medida de cada organización</h1>" margin_bottom_type={0} />

        <LeafsItem />

        <div className={styles.marquee_1}>
            <TextMarquee data="SABEMOS HACER&nbsp;—&nbsp;" />
        </div>

        <div className={styles.highlight_paragraph}>
            <HighlightParagraph title="Nuestro <span>equipo multidisciplinario</span> trabaja con un enfoque tecnopedagógico desde la definición de los objetivos hasta el último pixel, en conjunto con cada institución." />
        </div>

        <KeysBox data={keyFeatures} />

        <div className={styles.marquee_1}>
            <TextMarquee data="PROYECTOS&nbsp;—&nbsp;" />
        </div>

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
                    <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                    <h5>Galeno Aprender +</h5>                    
                </article>  
            </SwiperSlide> 
            <SwiperSlide>
                <article className={styles.card}>
                    <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                    <h5>utopía FBB</h5>                    
                </article>  
            </SwiperSlide> 
            <SwiperSlide>
                <article className={styles.card}>
                    <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                    <h5>Galeno Aprender +</h5>                    
                </article>         
            </SwiperSlide>   
            <SwiperSlide>
                <article className={styles.card}>
                    <img src="/assets/images/img_formacion_demo_1.jpg" alt="foto posgrado" />
                    <h5>Galeno Aprender +</h5>                    
                </article>         
            </SwiperSlide> 
             
        </Swiper>

        <div className={styles.marquee_1}>
            <TextMarquee data="CLIENTES&nbsp;—&nbsp;ALIANZAS&nbsp;—&nbsp;" />
        </div>

        <div className={styles.highlight_paragraph}>
            <HighlightParagraph title="Hemos trabajado con <span>más de 50</span> instituciones, empresas, organismos y organizaciones en toda Latinoamérica." />
        </div>

        <div className={styles.brands_marquee}>
            <BrandsMarquee />
        </div>

        <div className={styles.quotes_container}>
            <Quotes />
        </div>

        <div className={styles.marquee_1}>
            <TextMarquee data="TRABAJEMOS JUNTOS&nbsp;—&nbsp;" />
        </div>

        <ParagraphAndButton 
            paragraph='<p>Si estás pensando en llevar a cabo propuestas educativas con tecnología en tu organización, escribinos a <a href="https://www.google.com/" target="_blank">asesorias@pent.org.ar</a>.</p>' 
            iconBtn='/assets/images/mail_icon.svg'
            urlBtn='https://www.google.com/'
        />
    </>
    )
}