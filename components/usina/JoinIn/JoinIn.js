import React, { useState } from 'react';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

import styles from "./JoinIn.module.scss";


export default function JoinIn({ blockProps, origin, formURL }) {
    const [token, setToken] = useState("");
    const [submitting, setSubmitting] = useState(0);

    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    origin: origin,
    token: token
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      token: token
    });
  };
  const setTokenFunc = (getToken) => {
    setToken(getToken);
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!submitting)
    {

        setSubmitting(1);


    
    try {
        const response = await fetch('https://redaccion.pent.org.ar/data/usina/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData)
        });

        if (response.ok) {
        setSubmitted(true);
        setSubmitting(false);
        }else{
            alert('Hubo un error al enviar el formulario');

        }
    } catch (err) {
        setRefreshReCaptcha(!refreshReCaptcha);
        console.log(err);
        alert('Hubo un error al enviar el formulario');
        setSubmitting(false);


    }
}
    
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.col_left}>
        {blockProps.field_formandprices_description && !submitted && (
          <><h3>{blockProps.field_formandprices_title[0].value}</h3>
          <div dangerouslySetInnerHTML={{ __html: blockProps.field_formandprices_description[0].value }} /></>
        )}

         {blockProps.field_contact_success && submitted ? (
          <div dangerouslySetInnerHTML={{ __html: blockProps.field_contact_success[0].value }} />
        ) : (
          <form className={styles.inquiry_form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="firstname"
              placeholder="Nombre"
              value={formData.firstname}
              onChange={handleChange}
              data-required="true"
              required
            />
            <input
              className={styles.input}
              type="text"
              name="lastname"
              placeholder="Apellido"
              value={formData.lastname}
              onChange={handleChange}
              data-required="true"
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              data-required="true"
              required
            />
            
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Consulta..."
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className={styles.send_btn} disabled={submitting ? "disabled" : ""} >Enviar</button>
            <GoogleReCaptchaProvider reCaptchaKey="6LfdgyAqAAAAANgn3ng6R3SXVze9toP9tTwcdUJU">
          <GoogleReCaptcha
            className="google-recaptcha-custom-class"
            onVerify={setTokenFunc}
            refreshReCaptcha={refreshReCaptcha}
          />
        </GoogleReCaptchaProvider>
          </form>
        )}
      </div>

      <div className={styles.col_right}>
        <div className={styles.tariffs}>
          <h3>{blockProps.field_formandprices_cardtitle[0].value}</h3>
          <div className={styles.prices}>
            <div className={styles.left}>
              <div dangerouslySetInnerHTML={{ __html: blockProps.field_formandprices_arg[0].value }} />
            </div>
            <div className={styles.right}>
              <div dangerouslySetInnerHTML={{ __html: blockProps.field_formandprices_int[0].value }} />
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: blockProps.field_formandprices_carddescript[0].value }} />
          { formURL.length == 1 &&
                    <div className={styles.buttonContainer}>
<a href={formURL[0].uri} rel="noopener noreferrer" target="_blank" className={`${styles.inscripcion_btn} btn-inscribirme`}>Inscribirme</a></div>
          }
          { formURL.length > 1 &&  formURL.map((dataForm, i) => (
             <div className={styles.buttonContainer}><p>{dataForm.title}</p>
          <a href={dataForm.uri} rel="noopener noreferrer" target="_blank" className={`${styles.inscripcion_btn} btn-inscribirme`}>Inscribirme</a>
          </div> ))}
          
        </div>
      </div>
    </div>
  );
}