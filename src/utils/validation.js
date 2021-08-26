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

export const validateInput = (event, setIsFormValid) => {
  const inputVal = event.target.value;
  const { name } = event.target;

  const inputError = {
    message: '',
    invalid: true,
  };

  switch (true) {
    case inputVal.length < 3:
      inputError.message = 'Proszę wpisać minimum 3 znaki.';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'name', 30, inputVal):
      inputError.message = 'Limit znaków: 30';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'surname', 50, inputVal):
      inputError.message = 'Limit znaków: 50';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'email', 254, inputVal):
      inputError.message = 'Limit znaków: 254';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'topic', 200, inputVal):
      inputError.message = 'Limit znaków: 200';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'content', 2000, inputVal):
      inputError.message = 'Limit znaków: 2000';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'name', null, inputVal, true):
      inputError.message = 'Proszę używać tylko liter';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'surname', null, inputVal, true):
      inputError.message = 'Proszę używać tylko liter';
      setIsFormValid(false);
      break;
    case conditionChecks(name, 'email', null, inputVal, true):
      inputError.message = 'Proszę wpisać poprawny adres email.';
      setIsFormValid(false);
      break;
    default:
      inputError.message = '';
      inputError.invalid = false;
      setIsFormValid(true);
  }

  return inputError;
};

export const validateCheckbox = (event, setIsFormValid) => {
  const inputVal = event.target.checked;

  let message = '';

  if (inputVal) {
    setIsFormValid(true);
    return message;
  }

  setIsFormValid(false);
  message = 'To pole jest wymagane';

  return message;
};
