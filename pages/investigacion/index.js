import MetaTags from '../../components/library/MetaTags/MetaTags';
import PageBuilder from '../../components/PageBuilder/PageBuilder';
import styles from "./investigacion.module.scss";

export default function Investigacion({data}){    
    /*
    return(
    <>
        <MainWrapper> 
            <PageHeading title={data.PageHeading} margin_bottom_type={2} />

            <section className={styles.keys_box}>
                <KeysBox data={data.keyFeatures} />
            </section>

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee1} />
                </div>
                <div className={styles.themes_accordion}>
                    <ThemesAccordion data={data.accordion} />
                </div>  
            </section>

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee2} />
                </div> 
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    navigation={true}  
                    freeMode={false}   
                    grabCursor={true}  
                    className={`${styles.carrousel_projects} swiper-cards`}         
                >   
                    {data.articles.map((item, key) => (
                        <SwiperSlide key={key}>
                            <article className={styles.card}>
                                <span>{item.lead}</span>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                <a href={item.url} rel="noopener noreferrer" target="_blank" className="cta_btn">{item.cta}</a>
                            </article>            
                        </SwiperSlide>
                    ))}                            
                </Swiper>  
            </section>

            <section>
                <div className={styles.marquee_1}>
                    <TextMarquee data={data.marquee3} />
                </div>
                <div className={styles.highlight_paragraph}>
                    <HighlightParagraph title={data.paragraph1} />
                </div>            
                <ExploringBtns data={exploringBtnsData} />
            </section>

            <Footer />
        </MainWrapper>
    </>
    )
*/

    if(Object.keys(data).length > 0){  
        return(
            <>
                <MetaTags
                    pageTitle={'Investigación — FLACSO | PENT'}
                    shareTitle={'Investigación — FLACSO | PENT'}
                    keywords={'investigación, academia, ámbito académico, cultura digital, tecnología educativa, innovación educativa, educación en línea, conocimiento científico, líneas de investigación, contenido abierto, dispositivos de aprendizaje, jóvenes e infancias, infancias y pantallas, EdTech, plataformas y productos EdTech, plataformas educativas, entornos y procesos tecnopedagógicos, prácticas docentes, ciudadanía digital, evaluación en línea, diseño de trayecto formativo, propuestas didácticas, formación docente, gamificación, entornos gamificados, experiencia de usuario, interfaaces, metodologías ágiles, entornos tecnificados, formación en género y diversidad, experiencias en primera persona, prácticas institucionales'}
                    description={'Nos apasiona investigar y compartir conocimiento con la comunidad.'}
                />        
                <PageBuilder data={ data } stylesx={styles} explorerBtn={true} />
            </>
        )
    }

}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://redaccion.pent.org.ar/data/section/66`)    
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: data  }
}