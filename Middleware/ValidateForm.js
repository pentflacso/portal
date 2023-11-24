import { useState } from 'react';

// Validar EMAIL
export function useEmailValidation() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    // Expresión regular para validar email
    const emailValidator = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!emailValidator.test(email)) {
      setEmailError('Por favor, introduce un email válido');
      return false;
    }

    setEmailError('');
    return true;
  };

  return { email, setEmail, emailError, validateEmail };
};

//Validación de NOMBRE
export function useNameValidation(){
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
  
    const validateName = () => {
      // Validar que el nombre no esté vacío
      if (name.trim() === '') {
        setNameError('Por favor, introduce un nombre válido');
        return false;
      }

      setNameError('');
      return true;
    };
  
    return { name, setName, nameError, validateName };
};

//Validación de APELLIDO
export function useLastNameValidation(){
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
  
    const validateLastName = () => {
      // Validar que el Apellido no esté vacío
      if (lastName.trim() === '') {
        setLastNameError('Por favor, introduce un apellido válido');
        return false;
      }

      setLastNameError('');
      return true;
    };
  
    return { lastName, setLastName, lastNameError , validateLastName };
};
  
//Validación de SELECT
  export function useSelectValidation(){
    const [selectedOption, setSelectedOption] = useState('');
    const [selectError, setSelectError] = useState('');
  
    const validateSelect = () => {
      // Validar que se haya seleccionado una opción
      if (selectedOption.trim() === '') {
        setSelectError('Por favor, selecciona una opción');
        return false;
      }
      setSelectError('');
      return true;
    };
  
    return { selectedOption, setSelectedOption, selectError, validateSelect };
  };