import styles from "./ArticlesList.module.scss";

export default function ArticlesList(){

    // Este componente lo usaremos para mostrar el listado de cards, que funcionarán como acceso a las producciones.
    
    // La idea es recibir la data vía props y mostrarla utilizando el método .MAP - Dependiendo de que el index de cada elemento sea par o impar, lo mandaremos en la columna izquierda o derecha.


    return(
        <div className={styles.wrapper}>

            <div className={styles.cards}>

                {/* Utilizar el método MAP y condicionales ternarios para mostrar las cards dentro de las columnas left y right. */}

                <div className={styles.col_left}></div>
                <div className={styles.col_right}></div>

            </div>

            <button type="button" className={styles.verMas_btn}>Ver más</button> 

        </div>
    );
}