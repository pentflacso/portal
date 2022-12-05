import PageHeading from '../../components/library/PageHeading/PageHeading';
import TwoColumsText from '../../components/equipo/TwoColumsText/TwoColumsText';
import TextMarquee from '../../components/library/TextMarquee/TextMarquee';
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./equipo.module.scss";

export default function Equipo(){

    // Armar un array de objeto con la data que utilizaremos en el componente Swiper y el contenedor con el listado del Equipo. - El nombre deberá ser teamData. 
    
    // Ejemplo: const teamData = [ {name: 'Fabio Tarasow', areas: [{area: 'direccionGeneral'}, {area: 'docenciaEID'}]} ]

    return(
    <>
        <PageHeading title="<h1>Somos un <span>equipo de especialistas</span><br /> en educación y tecnologías digitales</h1>" margin_bottom_type={0} />

        <TwoColumsText />

        <div className={styles.marquee_1}>
            <TextMarquee data="CONOCENOS&nbsp;—&nbsp;CONOCENOS&nbsp;—&nbsp;" />
        </div>

        <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={0}
            slidesPerView={"auto"}
            navigation   
            freeMode={true}   
            grabCursor={true} 
        >     
            <SwiperSlide>1</SwiperSlide>    
            <SwiperSlide>2</SwiperSlide> 
            <SwiperSlide>3</SwiperSlide> 
            <SwiperSlide>4</SwiperSlide>               
        </Swiper> 


        <div className={styles.team_container}>

            {/* Mostrar el listado de integrantes dentro del área al que corresponda, mediante el método MAP y condicionales ternarios. */}

            {/* // ejemplo 

            data.map((e, i) => {
                return (
                <>
                    <div className={styles.team_area}>
                        listado correspondiente a Dirección general
                    </div>
                </>                                          
                );
            })
            
            */} 

        </div>

    </>
    )
}