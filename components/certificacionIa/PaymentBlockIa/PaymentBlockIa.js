import styles from "./PaymentBlockIa.module.scss";

export default function PaymentBlockIa() {

  return (
    <div className={styles.wrapper}>

      <div className={styles.col_left}>
        <h3>Formas de pago</h3>
        <p>Ver modalidades de pago <a href="https://www.flacso.org.ar/consultas/pagos" rel="noopener noreferrer" target="_blank">aquí</a>.</p>       
        <p>Consultar por bonificaciones especiales y facilidades de pago a <a href="mailto:pent_ia@flacso.org.ar" rel="noopener noreferrer" target="_blank">pent_ia@flacso.org.ar</a></p>  
        <p>Conocer beneficios aplicables por convenios de FLACSO Argentina con asociaciones, sindicatos y otras instituciones <a href="https://www.flacso.org.ar/cooperacion/convenios" rel="noopener noreferrer" target="_blank">aquí</a>.</p>
        <p>Fecha límite para inscribirse: lunes 18/8, 17hs Argentina.</p>
      </div>

      <div className={styles.col_right}>

        <div className={styles.payment_card}>
          <p className={styles.country_tag}>Residentes en Argentina</p>
          <p className={styles.bonus}>Bonificaciones disponibles para grupos e instituciones.</p>
          <p className={styles.price}>4 cuotas de<br /><span>ARS <em>165,000</em> <strong>125,000</strong>*</span><br />o ARS  <em>650.000</em><strong> 500.000</strong>* en un pago.</p>
          <div className={styles.disclaiment}>
            <p>* Valor promocional y financiación hasta el 8 de agosto.</p>
          </div>
        </div>

        <div className={styles.payment_card}>
          <p className={styles.country_tag}>Residentes en el extranjero</p>
          <p className={styles.bonus}>Bonificaciones disponibles para grupos e instituciones.</p>
          <p className={styles.price}>4 cuotas de<br />USD <span><em>195</em> <strong>165</strong>*</span><br />o USD <em>750</em><strong> 650</strong>* en un pago.</p>
          <div className={styles.disclaiment}>
           
            <p>* Valor promocional y financiación hasta el 18 de agosto.</p>

          </div>
        </div>

      </div>
      
    </div>
  );
}