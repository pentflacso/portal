import React, { useState, useEffect } from 'react';
import styles from "./FormFooter.module.scss";

const FormFooter  = () => {

  const [ email, setEmail ] = useState('');
  const [ status, setStatus ] = useState(false);
  const [ emailError, setEmailError ] = useState(false);  
  const [ sending, setSending ] = useState(false);  

  // Expresión regular para validar el formato del email
  const emailValidator = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const handleInputChange = (event) => {
    setEmail(event.target.value);   
  };

  const sendMail = () => {
    // Realizar la solicitud utilizando fetch
    fetch(`https://redaccion.pent.org.ar/data/newsletter/${encodeURIComponent(email)}`)
      .then(response => response.json())
      .then(data => {
        setStatus(data.status);
        setSending(false);  
      })
      .catch(error => {
        console.error('Error:', error);
      });          
  };

  const validateEmail = (event) => {
    event.preventDefault();

    if (!emailValidator.test(email) ){
      setEmailError(true);
    
    } else {
      setEmailError(false);  
      sendMail();
      setSending(true);    
    }
  };

  function clearErrorMessenge(){
    setEmailError(false);
  }

  return (
    <div className={styles.input_group}>
      {!status ?
        <form onSubmit={validateEmail}>
            <input 
                type="text" 
                name="email"
                value={!emailError ? email : 'Debes colocar tu email correctamente' }
                className={!emailError ? `${styles.input_email}` : `${styles.input_email} ${styles.email_error}`} 
                placeholder="Colocá tu email"
                onChange={handleInputChange}
                onClick={ () => clearErrorMessenge() }
            />      
            <button className={!sending ? styles.btn_send : `${styles.btn_send} ${styles.sending}`} type="submit" />            
        </form>
        :
        <div className={styles.email_sended}>
          <span>Gracias, te hemos enviado un correo</span>
          <div className={styles.sended_icon}/>
        </div>        
      }
    </div>
  );
};

export default FormFooter;