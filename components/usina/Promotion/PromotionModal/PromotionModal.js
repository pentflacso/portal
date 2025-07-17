import ReactDOM from 'react-dom';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

import styles from "./PromotionModal.module.scss";

export default function PromotionModal({ setModal, setAnnouncementState }){
   
    const [ currentContent, setCurrentContent] = useState('promotions');
    const [ closeAnimation, setCloseAnimation] = useState(false);
    const [ selectOne, setSelectOne] = useState('default');
    const [ selectTwo, setSelectTwo] = useState('default');
    const [submitting, setSubmitting] = useState(0);    

    const [ selectThree, setSelectThree] = useState('default');
    const [phoneValue, setPhoneValue] = useState();

    
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        reason: '',
        source: '',
        phone: '',
    });
    const [submitted, setSubmitted] = useState(false);




    const updatePhone = (e) => {
        setPhoneValue(e);
        setFormData({
        ...formData,
        phone: e        });
    };

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!submitting)
        {
          setSubmitting(1);    
        try {
            const response = await fetch('https://redaccion.pent.org.ar/data/usina/voucher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
            });
    
            if (response.ok) {
            setSubmitted(true);
            setCurrentContent('message');
            setSubmitting(false);
            }else{
                alert('Hubo un error al enviar el formulario, contactanos a usinapent@flacso.org.ar ');
            }
        } catch (err) {
            alert('Hubo un error al enviar el formulario, contactanos a usinapent@flacso.org.ar');
            setSubmitting(false);
        }
        }
    }


    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setModal(false);
            setAnnouncementState(true);
        }, "800");    
    }    

   


    const modalContent = (   
        <div className={!closeAnimation ? `${styles.overlay}` : `${styles.overlay} ${styles.close_animation}` }>            

            <div className={currentContent === 'promotions' ? `${styles.wrapper}` : `${styles.wrapper} ${styles.form}` }>
            
                <button type="button" className={styles.close_btn} onClick={ () => closeShareModal() }><span/><span/></button> 

                {currentContent === 'promotions' && 
                    <div className={styles.promotions_content}>

                        <div className={styles.col_left}>
                            <h4>Primera vez en FLACSO?</h4>
                            <p className={styles.big_word}>-75%</p>
                            <p><strong>Tenés hasta un 75% de descuento.</strong> Accedé a un cupón de descuento para tu primer curso y viví una experiencia única.</p>
                            <p>¡Quedan pocos cupones!</p>
                            <button type="button" className={styles.cta_btn} onClick={ () => setCurrentContent('form') }>Quiero mi cupón</button>
                        </div>   

                        <div className={styles.col_right}>
                            <h4>Si ya cursaste en FLACSO</h4>
                            <p className={styles.big_word}>PACKS</p>
                            <p><strong>Packs a precios super bajos.</strong> Armá tus trayectos a medida con los cursos que te interesan y seguí formándote con nosotros.</p>                            
                            <div className={styles.prices}>
                                <div className={styles.price}>
                                    <p>AR$ <strong>100,000</strong></p>
                                    <a href="https://eventos.flacso.org.ar/login.php?ide=1632" rel="noopener noreferrer" target="_blank" className={styles.cta_btn}>Pack 2 cursos</a>
                                </div>
                                <div className={styles.price}>
                                    <p>AR$ <strong>130,000</strong></p>
                                    <a href="https://eventos.flacso.org.ar/login.php?ide=1642" rel="noopener noreferrer" target="_blank" className={styles.cta_btn}>Pack 3 cursos</a>
                                </div>
                            </div>
                        </div> 

                    </div> 
                }   
                {currentContent === 'form' && 
                    <>
                        <div className={styles.form_content}>
                            <button type="button" className={styles.back_arrow} onClick={ () => setCurrentContent('promotions') }><img src="/assets/icons/arrow_prev_icon.svg" alt="icono de flecha"/>Volver</button> 

                            <h4>Pedí tu cupón</h4>
                            <p>Te enviaremos un enlace a tu e-mail para acceder a tu primer curso breve a un valor súper promocional.</p>

                            <form onSubmit={handleSubmit}>
                                <input onChange={handleChange}  className={styles.input} type="text" name="firstname" placeholder="Nombre" data-required="true" required />                    

                                <input onChange={handleChange}  className={styles.input} type="text" name="lastname" placeholder="Apellido" data-required="true" required />

                               <div className={selectOne === 'default' ? `${styles.custom_select} ${styles.default}` : `${styles.custom_select}`}>
  <select onChange={handleChange} name="country" defaultValue={'default'}>
    <option value="default" disabled>País</option>
    <option value="AG">Antigua y Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="BS">Bahamas</option>
    <option value="BB">Barbados</option>
    <option value="BZ">Belice</option>
    <option value="BO">Bolivia</option>
    <option value="BR">Brasil</option>
    <option value="CA">Canadá</option>
    <option value="CL">Chile</option>
    <option value="CO">Colombia</option>
    <option value="CR">Costa Rica</option>
    <option value="CU">Cuba</option>
    <option value="DM">Dominica</option>
    <option value="EC">Ecuador</option>
    <option value="SV">El Salvador</option>
    <option value="ES">España</option>
    <option value="US">Estados Unidos</option>
    <option value="GD">Granada</option>
    <option value="GT">Guatemala</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haití</option>
    <option value="HN">Honduras</option>
    <option value="JM">Jamaica</option>
    <option value="MX">México</option>
    <option value="NI">Nicaragua</option>
    <option value="PA">Panamá</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Perú</option>
    <option value="DO">República Dominicana</option>
    <option value="KN">San Cristóbal y Nieves</option>
    <option value="LC">Santa Lucía</option>
    <option value="VC">San Vicente y las Granadinas</option>
    <option value="SR">Surinam</option>
    <option value="TT">Trinidad y Tobago</option>
    <option value="UY">Uruguay</option>
    <option value="VE">Venezuela</option>
    <option value="XX">Otro</option>
    
  </select>
</div>


                                <input onChange={handleChange}  className={styles.input} type="email" name="email" placeholder="Email" data-required="true" required />
                                
                                <div className={selectTwo === 'default' ? `${styles.custom_select} ${styles.default}` : `${styles.custom_select}`}>
                                    <select onChange={handleChange}  name="source" defaultValue={'default'} >                          
                                        <option value="default" disabled>¿Cómo nos conociste?</option>
                                        <option value="Redes">Redes sociales (Instagram, LinkedIn, etc)</option>
                                        <option value="Charla">Charla o congreso</option>
                                        <option value="Correo">Correo electrónico</option>
                                        <option value="Amigo">Por un amigo o colega</option>
                                        <option value="Trabajo">Por la institución donde trabajo</option>
                                        <option value="Buscadores">Buscadores (Google u otros)</option>
                                        <option value="Flacso">Sitio de la FLACSO</option>
                                        <option value="nsnc">No recuerdo</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
   <PhoneInput
                    defaultCountry="AR"
                    placeholder="Teléfono celular"
                    value={phoneValue}
                    onChange={updatePhone}
                    className={styles.phone_input}
                    rules={{ required: true }} 
                    
                    />
                                <input className={styles.input} type="text" name="Motivo" placeholder="¿Por qué te interesa cursar con nosotros?" data-required="true" required />

                                <div className={selectThree === 'default' ? `${styles.custom_select} ${styles.default}` : `${styles.custom_select}`}>
                                    <select onChange={handleChange}  name="reason" defaultValue={'default'}>                          
                                        <option value="default" disabled>¿Por qué no habías cursado antes?</option>
                                        <option value="No los conocía">No conocía al PENT</option>
                                        <option value="Motivos económicos">Motivos económicos</option>
                                        <option value="Falta de tiempo">Falta de tiempo</option>
                                        <option value="Elegí otra propuesta">Elegí una propuesta de otra institución</option>
                                        <option value="No entendía la temática">No entendía la temática</option>
                                        <option value="Miedo o incertidumbre por el modo de cursar">Miedo o incertidumbre por el modo de cursar</option>
                                        <option value="No me sentía capacitado/a">No me sentía capacitado/a</option>
                                    </select>
                                </div>
                              

                                <button type="submit" className={styles.send_btn} disabled={submitting ? "disabled" : ""} >Enviar</button>

                            </form>
                        </div>                    
                    </>
                }    
                {currentContent === 'message' && 
                    <div className={styles.message_content}>
                        <h4><span>Revisá tu mail</span></h4>
                        <p></p>
                        <p>Te enviamos un enlace para cursar por sólo...</p>
                        <p className={styles.price}>AR$ 30.000 / 30 USD</p>
                        <p>Chequeá en la bandeja de promociones, notificaciones o correo no deseado.</p>
                        <p  className={styles.terms}><a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vS9Qjh3TjyhJ4WI_kBaI_KQFUzRBk9fcDS1RDrxXM_2I6c2eKwz1_Uctd49nYOa5RZivJzLEc_Bkkea/pub">Aplican términos y condiciones.</a></p>
                    </div> 
                } 
            </div>   

        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}