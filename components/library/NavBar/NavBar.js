import { useState } from 'react';
import reactDom from "react-dom";
import Link from "next/link";
import Menu from './Menu/Menu';
import styles from "./NavBar.module.scss";

export default function NavBar(){

    const [ menuState, setMenuState ] = useState(false);

    function changeMenuState(value) {
      menuState !== value && setMenuState(value);
    } 

    return(
        <nav className={styles.navbar}>
            <Link href='/' className={styles.brand}><img src="/assets/images/marca_flacso_pent.svg" alt="Marca FLACSO PENT" /></Link>
            <button type="button" className={styles.menu_btn} onClick={ () => changeMenuState(true) }>Menú</button> 
            {
                menuState === true &&  reactDom.createPortal(<Menu changeMenuState={changeMenuState} />, document.getElementById("navbar-root"))
            }
        </nav>
    );
}