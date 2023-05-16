import { useAppContext } from '../../../context/AppContext';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import { gsap, Power1 } from 'gsap';
import Loader from '../../../components/library/Loader/Loader';
import styles from "./NavBar.module.scss";

export default function NavBar(){

    const router = useRouter('/');
    const { isLoading, setLoadingState } = useAppContext(); 
    const [ currentRoute, setCurrentRoute] = useState('');
    const [ menuState, setMenuState ] = useState(false);
    const [ menuBtnAnimation, setBtnAnimation ] = useState(false);

    useEffect(() =>{   
        setCurrentRoute(router.route);
    }, [router]);

    function changeMenuState(value) {
      menuState !== value && setMenuState(value);
    } 

    const handleClose = () => {        
        gsap.to(`.${styles.overlay}`, {
            duration: .3,
            opacity: 0,            
            ease: Power1.easeInOut
        });
        setTimeout(() => {
            setBtnAnimation(true)
            changeMenuState(false)
        }, 300);       
    }

    const changePage = (url) => {   
        if(url === '/' && url !== currentRoute){
            setLoadingState(true);        
            setTimeout(() => {
                setLoadingState(false);
            }, 1000); 
        } else if(url === currentRoute){
            handleClose();
        } else{
            setLoadingState(true);        
            setTimeout(() => {
                setLoadingState(false);
            }, 1100); 
            setTimeout(() => {
                handleClose();
            }, 300);  
        }           
    }


    return(
    <>
        <nav className={styles.navbar}>
            <div className={styles.nav_btns}>

                <Link href='/' className={styles.brand} onClick={ () => changePage('/') }><img src="/assets/images/marca_flacso_pent.svg" alt="Marca FLACSO PENT" /></Link>  

                { !menuState && <button type="button" className={!menuBtnAnimation ? styles.menu_btn : `${styles.menu_btn} ${styles.grow}`} onClick={ () => changeMenuState(true) }>Menú</button> }

            </div>  
        </nav>

        { menuState &&
            <div className={styles.overlay}>
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

        {isLoading && <Loader />}
    </>
    );
}