import ReactDOM from 'react-dom';
import { useState } from 'react';
import styles from "./PromotionModal.module.scss";

export default function PromotionModal({ setModal, setAnnouncementState }){
   
    const [ currentContent, setCurrentContent] = useState('promotions');
    const [ closeAnimation, setCloseAnimation] = useState(false);
    const [ selectOne, setSelectOne] = useState('default');
    const [ selectTwo, setSelectTwo] = useState('default');
    const [ selectThree, setSelectThree] = useState('default');

    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setModal(false);
            setAnnouncementState(true);
        }, "800");    
    }    

    const handleChangeSelectOne = (e) => {    
        setSelectOne(e.target.value);
    };

    const handleChangeSelectTwo = (e) => {    
        setSelectTwo(e.target.value);
    };

    const handleChangeSelectThree = (e) => {    
        setSelectThree(e.target.value);
    };


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
                                    <p>AR$ <strong>25,000</strong></p>
                                    <a href="#" rel="noopener noreferrer" target="_blank" className={styles.cta_btn}>Pack 2 cursos</a>
                                </div>
                                <div className={styles.price}>
                                    <p>AR$ <strong>120,000</strong></p>
                                    <a href="#" rel="noopener noreferrer" target="_blank" className={styles.cta_btn}>Pack 3 cursos</a>
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
                            <p>Gracias por tu interés. Completá el formulario y te enviaremos un correo electrónico con un enlace para acceder al descuento.</p>

                            <form>
                                <input className={styles.input} type="text" name="Nombre" placeholder="Nombre" data-required="true" required />                    

                                <input className={styles.input} type="text" name="Apellido" placeholder="Apellido" data-required="true" required />

                                <div className={selectOne === 'default' ? `${styles.custom_select} ${styles.default}` : `${styles.custom_select}`}>
                                    <select onChange={handleChangeSelectOne} defaultValue={'default'}>                          
                                        <option value="default" disabled>País</option>
                                        <option value="option_1">Argentina</option>
                                        <option value="option_2">Uruguay</option>
                                        <option value="option_3">México</option>
                                    </select>
                                </div>

                                <input className={styles.input} type="email" name="Email" placeholder="Email" data-required="true" required />
                                
                                <div className={selectTwo === 'default' ? `${styles.custom_select} ${styles.default}` : `${styles.custom_select}`}>
                                    <select onChange={handleChangeSelectTwo} defaultValue={'default'} >                          
                                        <option value="default" disabled>¿Cómo nos conociste?</option>
                                        <option value="option_1">Redes sociales (Instagram, LinkedIn, etc)</option>
                                        <option value="option_2">Charla o congreso</option>
                                        <option value="option_3">Correo electrónico</option>
                                        <option value="option_4">Por un amigo o colega</option>
                                        <option value="option_5">Por la institución donde trabajo</option>
                                        <option value="option_6">Buscadores (Google u otros)</option>
                                        <option value="option_7">Sitio de la FLACSO</option>
                                        <option value="option_8">No recuerdo</option>
                                        <option value="option_9">Otro</option>
                                    </select>
                                </div>

                                <input className={styles.input} type="text" name="Motivo" placeholder="¿Por qué te interesa cursar con nosotros?" data-required="true" required />

                                <div className={selectThree === 'default' ? `${styles.custom_select} ${styles.default}` : `${styles.custom_select}`}>
                                    <select onChange={handleChangeSelectThree} defaultValue={'default'}>                          
                                        <option value="default" disabled>¿Por qué no habías cursado antes?</option>
                                        <option value="option_1">No los conocía</option>
                                        <option value="option_2">Motivos económicos</option>
                                        <option value="option_3">Falta de tiempo</option>
                                        <option value="option_4">Elegí otra propuesta</option>
                                        <option value="option_5">Desconocimiento</option>
                                        <option value="option_6">Miedo o incertidumbre</option>
                                        <option value="option_7">No me sentía capacitado/a</option>
                                    </select>
                                </div>

                                <button type="submit" className={styles.send_btn} onClick={ () => setCurrentContent('message') }>Enviar</button>
                            </form>
                        </div>                    
                    </>
                }    
                {currentContent === 'message' && 
                    <div className={styles.message_content}>
                        <h4><span>Revisá tu mail</span>, te enviamos el cupón a tu casilla.</h4>
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