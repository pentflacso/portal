import styles from "./ArticlesList.module.scss";

export default function ArticlesList(){

    // Este componente lo usaremos en las páginas Producciones y Novedades, para mostrar el listado de cards.
    
    // La idea es recibir la data vía props y mostrarla utilizando el método .MAP - Dependiendo de que el index de cada elemento sea par o impar, lo mandaremos en la columna izquierda o derecha.

    // Inicialmente el contenedor solo debe mostrar 6 cards, que deberan estar ordenadas de manera cronológica, mostrando siempre los contenidos mas actuales al principio. 

    //El botón Ver más, deberá cargar 6 contenidos más, cada vez que el usuario haga clic. El texto CTA del botón deberá venir por props.


    return(
        <div className={styles.wrapper}>

            <div className={styles.cards}>

                <div className={styles.col_left}></div>
                <div className={styles.col_right}></div>

            </div>

            <button type="button" className={styles.verMas_btn}>Ver más</button> 

        </div>
    );
}