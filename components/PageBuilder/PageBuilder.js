import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
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
                shareTitle={data[0].shareTitle}
                keywords={data[0].keywords}
                description={data[0].description}
            />

            <MainWrapper>  
                <section className={stylesx.pageBuilder}>
                {data ? data.map((data, i) => (
                    data.block_type === "header" ? "" :
                    <div key={i} data-id={data.block_class}>
                        {(data.block_type === "highlighted" && i == 1) &&
                            <PageHeading title={data.title[0].value}  />
                        }
                        {(data.block_type === "wordscover" && i == 1) &&
                            <HomeHeading title={data.title} final={data.finalwords} initial={data.initialwords}   />
                        }
                        {data.block_type === "videocover" && 
                            <CoverVideo data={data}  data-order={i}  />
                        }
                        {data.block_type === "sectionselector" && 
                            <SectionSelector data={data.MemberData} data-order={i} />
                        }
                        {data.block_type === "skillbox" && 
                            <KeysBox data={data.keyFeatures}  data-order={i} />
                        }
                        {data.block_type === "marquee" && 
                                    <TextMarquee data={data.marquee} />
                        }
                        {data.block_type === "accordion" &&
                                <ThemesAccordion data={data.accordion} />
                        }  

                        {(data.block_type === "highlighted" && i !== 1) &&
                                <HighlightParagraph title={data.title} />
                        }
                        {data.block_type === "sliderquotes" &&
                            <Quotes items={data.quotes}  data-order={i} />                               
                        }
                        {data.block_type === "brandsbanner" &&
                                <BrandsMarquee partners={data.partners}/>
                        }
                        {data.block_type === "twocolums" &&
                            <TwoColumsText texto={data.description[0].value}  data-order={i}/>

                        }
                        {data.block_type === "teammembers" &&
                            <TeamData team={data.roster} title={data.block_title}  data-order={i} />
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
                            {data.members.map((item, m) => (
                                <SwiperSlide key={m}>
                                    <Link className={stylesx.member} href={item.alias}>
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
                                navigation={
                                    data.typeCard[0].value == 0 ? 
                                        windowSize >= 1025 ? false : true 
                                    : true
                                }  
                                freeMode={false}   
                                grabCursor={
                                    data.typeCard[0].value != 3 ? 
                                        true :false 
                                }    
                                className={`${styleCard(data.typeCard[0].value)} swiper-cards`}       
                            >   
                                {data.cards.map((item, i) => (
                                    <SwiperSlide key={i}>

                                        {data.typeCard[0].value === '0' &&
                                            <article className={stylesx.card}>
                                                <img src={item.img.url} alt={item.img.alt} />
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                                <a href={item.link.href} rel="noopener noreferrer" target="_blank" className="cta_btn">Más información</a>
                                            </article>
                                        }                                
                                        {data.typeCard[0].value === '1' &&
                                            <a href={item.link.href} rel="noopener noreferrer" target="_blank" className={stylesx.card_new}>
                                                <div className={stylesx.info}>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.description}</p>
                                                </div>                       
                                                <img src={item.img.url} alt={item.img.alt} />                    
                                            </a>
                                        }
                                        {data.typeCard[0].value === '3' &&
                                            <Link href={item.link.href} className={stylesx.card_proyect}>
                                                <img alt={item.img.alt} src={item.img.url} />
                                                <h5>{item.title}</h5>                    
                                            </Link>
                                        }
                                        {data.typeCard[0].value === '4' &&
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
                        {(data.block_type === "slidercard" && data.typeCard[0].value == 2) && 
                            <LeafsItem items={data.cards} />   
                        }                        
                        {data.block_type === "info" &&
                            <ParagraphAndButton 
                                paragraph={data.description[0].value}
                                iconBtn={data.icon[0].img}
                                urlBtn={data.link[0].src}
                            />    
                        }
                        {data.block_type === "lastnews" &&
                            <NewsSelector data={data.NewsData} />                              
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