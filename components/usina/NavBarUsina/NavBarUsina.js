import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import EditionsModal from '../../../components/usina/EditionsModal/EditionsModal';
import GroupsModal from '../../../components/usina/GroupsModal/GroupsModal';

import Link from "next/link";
import styles from "./NavBarUsina.module.scss";

export default function NavBarUsina({ refNavBrand, brandVisibility, startDate, formURL,listCourses }){

    const { currentRoute, isLoading } = useAppContext();
    const [ modal, setModal ] = useState('hidden');      
    return(
        <>
            {modal === 'edicionesUsina' && <EditionsModal setModal={setModal} courses={listCourses} />} 
            {modal === 'comisionesPropuesta' && <GroupsModal setModal={setModal} groups={formURL} />} 

            <header>        
                <nav className={currentRoute === '/usina' ? `${styles.navbar}` : `${styles.navbar} ${styles.proposal}`}>                

                    <div className={styles.nav_btns}>

                        {currentRoute === '/usina' 
                        ?
                            <h1 className={styles.brand}>
                                <Link href='/' ><span>FLACSO PENT</span></Link>
                            </h1>
                        :
                            <h3 className={brandVisibility ? `${styles.brand}` : `${styles.brand} ${styles.hidden}`} ref={refNavBrand}>
                                <Link href='/' ><span>FLACSO PENT</span></Link>
                            </h3>
                        }                

                        {currentRoute === '/usina' &&
                        
                            <button type="button" className={styles.editions_btn} onClick={ () => setModal('edicionesUsina')}>Próximas ediciones</button>
                        }
                         { currentRoute && currentRoute !== '/usina' &&    <div className={brandVisibility ? `${styles.insciption_btn}` : `${styles.insciption_btn} ${styles.active}`}>
                                <p>Inicio {startDate}</p>
                                {  formURL.length > 1 ? 
                                <button type="button" onClick={ () => setModal('comisionesPropuesta')}>Inscribirme</button>
                                :
                                <a href={formURL[0].uri} rel="noopener noreferrer" target="_blank">Inscribirme</a>
                                }
                            </div>
                        }             

                    </div>  
                </nav> 

                <div className={isLoading ? `${styles.fade_overlay}` : `${styles.fade_overlay} ${styles.off}`} />  
            </header>        
        </>
    );
}