import React, { useEffect } from 'react';
import { useAppContext } from '../../../context/AppContext';
import Link from "next/link";
import Announcement from '../Announcement/Announcement';
import styles from "./NavBar.module.scss";

export default function NavBar(){

    const { isLoading, changePage, currentRoute, handleClose, menuOverlay, menuBtnAnimation, menuState, changeMenuState, announcementStatus, setAnnouncementStatus, dataStrip } = useAppContext();
    
    useEffect(() =>{   
        setAnnouncementStatus(true);
      }, []);    

    return(
    <>      
        <header>        
            <nav className={styles.navbar}>                

                <div className={styles.nav_btns}>

                    {currentRoute === '/' 
                    ?
                        <h1 className={styles.brand}>
                            <Link href='/' ><span>FLACSO PENT</span></Link>
                        </h1>
                    :
                        <h3 className={styles.brand}>
                            <Link href='/' ><span>FLACSO PENT</span></Link>

                        </h3>
                    }                

                    { !menuState && <button type="button" className={!menuBtnAnimation ? styles.menu_btn : `${styles.menu_btn} ${styles.grow}`} onClick={ () => changeMenuState(true) }>Menú</button> }                

                </div>  
            </nav>

            { menuState &&
                <div className={styles.overlay} ref={menuOverlay}> 
                    <div className={styles.wrapper}>
                        <div className={styles.sections}>
                            <Link href='/formacion' onClick={ () => changePage('/formacion') } className={currentRoute === '/formacion' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Formación</Link>
                            <Link href='/asesorias' onClick={ () => changePage('/asesorias') }className={currentRoute === '/asesorias' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Asesorías</Link>
                            <Link href='/producciones' onClick={ () => changePage('/producciones') } className={currentRoute === '/producciones' || currentRoute === '/producciones/[produccion]' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Producciones</Link>
                            <Link href='/investigacion' onClick={ () => changePage('/investigacion') } className={currentRoute === '/investigacion' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Investigación</Link>
                            <Link href='/novedades' onClick={ () => changePage('/novedades') } className={currentRoute === '/novedades' || currentRoute === '/novedades/[category]' || currentRoute === '/novedades/[category]/[title]' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Novedades</Link>
                            <Link href='/equipo' onClick={ () => changePage('/equipo') } className={currentRoute === '/equipo' || currentRoute === '/equipo/[perfil]' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Equipo</Link>
                        </div>
                        <button type="button" className={styles.close_btn} onClick={ () => handleClose() }><span/><span/></button> 
                    </div>
                    <div className={styles.bg_close} onClick={ () => handleClose() }/>
                </div>
            } 

            <div className={isLoading ? `${styles.fade_overlay}` : `${styles.fade_overlay} ${styles.off}`} />     
        </header>
        
        {announcementStatus && (dataStrip != "")  && <Announcement data={ dataStrip } />}
    </>
    );
}
