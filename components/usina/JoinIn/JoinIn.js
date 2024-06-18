import styles from "./JoinIn.module.scss";

export default function JoinIn(){

    return(
        <div className={styles.wrapper}>

            <div className={styles.col_left}>
                <h3>Consultas</h3>
                <p>Completá el siguiente formulario y nos pondremos en contacto para responder tus dudas, o escribinos a <a href='' rel="noopener noreferrer" target="_blank" className="inscripcion_btn">usinapent@flacso.org.ar</a>.</p>

                <form className={styles.inquiry_form}>
                    <input className={styles.input} type="text" name="Nombre" placeholder="Nombre" data-required="true" required />                    

                    <input className={styles.input} type="text" name="Apellido" placeholder="Apellido" data-required="true" required />           
                   
                    <input className={styles.input} type="email" name="Email" placeholder="Email" data-required="true" required />

                    <textarea className={styles.textarea} name="consulta" placeholder="Consulta..." />

                    <button type="submit" className={styles.send_btn}>Enviar</button>
                </form>

            </div>

            <div className={styles.col_right}>
                <div className={styles.tariffs}>
                    <h3>Aranceles</h3>
                    <div className={styles.prices}>
                        <div className={styles.left}>
                            <p>Residentes en Argentina</p>
                            <p className={styles.price}><span>AR$</span> 25,000</p>
                        </div>
                        <div className={styles.right}>
                            <p>Residentes en el extranjero</p>
                            <p className={styles.price}><span>USD</span> 80</p>
                        </div>
                    </div>
                    <p>Inicio — 9 de diciembre de 2023</p>
                    <p>Días y horarios de cursada — Jueves 9, 16, 23 y 30 de noviembre de 2023, de 18 a 20h (GMT -3)</p>
                    <p><a href='' rel="noopener noreferrer" target="_blank" className={styles.download_programa}>Descargar programa</a></p>
                    <a href='' rel="noopener noreferrer" target="_blank" className={styles.inscripcion_btn}>Inscribirme</a>
                </div>
            </div>
            
        </div>
    );
}