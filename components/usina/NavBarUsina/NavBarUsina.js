import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import EditionsModal from '../../../components/usina/EditionsModal/EditionsModal';
import Link from "next/link";
import styles from "./NavBarUsina.module.scss";

export default function NavBarUsina({ refNavBrand, brandVisibility, startDate }){

    const { currentRoute, isLoading } = useAppContext();
    const [ modal, setModal ] = useState('hidden');      

    return(
        <>
            {modal === 'edicionesUsina' && <EditionsModal setModal={setModal} />} 

            <header>        
                <nav className={currentRoute === '/usinadev' ? `${styles.navbar}` : `${styles.navbar} ${styles.proposal}`}>                

                    <div className={styles.nav_btns}>

                        {currentRoute === '/usinadev' 
                        ?
                            <h1 className={styles.brand}>
                                <Link href='/' ><span>FLACSO PENT</span></Link>
                            </h1>
                        :
                            <h3 className={brandVisibility ? `${styles.brand}` : `${styles.brand} ${styles.hidden}`} ref={refNavBrand}>
                                <Link href='/' ><span>FLACSO PENT</span></Link>
                            </h3>
                        }                

                        {currentRoute === '/usinadev'
                        ? 
                            <button type="button" className={styles.editions_btn} onClick={ () => setModal('edicionesUsina')}>Próximas Ediciones</button>
                        :
                            <div className={brandVisibility ? `${styles.insciption_btn}` : `${styles.insciption_btn} ${styles.active}`}>
                                <p>{startDate}</p>
                                <a href="https://inscripcion.flacso.org.ar/inscripcion_interesados_datpersonal.php?idpo=10542" rel="noopener noreferrer" target="_blank">Inscribirme</a>
                            </div>
                        }             

                    </div>  
                </nav> 

                <div className={isLoading ? `${styles.fade_overlay}` : `${styles.fade_overlay} ${styles.off}`} />  
            </header>        
        </>
    );
}