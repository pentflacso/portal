import { useState } from 'react';
import Link from "next/link";
import InterestedModalIa from '../InterestedModalIa/InterestedModalIa';
import styles from "./NavBarIa.module.scss";

export default function NavBarIa({ refNavBrand, brandVisibility }){

    const [ modal, setModal ] = useState('hidden');  

    return(
        <>
            {modal === 'meInteresa' && <InterestedModalIa setModal={setModal} />} 

            <header>        
                <nav className={`${styles.navbar}`}>                

                    <div className={styles.nav_btns}>

                        <h3 className={brandVisibility ? `${styles.brand}` : `${styles.brand} ${styles.hidden}`} ref={refNavBrand}>
                            <Link href='/' ><span>FLACSO PENT</span></Link>
                        </h3>                

                        <div className={brandVisibility ? `${styles.insciption_btn}` : `${styles.insciption_btn} ${styles.active}`}>                            
                            <p>Inició el 20 de agosto</p>  
                               
                     {/*     <a href="https://inscripcion2.flacso.org.ar/index.php?idp=13182" rel="noopener noreferrer" className="btn-inscribirme" target="_blank">Inscribirme</a> */}

                            <button type="button" className="btn-inscribirme" onClick={ () => setModal('meInteresa')}>Me interesa</button> 
                        </div>                               

                    </div>  
                </nav> 
            </header>        
        </>
    );
}