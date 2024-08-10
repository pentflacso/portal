import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import MetaTags from '../../components/library/MetaTags/MetaTags';
import MainWrapper from '../../components/library/MainWrapper/MainWrapper';
import PageHeading from '../../components/library/PageHeading/PageHeading';
import HomeHeading from '../../components/home/HomeHeading/HomeHeading';
import CoverVideo from '../../components/home/CoverVideo/CoverVideo';
import KeysBox from '../../components/library/KeysBox/KeysBox';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import ThemesAccordion from '../../components/investigacion/ThemesAccordion/ThemesAccordion';
import HighlightParagraph from '../../components/library/HighlightParagraph/HighlightParagraph';
import Quotes from '../../components/library/Quotes/Quotes';
import ParagraphAndButton from '../../components/asesorias/ParagraphAndButton/ParagraphAndButton';
import SectionSelector from '../../components/home/SectionSelector/SectionSelector';
import BrandsMarquee from '../../components/asesorias/BrandsMarquee/BrandsMarquee';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import TeamData from '../../components/equipo/TeamData/TeamData';
import NewsSelector from '../../components/home/NewsSelector/NewsSelector';
import LeafsItem from '../../components/asesorias/LeafsItem/LeafsItem';
import ExploringBtns from '../../components/library/ExploringBtns/ExploringBtns';
import Footer from '../../components/library/Footer/Footer';
import HeaderPropuesta from '../../components/usina/HeaderPropuesta/HeaderPropuesta';
import CvSelector from '../../components/usina/CvSelector/CvSelector';
import JoinIn from '../../components/usina/JoinIn/JoinIn';
import CTA from '../../components/library/CTA/CTA';
import SliderCourses from '../../components/library/SliderCourses/SliderCourses';
import UsinaHero from '../../components/usina/HeroHeader/HeroHeader';




