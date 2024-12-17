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
          <p className={styles.price}>10 cuotas de<br /><span>AR$ <strong>25,000</strong></span><br />+ matrícula AR$ 26.000<br />+ derecho a coloquio</p>
          <div className={styles.disclaiment}>
            <p>*Este importe se incrementará un 20% de forma trimestral.</p>
            <p>La tramitación del título tiene un costo adicional. Ver información <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">aquí</a>.</p>
          </div>
        </div>

        <div className={styles.payment_card}>
          <p className={styles.country_tag}>Residentes en el extranjero</p>
          <p className={styles.bonus}>Bonificaciones disponibles para grupos e instituciones.</p>
          <p className={styles.price}>10 cuotas de<br /><span>USD <strong>175</strong></span><br />+ matrícula USD 175<br />+ derecho a coloquio</p>
          <div className={styles.disclaiment}>
            <p>La tramitación del título tiene un costo adicional. Ver información <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">aquí</a>.</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}