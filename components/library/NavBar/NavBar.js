import { useAppContext } from '../../../context/AppContext';
import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar(){
    
    const { isLoading, changePage, currentRoute, handleClose, menuOverlay, menuBtnAnimation, menuState, changeMenuState, blurToPage } = useAppContext();            

    return(
    <>
        <nav className={styles.navbar}>
            <div className={styles.nav_btns}>

                <Link href='/' className={styles.brand} onClick={ () => blurToPage() }><img src="/assets/images/marca_flacso_pent.svg" alt="Marca FLACSO PENT" /></Link>  

                { !menuState && <button type="button" className={!menuBtnAnimation ? styles.menu_btn : `${styles.menu_btn} ${styles.grow}`} onClick={ () => changeMenuState(true) }>Menú</button> }                

            </div>  
        </nav>

        { menuState &&
            <div className={styles.overlay} ref={menuOverlay}> 
                <div className={styles.wrapper}>
                    <div className={styles.sections}>
                        <Link href='/formacion' onClick={ () => changePage('/formacion') } className={currentRoute === '/formacion' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Formación</Link>
                        <Link href='/asesorias' onClick={ () => changePage('/asesorias') }className={currentRoute === '/asesorias' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Asesorias</Link>
                        <Link href='/producciones' onClick={ () => changePage('/producciones') } className={currentRoute === '/producciones' || currentRoute === '/producciones/[produccion]' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Producciones</Link>
                        <Link href='/investigacion' onClick={ () => changePage('/investigacion') } className={currentRoute === '/investigacion' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Investigación</Link>
                        <Link href='/novedades' onClick={ () => changePage('/novedades') } className={currentRoute === '/novedades' || currentRoute === '/novedades/[category]' || currentRoute === '/novedades/[category]/[title]' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Novedades</Link>
                        <Link href='/equipo' onClick={ () => changePage('/equipo') } className={currentRoute === '/equipo' || currentRoute === '/equipo/[perfil]' ? `${styles.btn_section} ${styles.active}` : `${styles.btn_section}`}>Equipo</Link>
                    </div>
                    <button type="button" className={styles.close_btn} onClick={ () => handleClose() }><span/><span/></button> 
                </div>
            </div>
        } 

        {isLoading && <div className={styles.fade_overlay} />}       
    </>
    );
}