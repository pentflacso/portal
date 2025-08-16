import { useState, useEffect } from 'react';
import styles from "./PaymentBlockIa.module.scss";

export default function PaymentBlockIa() {
  const [vacantes, setVacantes] = useState(10);

  useEffect(() => {
    // Definimos las fechas y vacantes iniciales y finales
    const fechaInicio = new Date('2025-08-16T00:00:00');
    const fechaFin = new Date('2025-08-20T23:59:59');
    const vacantesInicio = 10;
    const vacantesFin = 2;
    const ahora = new Date();

    // Si la fecha actual es anterior a la de inicio, no hacemos nada y mantenemos el valor inicial
    if (ahora < fechaInicio) {
      setVacantes(vacantesInicio);
      return;
    }

    // Si la fecha actual es posterior a la de fin, mostramos el valor final
    if (ahora > fechaFin) {
      setVacantes(vacantesFin);
      return;
    }

    // Calculamos los días totales en el rango
    const tiempoTotal = fechaFin.getTime() - fechaInicio.getTime();
    const diasTotales = tiempoTotal / (1000 * 60 * 60 * 24);

    // Calculamos los días transcurridos desde la fecha de inicio
    const tiempoTranscurrido = ahora.getTime() - fechaInicio.getTime();
    const diasTranscurridos = tiempoTranscurrido / (1000 * 60 * 60 * 24);

    // Calculamos el ritmo de reducción de vacantes por día
    const reduccionPorDia = (vacantesInicio - vacantesFin) / diasTotales;

    // Calculamos el número de vacantes para la fecha actual
    const vacantesActuales = Math.max(
      vacantesFin,
      Math.round(vacantesInicio - reduccionPorDia * diasTranscurridos)
    );

    // Actualizamos el estado con el nuevo número de vacantes
    setVacantes(vacantesActuales);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className={styles.wrapper}>

      <div className={styles.col_left}>
        <h3>Formas de pago</h3>
        <p>Ver modalidades de pago <a href="https://www.flacso.org.ar/consultas/pagos" rel="noopener noreferrer" target="_blank">aquí</a>.</p>       
        <p>Consultar por <strong>bonificaciones especiales a grupos e instituciones.</strong> <a href="mailto:pent_ia@flacso.org.ar" rel="noopener noreferrer" target="_blank">pent_ia@flacso.org.ar</a></p>  
        <p>Conocer beneficios aplicables por convenios de FLACSO Argentina con asociaciones, sindicatos y otras instituciones <a href="https://www.flacso.org.ar/cooperacion/convenios" rel="noopener noreferrer" target="_blank">aquí</a>.</p>
        <p>Fecha límite para inscribirse: lunes 18/8, 17hs Argentina.</p>
      </div>

      <div className={styles.col_right}>

        <div className={styles.payment_card}>
          <p className={styles.country_tag}>Residentes en Argentina</p>
          {/* Usamos el estado 'vacantes' aquí */}
          <p className={styles.bonus}>Últimas {vacantes} vacantes.</p>
          <p className={styles.price}>4 cuotas de<br /><span>ARS <em>165,000</em> <strong>125,000</strong>*</span><br />o un pago de ARS  <em>650.000</em><strong> 500.000</strong>*.</p>
          <div className={styles.disclaiment}>
            <p>* Valor promocional y financiación hasta el 18 de agosto o hasta agotar vacantes.</p>
          </div>
        </div>

        <div className={styles.payment_card}>
          <p className={styles.country_tag}>Residentes en el extranjero</p>
          {/* Y también aquí */}
          <p className={styles.bonus}>Últimas {vacantes} vacantes.</p>
          <p className={styles.price}>4 cuotas de<br />USD <span><em>195</em> <strong>165</strong>*</span><br />o un pago de USD <em>750</em><strong> 650</strong>*.</p>
          <div className={styles.disclaiment}>
            <p>* Valor promocional y financiación hasta el 18 de agosto o hasta agotar vacantes.</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}