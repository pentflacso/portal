import { useAppContext } from '../../context/AppContext';
import { useState, useEffect } from 'react';
import MetaTags from '../../components/library/MetaTags/MetaTags';
import CustomScrollbar from '../../customScrollbar/CustomScrollbar';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import HomeHeading from '../../components/home/HomeHeading/HomeHeading';
import CoverVideo from '../../components/home/CoverVideo/CoverVideo';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Quotes from '../../components/library/Quotes/Quotes';
import ParagraphAndButton from '../../components/asesorias/ParagraphAndButton/ParagraphAndButton';
import SectionSelector from '../../components/home/SectionSelector/SectionSelector';
import BrandsMarquee from '../../components/asesorias/BrandsMarquee/BrandsMarquee';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import TeamData from '../../components/equipo/TeamData/TeamData';
import NewsSelector from '../../components/home/NewsSelector/NewsSelector';
import Footer from '../../components/library/Footer/Footer';
import LeafsItem from '../../components/asesorias/LeafsItem/LeafsItem';

//import { gsap, Back, Elastic } from 'gsap';
//import $ from "jquery";

export default function PageBuilder({data, stylesx}){
    //const { windowSize } = useAppContext();   

    //equipo
    const { windowSize, goToPage } = useAppContext();


    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]

    function styleCard(typeCard){
        if(typeCard == 0){
            return stylesx.carrousel_formacion;

        }else if(typeCard == 1){
            return stylesx.carrousel_novedades;

        }else if(typeCard == 3){
            return stylesx.carrousel_members;

        } else if(typeCard == 4){
            return stylesx.carrousel_projects;

        } 
    }

    const FormatCard = ({type, alt, url, title, lead, href, description}) =>{     
        if(type == 0){
            return(
                <article className={stylesx.card}>
                    <img src={url} alt={alt} />
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href={url} rel="noopener noreferrer" target="_blank" className="cta_btn">Más información</a>
                </article>
            )

        }else if(type == 1){
            return(
                <a href={href} rel="noopener noreferrer" target="_blank" className={stylesx.card_new}>
                    <div className={stylesx.info}>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>                       
                    <img src={url} alt={alt} />                    
                </a>
            )
            
        }else if(type == 3){
            return(    
                <article className={stylesx.card_proyect}>
                    <img alt={alt} src={url} />
                    <h5>{title}</h5>                    
                </article>
            )
        }else if(type == 4){
            return(    
                <article className={stylesx.card}>
                    <span>{lead}</span>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <a href={href} rel="noopener noreferrer" target="_blank" className="cta_btn">Más información</a>
                </article> 
            )
        } 
    }

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
                        {(data.block_type === "highlighted" && i == 1) &&
                            <PageHeading title={data.title[0].value} margin_bottom_type={2} key={i} />
                        }


                        {(data.block_type === "wordscover" && i == 1) &&
                            <HomeHeading title={data.title} final={data.finalwords} initial={data.initialwords}  />
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
                        {(data.block_type === "highlighted" && i !== 1) &&
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
                        {data.block_type === "sliderperson" &&
                            <Swiper
                            modules={[Navigation, FreeMode]}
                            spaceBetween={0}
                            slidesPerView={"auto"}
                            navigation={true}  
                            freeMode={false}   
                            grabCursor={false}  
                            className={`${stylesx.carrousel_members} swiper-cards members`}                       
                            >   
                            {data.members.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <Link className={stylesx.member} href={item.alias} onClick={ () => goToPage() }>
                                        <div className={stylesx.img_container}>
                                            <img alt={item.alt} src={item.img.url}/>
                                        </div>
                                        <h5>{item.nombre}</h5>
                                    </Link>            
                                </SwiperSlide>
                            ))}                            
                            </Swiper>
                        }
                        {(data.block_type === "slidercard" && data.typeCard[0].value != 2) &&

                            <Swiper
                                modules={[Navigation, FreeMode]}
                                spaceBetween={0}
                                slidesPerView={"auto"}
                                navigation={true}  
                                freeMode={false}   
                                grabCursor={false}    
                                className={`${styleCard(data.typeCard[0].value)} swiper-cards`}       
                            >   
                                {data.cards.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <FormatCard 
                                            type={data.typeCard[0].value} 
                                            title={item.title} 
                                            description={item.description}
                                            url={item.img.url}
                                            alt={item.img.alt}
                                            lead={item.state} 
                                            href={item.link.href}
                                            cta={item.link.title}
                                        />
                                    </SwiperSlide>
                                ))}                            
                            </Swiper>     
                        }
                        {(data.block_type === "slidercard" && data.typeCard[0].value == 2) &&
                            
                            <LeafsItem items={data.cards} />   

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
                        {data.block_type === "lastnews" &&
                            <NewsSelector data={data.NewsData} />                              
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