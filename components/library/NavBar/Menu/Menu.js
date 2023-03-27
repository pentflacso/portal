import Link from "next/link";
import styles from "./Menu.module.scss";

export default function Menu({ changeMenuState }){

    return(
        <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <div className={styles.sections}>
                    <Link href='/formacion' onClick={ () => changeMenuState(false) }>Formación </Link>
                    <Link href='/asesorias' onClick={ () => changeMenuState(false) }>Asesorias </Link>
                    <Link href='/producciones' onClick={ () => changeMenuState(false) }>Producciones </Link>
                    <Link href='/investigacion' onClick={ () => changeMenuState(false) }>Investigación </Link>
                    <Link href='/novedades' onClick={ () => changeMenuState(false) }>Novedades </Link>
                    <Link href='/equipo' onClick={ () => changeMenuState(false) }>Equipo</Link>
                </div>
                <div className={styles.close_btn}>
                    <button type="button" className={styles.menu_btn} onClick={ () => changeMenuState(false) }>Cerrar</button>
                </div>
            </div>
        </div>
    );
}