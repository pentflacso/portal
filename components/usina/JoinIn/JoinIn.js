import styles from "./JoinIn.module.scss";

export default function JoinIn({blockProps,formURL}){

    return(
        <div className={styles.wrapper}>

            <div className={styles.col_left}>
                <h3>{ blockProps.field_formandprices_title[0].value }</h3>
                { blockProps.field_formandprices_description && <div dangerouslySetInnerHTML={{__html: blockProps.field_formandprices_description[0].value }} /> }

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
                    <h3>{ blockProps.field_formandprices_cardtitle[0].value }</h3>
                    <div className={styles.prices}>
                        <div className={styles.left }>
                            <div dangerouslySetInnerHTML={{__html: blockProps.field_formandprices_arg[0].value }} />
                        </div>
                        <div className={styles.right}>
                            <div dangerouslySetInnerHTML={{__html: blockProps.field_formandprices_int[0].value }} />
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: blockProps.field_formandprices_carddescript[0].value }} />
                    <a href={formURL} rel="noopener noreferrer" target="_blank" className={styles.inscripcion_btn}>Inscribirme</a>
                </div>
            </div>
            
        </div>
    );
}