export default function PageBuilder({data, stylesx, explorerBtn}){
    const { setDataStrip, windowSize, announcementStatus } = useAppContext();

    useEffect(() => {
        setDataStrip(data[0].strip);    
    }, [])


    const exploringBtnsData = [
        {title: 'Formación', path: 'formacion'},
        {title: 'Producciones', path: 'producciones'},
        {title: 'Asesorías', path: 'asesorias'}
    ]

    function styleCard(typeCard){
        //Formacion
        if(typeCard == 0){
            return stylesx.carrousel_formacion;
        //Home
        }else if(typeCard == 1){
            return stylesx.carrousel_novedades;
        //Asesoria - clientes
        }else if(typeCard == 3){
            return stylesx.carrousel_proyects;
        //Investigacion
        } else if(typeCard == 4){
            return stylesx.carrousel_projects;
        } 
    }

    return(
    <>
            <MetaTags
                pageTitle={data[0].pageTitle}
                shareTitle={data[0].titleShare}
                keywords={data[0].keyword}
                description={data[0].description}
                img={data[0].image}
            />

            <MainWrapper>  
                <section className={stylesx.pageBuilder}>
                {data ? data.map((dataBlock, i) => (
                    dataBlock.block_type === "header" ? "" :
                    <div key={i} data-id={dataBlock.block_class}>
                        {(dataBlock.block_type === "highlighted" && i == 1) &&
                            <PageHeading title={dataBlock.title[0].value}  />
                        }
                        {(dataBlock.block_type === "wordscover" && i == 1) &&
                            <HomeHeading title={dataBlock.title} final={dataBlock.finalwords} initial={dataBlock.initialwords}   />
                        }
                        {dataBlock.block_type === "videocover" && 
                            <CoverVideo data={dataBlock}  data-order={i}  />
                        }
                        {dataBlock.block_type === "sectionselector" && 
                            <SectionSelector data={dataBlock.MemberData} data-order={i} />
                        }
                        {dataBlock.block_type === "skillbox" && 
                            <KeysBox data={dataBlock.keyFeatures} data-order={i} />
                        }
                        {dataBlock.block_type === "marquee" && 
                                    <TextMarquee data={dataBlock.marquee} />
                        }
                        {dataBlock.block_type === "accordion" &&
                                <ThemesAccordion data={dataBlock.accordion} />
                        }  

                        {(dataBlock.block_type === "highlighted" && i !== 1) &&
                                <HighlightParagraph title={dataBlock.title} />
                        }
                        {dataBlock.block_type === "sliderquotes" &&
                            <Quotes items={dataBlock.quotes}  data-order={i} />                               
                        }
                        {dataBlock.block_type === "brandsbanner" &&
                                <BrandsMarquee partners={dataBlock.partners}/>
                        }
                        {dataBlock.block_type === "twocolums" &&
                            <TwoColumsText texto={dataBlock.description[0].value}  data-order={i}/>

                        }
                        {dataBlock.block_type === "teammembers" &&
                            <TeamData team={dataBlock.roster} title={dataBlock.block_title}  data-order={i} />
                        }
                        {dataBlock.block_type === "sliderperson" &&
                            <Swiper 
                            modules={[Navigation, FreeMode]}
                            spaceBetween={0}
                            slidesPerView={"auto"}
                            navigation={true}  
                            freeMode={false}   
                            grabCursor={false}  
                            className={`${stylesx.carrousel_members} swiper-cards members`}    
                                              
                            >   
                            {dataBlock.members.map((item, m) => (
                                <SwiperSlide key={m}>
                                    <Link className={stylesx.member} href={item.alias}>
                                        <div className={stylesx.img_container}>
                                            <img alt={item.img.alt} src={item.img.url}/>
                                        </div>
                                        <h5>{item.nombre}</h5>
                                    </Link>            
                                </SwiperSlide>
                            ))}                            
                            </Swiper>
                        }
                        {(dataBlock.block_type === "slidercard" && dataBlock.typeCard[0].value != 2) &&

                            <Swiper
                                modules={[Navigation, FreeMode]}
                                spaceBetween={0}
                                slidesPerView={"auto"}
                                navigation={true
                                }  
                                freeMode={false}   
                                grabCursor={
                                    dataBlock.typeCard[0].value != 3 ? 
                                        true :false 
                                }    
                                className={`${styleCard(dataBlock.typeCard[0].value)} swiper-cards`}       
                            >   
                                {dataBlock.cards.map((item, i) => (
                                    <SwiperSlide key={i}>

                                        {dataBlock.typeCard[0].value === '0' &&
                                            <article className={stylesx.card}>
                                                <img src={item.img.url} alt={item.img.alt} />
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                                <a href={item.link.href} rel="noopener noreferrer" target="_blank" className="cta_btn">Más información</a>
                                            </article>
                                        }                                
                                        {dataBlock.typeCard[0].value === '1' &&
                                            <a href={item.link.href} rel="noopener noreferrer" target="_blank" className={stylesx.card_new}>
                                                <div className={stylesx.info}>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.description}</p>
                                                </div>                       
                                                <img src={item.img.url} alt={item.img.alt} />                    
                                            </a>
                                        }
                                        {dataBlock.typeCard[0].value === '3' &&
                                            <Link href={item.link.href} className={stylesx.card_proyect}>
                                                <img alt={item.img.alt} src={item.img.url} />
                                                <h5>{item.title}</h5>                    
                                            </Link>
                                        }
                                        {dataBlock.typeCard[0].value === '4' &&
                                            <article className={stylesx.card}>
                                                <span>{item.state}</span>
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                                <a href={item.link.href} rel="noopener noreferrer" target="_blank" className="cta_btn">Más información</a>
                                            </article> 
                                        }          

                                    </SwiperSlide>
                                ))}                            
                            </Swiper>     
                        }
                        {(dataBlock.block_type === "slidercard" && dataBlock.typeCard[0].value == 2) && 
                            <LeafsItem items={dataBlock.cards} />   
                        }                        
                        {dataBlock.block_type === "info" &&
                            <ParagraphAndButton 
                                paragraph={dataBlock.description[0].value}
                                iconBtn={dataBlock.icon[0].img}
                                urlBtn={dataBlock.link[0].src}
                            />    
                        }
                        {dataBlock.block_type === "lastnews" &&
                            <NewsSelector data={dataBlock.NewsData} />                              
                        }
                        {dataBlock.block_type === "text_and_video" &&
                            <HeaderPropuesta blockProps={dataBlock} />                              
                        }
                        {dataBlock.block_type === "personslist" &&
                            <CvSelector persons={dataBlock.field_person} />                              
                        }
                        {dataBlock.block_type === "formandprices" &&
                            <JoinIn blockProps={dataBlock} formURL={data[0].form}   origin={data[0].title}/>                              
                        }
                        {dataBlock.block_type === "automatic_course_slider" &&
                            <SliderCourses dataCourses={dataBlock.courses} />                              
                        }
                        {dataBlock.block_type === "cta" &&
                            <CTA blockProps={dataBlock} />                              
                        }
                        {dataBlock.block_type === "hero_usina" &&
                            <UsinaHero blockProps={dataBlock} />                              
                        }


                    </div>
                )): ""}
                </section>
                {explorerBtn ? <ExploringBtns data={exploringBtnsData} /> : "" }
                
                <Footer />
            </MainWrapper>            
        </> 
    )
}