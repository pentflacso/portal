import React, { useState } from 'react';
import {useEffect} from "react";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import PhoneInput from 'react-phone-number-input';
import styles from "./JoinIn.module.scss";

export default function JoinIn({ blockProps, origin, formURL }) {
    const [token, setToken] = useState("");
    const [submitting, setSubmitting] = useState(0);
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [phoneValue, setPhoneValue] = useState();
    const [countryCode, setCountryCode] = useState(''); // Inicialmente vacío

    useEffect(() => {
      const fetchCountryCode = async () => {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          setCountryCode(data.country_code || 'AR'); // 'AR' como fallback
        } catch (error) {
          console.error('Error fetching country code:', error);
          setCountryCode('AR'); // En caso de error, usar 'AR' como fallback
        }
      };
  
      fetchCountryCode();
    }, []);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    phone: '',
    origin: origin,
    token: token
  });
  const [submitted, setSubmitted] = useState(false);

  const updatePhone = (e) => {
    setPhoneValue(e);
    setFormData({
      ...formData,
      phone: e,
      token: token
    });
  };

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      token: token
    });
    console.log(formData)
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
      console.log(err);
        setRefreshReCaptcha(!refreshReCaptcha);
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
            
            <PhoneInput
            defaultCountry={countryCode}
            placeholder="Teléfono"
            onChange={updatePhone}
            className={styles.phone_input}
            rules={{ required: true }} 
            value={formData.phone}
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
             <div className={styles.buttonContainer} key={i}><p>{dataForm.title}</p>
          <a href={dataForm.uri} rel="noopener noreferrer" target="_blank" className={`${styles.inscripcion_btn} btn-inscribirme`}>Inscribirme</a>
          </div> ))}
          
        </div>
      </div>
    </div>
  );
}