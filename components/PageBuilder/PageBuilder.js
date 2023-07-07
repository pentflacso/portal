import { useAppContext } from '../../context/AppContext';
//import { useEffect } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import CustomScrollbar from '../../customScrollbar/CustomScrollbar';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import CoverVideo from '../../components/home/CoverVideo/CoverVideo';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Quotes from '../../components/library/Quotes/Quotes';
import ParagraphAndButton from '../../components/asesorias/ParagraphAndButton/ParagraphAndButton';
import SectionSelector from '../../components/home/SectionSelector/SectionSelector';
import BrandsMarquee from '../../components/asesorias/BrandsMarquee/BrandsMarquee';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import TeamData from '../../components/equipo/TeamData/TeamData';
import Footer from '../../components/library/Footer/Footer';

//import { gsap, Back, Elastic } from 'gsap';
//import $ from "jquery";

export default function PageBuilder({data, stylesx}){
    const { windowSize } = useAppContext();   

    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]

    return(
    <>
        <MetaTags
            pageTitle={'Investigación — FLACSO | PENT'}
            shareTitle={'Investigación — FLACSO | PENT'}
            keywords={'investigación, academia, ámbito académico, cultura digital, tecnología educativa, innovación educativa, educación en línea, conocimiento científico, líneas de investigación, contenido abierto, dispositivos de aprendizaje, jóvenes e infancias, infancias y pantallas, EdTech, plataformas y productos EdTech, plataformas educativas, entornos y procesos tecnopedagógicos, prácticas docentes, ciudadanía digital, evaluación en línea, diseño de trayecto formativo, propuestas didácticas, formación docente, gamificación, entornos gamificados, experiencia de usuario, interfaaces, metodologías ágiles, entornos tecnificados, formación en género y diversidad, experiencias en primera persona, prácticas institucionales'}
            description={'Nos apasiona investigar y compartir conocimiento con la comunidad.'}
        />

        {windowSize >= 1025 ?
        <>
            <CustomScrollbar>




                
                {data ? data.map((data, i) => (
                    <>
                        {data.block_type === "header" && 
                            <PageHeading title={data.body} margin_bottom_type={2} key={i} />
                        }
                        {data.block_type === "videocover" && 
                            <CoverVideo data={data} key={i} />
                        }
                        {data.block_type === "sectionselector" && 
                        
                            <SectionSelector data={data.MemberData} key={i} />
                        
                        }
                        {data.block_type === "skillbox" && 
                            <section className={stylesx.keys_box} key={i}>
                                <KeysBox data={data.keyFeatures} />
                            </section>
                        }
                        {data.block_type === "marquee" && 
                            <section key={i}>
                                <div className={stylesx.marquee_1}>
                                    <TextMarquee data={data.marquee} />
                                </div>
                            </section>
                        }
                        {data.block_type === "accordion" &&
                            <section key={i}>
                                <div className={stylesx.themes_accordion}>
                                    <ThemesAccordion data={data.accordion} />
                                </div>  
                            </section>                        
                        }   
                        {data.block_type === "highlighted" &&
                            <section key={i}>
                                <div className={stylesx.highlight_paragraph}>
                                    <HighlightParagraph title={data.title} />
                                </div> 
                            </section>                            
                        }
                        {data.block_type === "sliderquotes" &&
                            <section key={i}>      
                                <Quotes items={data.quotes}/>   
                            </section>                             
                        }
                        {data.block_type === "brandsbanner" &&
                            <div className={stylesx.brands_marquee} key={i}>
                                <BrandsMarquee partners={data.partners}/>
                            </div>                            
                        }
                        {data.block_type === "twocolums" &&
                            <section key={i}>
                                <TwoColumsText texto={data.description[0].value}/>
                            </section>
                        }
                        {data.block_type === "teammembers" &&
                            <section key={i}>
                                <TeamData team={data.roster} title={data.block_title} />
                            </section>
                        }
                        {data.block_type === "info" &&
                                <section key={i}>
                                <ParagraphAndButton 
                                    paragraph={data.description[0].value}
                                    iconBtn={data.icon[0].img}
                                    urlBtn={data.description[0].value}
                                />
                            </section>                             
                        }



                    </>
                )): ""}


        {/*        
                <PageHeading title={data.PageHeading} margin_bottom_type={2} />

                <section className={stylesx.keys_box}>
                    <KeysBox data={data.keyFeatures} />
                </section>

                <section>
                    <div className={stylesx.marquee_1}>
                        <TextMarquee data={data.marquee1} />
                    </div>
                    <div className={stylesx.themes_accordion}>
                        <ThemesAccordion data={data.accordion} />
                    </div>  
                </section>

                <section>
                    <div className={stylesx.marquee_1}>
                        <TextMarquee data={data.marquee2} />
                    </div> 
                    <Swiper
                        modules={[Navigation, FreeMode]}
                        spaceBetween={0}
                        slidesPerView={"auto"}
                        navigation={true}  
                        freeMode={false}   
                        grabCursor={true}  
                        className={`${stylesx.carrousel_projects} swiper-cards`}         
                    >   
                    {data.articles.map((item, key) => (
                        <SwiperSlide key={key}>
                            <article className={stylesx.card}>
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
                    <div className={stylesx.marquee_1}>
                        <TextMarquee data={data.marquee3} />
                    </div>
                    <div className={stylesx.highlight_paragraph}>
                        <HighlightParagraph title={data.paragraph1} />
                    </div>            
                    <ExploringBtns data={exploringBtnsData} />
                </section>
            */}
            
                <Footer />
            
            </CustomScrollbar>
             
            <div className="cursor_deslizar">
                <div className="circle"><span>Deslizar</span></div>
            </div> 
        </> 
        :
        <>       
        {/*
            <PageHeading title={data.PageHeading} margin_bottom_type={2} />

            <section className={stylesx.keys_box}>
                <KeysBox data={data.keyFeatures} />
            </section>

            <section>
                <div className={stylesx.marquee_1}>
                    <TextMarquee data={data.marquee1} />
                </div>
                <div className={stylesx.themes_accordion}>
                    <ThemesAccordion data={data.accordion} />
                </div>       
            </section> 

            <section>
                <div className={stylesx.marquee_1}>
                    <TextMarquee data={data.marquee2} />
                </div> 
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                    navigation={true}  
                    freeMode={false}   
                    grabCursor={true}  
                    className={`${stylesx.carrousel_projects} swiper-cards`}         
                >   
                {data.articles.map((item, key) => (
                    <SwiperSlide key={key}>
                        <article className={stylesx.card}>
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
                <div className={stylesx.marquee_1}>
                    <TextMarquee data={data.marquee3} />
                </div>
                <div className={stylesx.highlight_paragraph}>
                    <HighlightParagraph title={data.paragraph1} />
                </div>            
                <ExploringBtns data={exploringBtnsData} />
            </section> 
*/}
            <Footer />
        </>
        }
    </>
    )
}