import { useAppContext } from '../../../context/AppContext';
import { useState } from 'react';
import EditionsModal from '../../../components/usina/EditionsModal/EditionsModal';
import GroupsModal from '../../../components/usina/GroupsModal/GroupsModal';
import InterestedModal from '../InterestedModal/InterestedModal';

import Link from "next/link";
import styles from "./NavBarUsina.module.scss";

export default function NavBarUsina({ refNavBrand, brandVisibility, startDate, formURL, courseStatus, listCourses }){

    const { currentRoute, isLoading } = useAppContext();
    const [ modal, setModal ] = useState('hidden');      

    return(
        <>
            {modal === 'edicionesUsina' && <EditionsModal setModal={setModal} courses={listCourses} />} 
            {modal === 'comisionesPropuesta' && <GroupsModal setModal={setModal} groups={formURL} />} 
            {modal === 'meInteresa' && <InterestedModal setModal={setModal} />} 

            <header>        
                <nav className={currentRoute === '/usina' ? `${styles.navbar}` : `${styles.navbar} ${styles.proposal} test ${styles['status' + courseStatus]} ?`}>                

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


                        { currentRoute && currentRoute != '/usina' && formURL &&  <div className={brandVisibility ? `${styles.insciption_btn}` : `${styles.insciption_btn} ${styles.active}`}>
                            
                                {courseStatus === '0' ?
                                <>
                                    <p>Inicia el {startDate}</p>
                                    {  formURL?.length > 1 ? 
                                    <button type="button" className="btn-inscribirme"  onClick={ () => setModal('comisionesPropuesta')}>Inscribirme</button>
                                    :
                                    <a href={formURL[0]?.uri} rel="noopener noreferrer"  className="btn-inscribirme"  target="_blank">Inscribirme</a>
                                    }
                                </>                                
                                : courseStatus === '1' ?
                                <>
                                    <p>Próximamente</p>
                                    <button type="button" onClick={ () => setModal('meInteresa')}>Me interesa</button>
                                </>  
                                :
                                <>
                                    <p>Inició el {startDate}</p>
                                    <button type="button" onClick={ () => setModal('meInteresa')}>Me interesa</button>
                                </>                              

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