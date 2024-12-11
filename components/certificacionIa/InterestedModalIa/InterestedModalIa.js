import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import PhoneInput from 'react-phone-number-input';
import styles from "./InterestedModalIa.module.scss";

export default function InterestedModalIA({ setModal }){    

    const [ closeAnimation, setCloseAnimation] = useState(false);
    const [token, setToken] = useState("");
    const [submitting, setSubmitting] = useState(0);    
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [phoneValue, setPhoneValue] = useState();

        
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
            const response = await fetch('https://redaccion.pent.org.ar/data/usina/interest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
            });
    
            if (response.ok) {
            setSubmitted(true);
            setSubmitting(false);
            closeShareModal()
            }else{
                alert('Hubo un error al enviar el formulario 1 ');
            }
        } catch (err) {
            setRefreshReCaptcha(!refreshReCaptcha);
            alert('Hubo un error al enviar el formulario 2');
            setSubmitting(false);
        }
        }
    }

    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setModal('hidden');
        }, "800");    
    }   

    const modalContent = (   
        <div className={!closeAnimation ? `${styles.overlay}` : `${styles.overlay} ${styles.close_animation}` }>           
            <div className={`${styles.wrapper}`}>
            
                <button type="button" className={styles.close_btn} onClick={ () => closeShareModal() }><span/><span/></button> 

                <h4>Próximas ediciones</h4>
                <p>Gracias por tu interés. Completá tus datos y te contactaremos cuando se habilite la próxima edición.</p>    

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
                    defaultCountry="AR"
                    placeholder="Teléfono"
                    value={phoneValue}
                    onChange={updatePhone}
                    className={styles.phone_input}
                    rules={{ required: true }} 
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
               
            </div>    
        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}