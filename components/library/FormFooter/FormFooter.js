import React, { useState } from 'react';
import styles from "./FormFooter.module.scss";


const FormFooter  = () => {

    const [formData, setFormData] = useState({
    EMAIL: '',
    email_address_check: '',
    locale: 'es',
    simple: "simple"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://c123d686.sibforms.com/serve/MUIFAJyZl6g1e1QnCN_HCpF2up1PlCoOVmTjSDSEe5Bqx21Afo9Vwbv4e9lEF-8f9ngV7wKE-LPt5EZ2ziSU_mJU0wXd3mxxFP42ESRmvBvIqWdiwup1IQ1GBKdN4XrduR1oWr55SQT9veHLmItZVA6_QvB60nblNAP0OQJvCgNuYsDMqros9EGr5Ow5Lrn9IoZfXpe--y2RE_yg';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        // Manejar la respuesta del servidor externo aquí (opcional)
        console.log('Respuesta del servidor:', response);
        // Por ejemplo, si el servidor responde con un enlace, puedes redireccionar al usuario a esa URL
        // window.location.href = response.nueva_url;
      })
      .catch((error) => {
        // Manejar errores aquí (opcional)
        console.error('Error en la solicitud:', error);
      });
  };

  return (
    <div className={styles.input_group}>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="EMAIL"
                value={formData.EMAIL}
                className={styles.input_email} 
                placeholder="Colocá tu email" 
                aria-label=""
                onChange={handleChange}
                required
            />

            <input 
                type="text" 
                name="email_address_check" 
                value={formData.email_address_check} 
                className={styles.inputHidden} 
                onChange={handleChange} 
            />
            <input type="hidden" name="locale" value={formData.locale} />
            <input type="hidden" name="html_type" value={formData.simple} />            
            <button className={styles.btn_send} type="submit" />
        </form>
    </div>
  );
};

export default FormFooter;