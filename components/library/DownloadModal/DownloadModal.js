import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import styles from "./DownloadModal.module.scss";
import Select from 'react-select';
import { useAppContext } from '../../../context/AppContext';
import {useEmailValidation, useNameValidation, useLastNameValidation, useSelectValidation} from '../../../Middleware/ValidateForm';


export default function DownloadModal({ setModal }){ 
    const { setItemstorage } = useAppContext();
    //Validación
    const { setEmail, emailError, validateEmail } = useEmailValidation();
    const { setName, nameError, validateName } = useNameValidation();
    const { setLastName, lastNameError, validateLastName } = useLastNameValidation();
    const { setSelectedOption, selectError, validateSelect } = useSelectValidation();

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const selectOption = (data) => {
        setSelectedOption(data.value);
    };
  
    const validate = (event) => {
        event.preventDefault();

        if (validateEmail() && validateName() && validateLastName() && validateSelect()){
          localStorage.setItem('downloadModal', true);
          setItemstorage(true);
          closeShareModal();
        }else{

    
        }
    };

    const options = [
        { value: 'AF', label: 'Afganistán' },
        { value: 'AL', label: 'Albania' },
        { value: 'DE', label: 'Alemania' },
        { value: 'AD', label: 'Andorra' },
        { value: 'AO', label: 'Angola' },
        { value: 'AI', label: 'Anguilla' },
        { value: 'AQ', label: 'Antártida' },
        { value: 'AG', label: 'Antigua y Barbuda' },
        { value: 'AN', label: 'Antillas Holandesas' },
        { value: 'SA', label: 'Arabia Saudí' },
        { value: 'DZ', label: 'Argelia' },
        { value: 'AR', label: 'Argentina' },
        { value: 'AM', label: 'Armenia' },
        { value: 'AW', label: 'Aruba' },
        { value: 'AU', label: 'Australia' },
        { value: 'AT', label: 'Austria' },
        { value: 'AZ', label: 'Azerbaiyán' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BH', label: 'Bahrein' },
        { value: 'BD', label: 'Bangladesh' },
        { value: 'BB', label: 'Barbados' },
        { value: 'BE', label: 'Bélgica' },
        { value: 'BZ', label: 'Belice' },
        { value: 'BJ', label: 'Benin' },
        { value: 'BM', label: 'Bermudas' },
        { value: 'BY', label: 'Bielorrusia' },
        { value: 'MM', label: 'Birmania' },
        { value: 'BO', label: 'Bolivia' },
        { value: 'BA', label: 'Bosnia y Herzegovina' },
        { value: 'BW', label: 'Botswana' },
        { value: 'BR', label: 'Brasil' },
        { value: 'BN', label: 'Brunei' },
        { value: 'BG', label: 'Bulgaria' },
        { value: 'BF', label: 'Burkina Faso' },
        { value: 'BI', label: 'Burundi' },
        { value: 'BT', label: 'Bután' },
        { value: 'CV', label: 'Cabo Verde' },
        { value: 'KH', label: 'Camboya' },
        { value: 'CM', label: 'Camerún' },
        { value: 'CA', label: 'Canadá' },
        { value: 'TD', label: 'Chad' },
        { value: 'CL', label: 'Chile' },
        { value: 'CN', label: 'China' },
        { value: 'CY', label: 'Chipre' },
        { value: 'VA', label: 'Ciudad del Vaticano (Santa Sede)' },
        { value: 'CO', label: 'Colombia' },
        { value: 'KM', label: 'Comores' },
        { value: 'CG', label: 'Congo' },
        { value: 'CD', label: 'Congo, República Democrática del' },
        { value: 'KR', label: 'Corea' },
        { value: 'KP', label: 'Corea del Norte' },
        { value: 'CI', label: 'Costa de Marfíl' },
        { value: 'CR', label: 'Costa Rica' },
        { value: 'HR', label: 'Croacia (Hrvatska)' },
        { value: 'CU', label: 'Cuba' },
        { value: 'DK', label: 'Dinamarca' },
        { value: 'DJ', label: 'Djibouti' },
        { value: 'DM', label: 'Dominica' },
        { value: 'EC', label: 'Ecuador' },
        { value: 'EG', label: 'Egipto' },
        { value: 'SV', label: 'El Salvador' },
        { value: 'AE', label: 'Emiratos Árabes Unidos' },
        { value: 'ER', label: 'Eritrea' },
        { value: 'SI', label: 'Eslovenia' },
        { value: 'ES', label: 'España' },
        { value: 'US', label: 'Estados Unidos' },
        { value: 'EE', label: 'Estonia' },
        { value: 'ET', label: 'Etiopía' },
        { value: 'FJ', label: 'Fiji' },
        { value: 'PH', label: 'Filipinas' },
        { value: 'FI', label: 'Finlandia' },
        { value: 'FR', label: 'Francia' },
        { value: 'GA', label: 'Gabón' },
        { value: 'GM', label: 'Gambia' },
        { value: 'GE', label: 'Georgia' },
        { value: 'GH', label: 'Ghana' },
        { value: 'GI', label: 'Gibraltar' },
        { value: 'GD', label: 'Granada' },
        { value: 'GR', label: 'Grecia' },
        { value: 'GL', label: 'Groenlandia' },
        { value: 'GP', label: 'Guadalupe' },
        { value: 'GU', label: 'Guam' },
        { value: 'GT', label: 'Guatemala' },
        { value: 'GY', label: 'Guayana' },
        { value: 'GF', label: 'Guayana Francesa' },
        { value: 'GN', label: 'Guinea' },
        { value: 'GQ', label: 'Guinea Ecuatorial' },
        { value: 'GW', label: 'Guinea-Bissau' },
        { value: 'HT', label: 'Haití' },
        { value: 'HN', label: 'Honduras' },
        { value: 'HU', label: 'Hungría' },
        { value: 'IN', label: 'India' },
        { value: 'ID', label: 'Indonesia' },
        { value: 'IQ', label: 'Irak' },
        { value: 'IR', label: 'Irán' },
        { value: 'IE', label: 'Irlanda' },
        { value: 'BV', label: 'Isla Bouvet' },
        { value: 'CX', label: 'Isla de Christmas' },
        { value: 'IS', label: 'Islandia' },
        { value: 'KY', label: 'Islas Caimán' },
        { value: 'CK', label: 'Islas Cook' },
        { value: 'CC', label: 'Islas de Cocos o Keeling' },
        { value: 'FO', label: 'Islas Faroe' },
        { value: 'HM', label: 'Islas Heard y McDonald' },
        { value: 'FK', label: 'Islas Malvinas' },
        { value: 'MP', label: 'Islas Marianas del Norte' },
        { value: 'MH', label: 'Islas Marshall' },
        { value: 'UM', label: 'Islas menores de Estados Unidos' },
        { value: 'PW', label: 'Islas Palau' },
        { value: 'SB', label: 'Islas Salomón' },
        { value: 'SJ', label: 'Islas Svalbard y Jan Mayen' },
        { value: 'TK', label: 'Islas Tokelau' },
        { value: 'TC', label: 'Islas Turks y Caicos' },
        { value: 'VI', label: 'Islas Vírgenes (EEUU)' },
        { value: 'VG', label: 'Islas Vírgenes (Reino Unido)' },
        { value: 'WF', label: 'Islas Wallis y Futuna' },
        { value: 'IL', label: 'Israel' },
        { value: 'IT', label: 'Italia' },
        { value: 'JM', label: 'Jamaica' },
        { value: 'JP', label: 'Japón' },
        { value: 'JO', label: 'Jordania' },
        { value: 'KZ', label: 'Kazajistán' },
        { value: 'KE', label: 'Kenia' },
        { value: 'KG', label: 'Kirguizistán' },
        { value: 'KI', label: 'Kiribati' },
        { value: 'KW', label: 'Kuwait' },
        { value: 'LA', label: 'Laos' },
        { value: 'LS', label: 'Lesotho' },
        { value: 'LV', label: 'Letonia' },
        { value: 'LB', label: 'Líbano' },
        { value: 'LR', label: 'Liberia' },
        { value: 'LY', label: 'Libia' },
        { value: 'LI', label: 'Liechtenstein' },
        { value: 'LT', label: 'Lituania' },
        { value: 'LU', label: 'Luxemburgo' },
        { value: 'MK', label: 'Macedonia, Ex-República Yugoslava de' },
        { value: 'MG', label: 'Madagascar' },
        { value: 'MY', label: 'Malasia' },
        { value: 'MW', label: 'Malawi' },
        { value: 'MV', label: 'Maldivas' },
        { value: 'ML', label: 'Malí' },
        { value: 'MT', label: 'Malta' },
        { value: 'MA', label: 'Marruecos' },
        { value: 'MQ', label: 'Martinica' },
        { value: 'MU', label: 'Mauricio' },
        { value: 'MR', label: 'Mauritania' },
        { value: 'YT', label: 'Mayotte' },
        { value: 'MX', label: 'México' },
        { value: 'FM', label: 'Micronesia' },
        { value: 'MD', label: 'Moldavia' },
        { value: 'MC', label: 'Mónaco' },
        { value: 'MN', label: 'Mongolia' },
        { value: 'MS', label: 'Montserrat' },
        { value: 'MZ', label: 'Mozambique' },
        { value: 'NA', label: 'Namibia' },
        { value: 'NR', label: 'Nauru' },
        { value: 'NP', label: 'Nepal' },
        { value: 'NI', label: 'Nicaragua' },
        { value: 'NE', label: 'Níger' },
        { value: 'NG', label: 'Nigeria' },
        { value: 'NU', label: 'Niue' },
        { value: 'NF', label: 'Norfolk' },
        { value: 'NO', label: 'Noruega' },
        { value: 'NC', label: 'Nueva Caledonia' },
        { value: 'NZ', label: 'Nueva Zelanda' },
        { value: 'OM', label: 'Omán' },
        { value: 'NL', label: 'Países Bajos' },
        { value: 'PA', label: 'Panamá' },
        { value: 'PG', label: 'Papúa Nueva Guinea' },
        { value: 'PK', label: 'Paquistán' },
        { value: 'PY', label: 'Paraguay' },
        { value: 'PE', label: 'Perú' },
        { value: 'PN', label: 'Pitcairn' },
        { value: 'PF', label: 'Polinesia Francesa' },
        { value: 'PL', label: 'Polonia' },
        { value: 'PT', label: 'Portugal' },
        { value: 'PR', label: 'Puerto Rico' },
        { value: 'QA', label: 'Qatar' },
        { value: 'UK', label: 'Reino Unido' },
        { value: 'CF', label: 'República Centroafricana' },
        { value: 'CZ', label: 'República Checa' },
        { value: 'ZA', label: 'República de Sudáfrica' },
        { value: 'DO', label: 'República Dominicana' },
        { value: 'SK', label: 'República Eslovaca' },
        { value: 'RE', label: 'Reunión' },
        { value: 'RW', label: 'Ruanda' },
        { value: 'RO', label: 'Rumania' },
        { value: 'RU', label: 'Rusia' },
        { value: 'EH', label: 'Sahara Occidental' },
        { value: 'KN', label: 'Saint Kitts y Nevis' },
        { value: 'WS', label: 'Samoa' },
        { value: 'AS', label: 'Samoa Americana' },
        { value: 'SM', label: 'San Marino' },
        { value: 'VC', label: 'San Vicente y Granadinas' },
        { value: 'SH', label: 'Santa Helena' },
        { value: 'LC', label: 'Santa Lucía' },
        { value: 'ST', label: 'Santo Tomé y Príncipe' },
        { value: 'SN', label: 'Senegal' },
        { value: 'SC', label: 'Seychelles' },
        { value: 'SL', label: 'Sierra Leona' },
        { value: 'SG', label: 'Singapur' },
        { value: 'SY', label: 'Siria' },
        { value: 'SO', label: 'Somalia' },
        { value: 'LK', label: 'Sri Lanka' },
        { value: 'PM', label: 'St Pierre y Miquelon' },
        { value: 'SZ', label: 'Suazilandia' },
        { value: 'SD', label: 'Sudán' },
        { value: 'SE', label: 'Suecia' },
        { value: 'CH', label: 'Suiza' },
        { value: 'SR', label: 'Surinam' },
        { value: 'TH', label: 'Tailandia' },
        { value: 'TW', label: 'Taiwán' },
        { value: 'TZ', label: 'Tanzania' },
        { value: 'TJ', label: 'Tayikistán' },
        { value: 'TF', label: 'Territorios franceses del Sur' },
        { value: 'TP', label: 'Timor Oriental' },
        { value: 'TG', label: 'Togo' },
        { value: 'TO', label: 'Tonga' },
        { value: 'TT', label: 'Trinidad y Tobago' },
        { value: 'TN', label: 'Túnez' },
        { value: 'TM', label: 'Turkmenistán' },
        { value: 'TR', label: 'Turquía' },
        { value: 'TV', label: 'Tuvalu' },
        { value: 'UA', label: 'Ucrania' },
        { value: 'UG', label: 'Uganda' },
        { value: 'UY', label: 'Uruguay' },
        { value: 'UZ', label: 'Uzbekistán' },
        { value: 'VU', label: 'Vanuatu' },
        { value: 'VE', label: 'Venezuela' },
        { value: 'VN', label: 'Vietnam' },
        { value: 'YE', label: 'Yemen' },
        { value: 'YU', label: 'Yugoslavia' },
        { value: 'ZM', label: 'Zambia' },
        { value: 'ZW', label: 'Zimbabue' }        
    ]


    const [ closeAnimation, setCloseAnimation] = useState(false);

    function closeShareModal() {
        setCloseAnimation(true);
        setTimeout(() => {
            setModal('hidden');
        }, "800");    
    }

    const selectStyle = {
        valueContainer:(style)=>({
                ...style,
                paddingLeft: 0,
        }),
        singleValue:(style)=>({
                ...style,
                color: "#032E59",
        }),
        placeholder:(style)=>({
            ...style,
            color: "#032E59",
            opacity:"0.4",
        }),
        control: (styles) =>({ 
            ...styles, 
            borderRadius:"0", 
            border:"none", 
            borderBottom: "calc(1.5px + 1.5 * (100vw - 1200px) / 2640) solid #7BC5B6",
        }),
        indicatorSeparator: (styles) =>({ 
            ...styles, 
            backgroundColor: "none",            
        }),
        option: (styles, {data, isDisabled, isFocused, isSelected}) =>{
            const estilos = {
                ...styles, 
                color: "#032E59",
            };
            return estilos;
        }
    }

    const modalContent = (   
        <div className={!closeAnimation ? `${styles.overlay}` : `${styles.overlay} ${styles.close_animation}` }>            

            <div className={styles.wrapper}>
            
            <button type="button" className={styles.close_btn} onClick={ () => closeShareModal() }><span/><span/></button> 

                <h4>Descargar</h4>
                <p>Gracias por tu interés. Completá tus datos y te enviaremos el archivo a tu correo electrónico en este instante.</p>

                <form onSubmit={validate}>
                    <input className={styles.input} onChange={handleNameChange} type="text" name="Nombre" placeholder="Nombre" data-required="true" required />                    

                    <input className={styles.input} onChange={handleLastNameChange} type="text" name="Apellido" placeholder="Apellido" data-required="true" required />
                 
                    <div className={styles.custom_select}>
                        <Select onChange={selectOption} options={options} name="Pais" styles={selectStyle} placeholder="País"/>
                    </div>       
                   
                    <input onChange={handleEmailChange} className={styles.input} type="email" name="Email" placeholder="Email" data-required="true" required />

                    <label className={styles.checkbox}><input type="checkbox" value="checkbox" defaultChecked /><span>Deseo recibir descuentos, becas y novedades.</span></label>

                    <button type="submit" className={styles.send_btn}>Enviar</button>
                </form>
     
            </div>   

        </div>     
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    )
}