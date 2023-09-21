import { useRouter } from 'next/router';
import { useAppContext } from '../../context/AppContext';
import { useEffect , useState , Fragment } from 'react';
import { handleServerRedirect } from '../../Middleware/ErrorRedirect';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import Link from 'next/link';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import ArticlesNov from '../../components/library/ArticlesNov/ArticlesNov';
import Footer from '../../components/library/Footer/Footer';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from 'gsap';
import styles from "./novedades.module.scss";

function Index(data){
    const [filtro , setFiltro] = useState(data.categories);

    useEffect(() => {
        setDataStrip(data.strip);
        setFiltro(data.categories);      
    }, [])

    //Router
    const router = useRouter();
    const {category} = router.query;

    const { windowSize, setDataStrip } = useAppContext(); 

    const exploringBtnsData = [
        {title: 'Formación', path: '/formacion'},
        {title: 'Producciones', path: '/producciones'},
        {title: 'Asesorías', path: '/asesorias'}
    ]

    const quitarAcentos = (str)=> {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    //Follow cursor 

    useEffect(() => {

        if(windowSize >= 1025 ){    

            // Follow custom cursor
            const ball = document.querySelector(".cursor_ver");
            gsap.set(".cursor_ver", {xPercent: -50, yPercent: -70});       
            const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            const mouse = { x: pos.x, y: pos.y };
            const speed = 0.25;
            const xSet = gsap.quickSetter(ball, "x", "px");
            const ySet = gsap.quickSetter(ball, "y", "px");
            
            window.addEventListener("mousemove", e => {
                mouse.x = e.x;
                mouse.y = e.y; 
            });
            
            gsap.ticker.add(() => {
                // adjust speed for higher refresh monitors
                const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
                pos.x += (mouse.x - pos.x) * dt;
                pos.y += (mouse.y - pos.y) * dt;
                xSet(pos.x);
                ySet(pos.y);
            });       
        }        

    }, [windowSize]);


    return(
    <>
        <MetaTags
            pageTitle={'Novedades — FLACSO | PENT'}
            shareTitle={'FLACSO | PENT'}
            keywords={'Género, Enseñanza, Derecho, Academia, Docentes, Universidad'}
            description={'Un espacio de capacitación, investigación y creación en educación y tecnologías digitales.'}
        />    
     
        <MainWrapper> 
            <div className={styles.page_heading}> 
                <PageHeading title="<h1><span>Novedades</span></h1>"/>
            </div>

            <section>
                <div className={styles.filters_cont}>
                    <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    navigation={true}  
                    freeMode={true}
                    grabCursor={true}
                    className={`${styles.category} swiper-btns`}
                    >             
                        <SwiperSlide> 
                            <Link href="/novedades/" className={styles.btn_filter}>Todos</Link>
                        
                        {filtro && filtro.map((c, key) => {
                            return (
                                <Fragment key={key}> 
                                    <Link href={"/novedades/"+ quitarAcentos(c.toLowerCase())} className={category == quitarAcentos(c.toLowerCase()) ? `${styles.btn_filter} ${styles.active}` : styles.btn_filter }>{c}</Link>
                                </Fragment>
                            );
                        })}
                        </SwiperSlide>
                    </Swiper>          
                </div>
                <ArticlesNov data={data.news} category={category} totalData={data.totalData} />
            </section>

            <section>
                <div className={styles.marquee}>
                    <TextMarquee data={[{value: "SEGUIR EXPLORANDO"}]} />
                </div>
                <ExploringBtns data={exploringBtnsData} />
            </section>

            <Footer />
        </MainWrapper>

        {windowSize >= 1025 &&
            <div className="cursor_ver">
                <div className="circle"><span>Ver</span></div>
            </div>
        }   
    </>
    )
}

export async function getServerSideProps({query}) {
    // Fetch data from external API
    //const res = await fetch(`https://flacso.pent.org.ar/api/novedades${query.category}.json`)
    const res = await fetch(`https://redaccion.pent.org.ar/data/news/${query.category}`)
    return handleServerRedirect(res);
    // Pass data to the page via props
    //return { props:  {...data }   }
}

  export default Index;