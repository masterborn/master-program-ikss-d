import { contactFormActions } from '@root/store/formSlice';

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

export const validateInput = (event, dispatch) => {
  const inputVal = event.target.value;
  const { name } = event.target;

  const inputError = {
    message: '',
    invalid: true,
  };

  switch (true) {
    case inputVal.length < 3:
      inputError.message = 'Proszę wpisać minimum 3 znaki.';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'name', 30, inputVal):
      inputError.message = 'Limit znaków: 30';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'surname', 50, inputVal):
      inputError.message = 'Limit znaków: 50';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'email', 254, inputVal):
      inputError.message = 'Limit znaków: 254';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'topic', 200, inputVal):
      inputError.message = 'Limit znaków: 200';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'content', 2000, inputVal):
      inputError.message = 'Limit znaków: 2000';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'name', null, inputVal, true):
      inputError.message = 'Proszę używać tylko liter';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'surname', null, inputVal, true):
      inputError.message = 'Proszę używać tylko liter';
      dispatch(contactFormActions.formIsInvalid());
      break;
    case conditionChecks(name, 'email', null, inputVal, true):
      inputError.message = 'Proszę wpisać poprawny adres email.';
      dispatch(contactFormActions.formIsInvalid());
      break;
    default:
      inputError.message = '';
      inputError.invalid = false;
      dispatch(contactFormActions.formIsValid());
  }

  return inputError;
};

export const validateCheckbox = (event, dispatch) => {
  const inputVal = event.target.checked;

  let message = '';

  if (inputVal) {
    dispatch(contactFormActions.formIsValid());
    return message;
  }

  dispatch(contactFormActions.formIsInvalid());
  message = 'To pole jest wymagane';

  return message;
};
