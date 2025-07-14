import styles from "./PaymentBlockIa.module.scss";

export default function PaymentBlockIa() {

  return (
    <div className={styles.wrapper}>

      <div className={styles.col_left}>
        <h3>Formas de pago</h3>
        <p>Ver modalidades de pago <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">aquí</a>.</p>       
        <p>Consultar por bonificaciones especiales y facilidades de pago a <a href="mailto:pent_ia@flacso.org.ar" rel="noopener noreferrer" target="_blank">pent_ia@flacso.org.ar</a></p>  
        <p>Conocer beneficios aplicables por convenios de FLACSO Argentina con asociaciones, sindicatos y otras instituciones <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">aquí</a>.</p>
      </div>

      <div className={styles.col_right}>

        <div className={styles.payment_card}>
          <p className={styles.country_tag}>Residentes en Argentina</p>
          <p className={styles.bonus}>Bonificaciones disponibles para grupos e instituciones.</p>
          <p className={styles.price}>6 cuotas de<br /><span>AR$ <em>115,000</em> <strong>85,000*</strong></span></p>
          <div className={styles.disclaiment}>
            <p>* Valor con descuento por tiempo limitado.</p>
          </div>
        </div>

        <div className={styles.payment_card}>
          <p className={styles.country_tag}>Residentes en el extranjero</p>
          <p className={styles.bonus}>Bonificaciones disponibles para grupos e instituciones.</p>
          <p className={styles.price}>6 cuotas de<br /><span>USD <strong>110</strong></span><br />o <strong>650 USD</strong> en un pago.</p>
          <div className={styles.disclaiment}>
           
            <p>* Valor con descuento por tiempo limitado.</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}