import PageHeading from '../../components/library/PageHeading/PageHeading';
import Link from 'next/link';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
// import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import ArticlesNov from '../../components/library/ArticlesNov/ArticlesNov';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./novedades.module.scss";


function Novedades(d){
    const data = Object.values(d);

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]
    
    const filtro = ["prensa", "empleos", "evento"];

    return(
    <>
        <PageHeading title="<h1><span>Novedades</span></h1>" margin_bottom_type={0} />
            <div className={styles.wrapper}>
            <div className={`${styles.category} swiper-btns`}>
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    navigation   
                    freeMode={true}>             
                        <SwiperSlide> 
                            <Link href="/novedades/" className={`${styles.btn_filter} ${styles.active}`}>Todos</Link>
                        </SwiperSlide>                
                    {filtro && filtro.map((category, key) => {
                        return (  
                        <SwiperSlide key={key}>
                            <Link href={"/novedades/"+ category} className={styles.btn_filter}>{category}</Link>  
                        </SwiperSlide> 
                        );
                    })}
                </Swiper>
                </div>
            </div>
        <ArticlesNov data={data} />

        <div className={styles.marquee}>
            <TextMarquee data="SEGUIR EXPLORANDO&nbsp;—&nbsp;" />
        </div>
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/novedades.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data }   }
}

export default Novedades;