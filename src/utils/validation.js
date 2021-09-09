import { contactFormActions } from '@store/contactFormSlice';

const conditionChecks = (name, nameVal, length, inputVal, regex = false) => {
  if (name !== nameVal) return false;

  const lettersRegex = /[^a-zA-Z]/g;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex) {
    return name === 'surname' || name === 'name'
      ? lettersRegex.test(inputVal)
      : !emailRegex.test(inputVal);
  }

  return inputVal.length > length;
};

export const validateInput = (inputName, inputValue, dispatch) => {
  const inputError = {
    message: '',
    invalid: true,
  };

  switch (true) {
    case inputValue.length < 3:
      inputError.message = 'Proszę wpisać minimum 3 znaki.';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'name', 30, inputValue):
      inputError.message = 'Limit znaków: 30';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'surname', 50, inputValue):
      inputError.message = 'Limit znaków: 50';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'email', 254, inputValue):
      inputError.message = 'Limit znaków: 254';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'topic', 200, inputValue):
      inputError.message = 'Limit znaków: 200';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'content', 2000, inputValue):
      inputError.message = 'Limit znaków: 2000';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'name', null, inputValue, true):
      inputError.message = 'Proszę używać tylko liter';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'surname', null, inputValue, true):
      inputError.message = 'Proszę używać tylko liter';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    case conditionChecks(inputName, 'email', null, inputValue, true):
      inputError.message = 'Proszę wpisać poprawny adres email.';
      dispatch(contactFormActions.updateFormValidation({ [inputName]: false }));
      break;
    default:
      inputError.message = '';
      inputError.invalid = false;
      dispatch(contactFormActions.updateFormValidation({ [inputName]: true }));
  }

  return inputError;
};

export const validateCheckbox = (inputValue, dispatch) => {
  let message = '';

  if (inputValue) {
    dispatch(contactFormActions.updateFormValidation({ conditions: true }));
    return message;
  }

  dispatch(contactFormActions.updateFormValidation({ conditions: false }));
  message = 'To pole jest wymagane';

  return message;
};
