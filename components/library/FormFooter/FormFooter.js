import React, { useState } from 'react';
import styles from "./FormFooter.module.scss";


const FormFooter  = () => {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState();

  const validateEmail = (email) => {
    // Expresión regular para validar el formato del email
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de Mail
    if (!validateEmail(email)) {
      setStatus(false);
      return;
    }    

    // Realizar la solicitud utilizando fetch
    fetch(`https://redaccion.pent.org.ar/data/newsletter/${encodeURIComponent(email)}`)
      .then(response => response.json())
      .then(data => {
        setStatus(data.status);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.input_group}>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                name="email"
                value={email}
                className={styles.input_email} 
                placeholder="Colocá tu email"
                onChange={handleEmailChange}
                required
            />

            <button className={styles.btn_send} type="submit" />
            {status == true ? <p>Correcto</p> : ""}
            {status == false ? <p>In-Correcto</p> : ""}
            
        </form>
    </div>
  );
};

export default FormFooter;