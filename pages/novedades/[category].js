import { useRouter } from 'next/router'
import PageHeading from '../../components/library/PageHeading/PageHeading';
import Link from 'next/link';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import ArticlesList from '../../components/library/ArticlesList/ArticlesList';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./novedades.module.scss";


 function Index(d){
    const data = Object.values(d);

    //Router
    const router = useRouter();
    const {category} = router.query;

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
                            <Link href="/novedades/" className={styles.btn_filter}>Todos</Link>
                        </SwiperSlide>
                            {filtro && filtro.map((c, key) => {
                                return (
                                    <SwiperSlide key={key}> 
                                        <Link href={"/novedades/"+ c} className={category == c ? `${styles.btn_filter} ${styles.active}` : styles.btn_filter }>{c}</Link>
                                    </SwiperSlide>
                                );
                            })}
                 
                </Swiper>
                </div>
            </div>

        <ArticlesList data={data} section="novedades" />

        <TextMarquee />
        <ExploringBtns data={exploringBtnsData} />
    </>
    )
}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    const res = await fetch(`https://flacso.pent.org.ar/api/novedades${query.category}.json`)
    const data = await res.json()

    // Pass data to the page via props
    return { props:  {...data }   }
}

  export default Index;