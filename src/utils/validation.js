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

export const validateInput = (event, setFormValidated) => {
  const inputVal = event.target.value;
  const { name } = event.target;

  const isInvalid = {
    message: '',
    invalid: true,
  };

  switch (true) {
    case inputVal.length < 3:
      isInvalid.message = 'Proszę wpisać minimum 3 znaki.';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'name', 30, inputVal):
      isInvalid.message = 'Limit znaków: 30';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'surname', 50, inputVal):
      isInvalid.message = 'Limit znaków: 50';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'email', 254, inputVal):
      isInvalid.message = 'Limit znaków: 254';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'topic', 200, inputVal):
      isInvalid.message = 'Limit znaków: 200';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'content', 2000, inputVal):
      isInvalid.message = 'Limit znaków: 2000';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'name', null, inputVal, true):
      isInvalid.message = 'Proszę używać tylko liter';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'surname', null, inputVal, true):
      isInvalid.message = 'Proszę używać tylko liter';
      setFormValidated(false);
      break;
    case conditionChecks(name, 'email', null, inputVal, true):
      isInvalid.message = 'Proszę wpisać poprawny adres email.';
      setFormValidated(false);
      break;
    default:
      isInvalid.message = '';
      isInvalid.invalid = false;
      setFormValidated(true);
  }

  return isInvalid;
};

export const validateCheckbox = (event, setFormValidated) => {
  const inputVal = event.target.checked;

  let message = '';

  if (inputVal) {
    setFormValidated(true);
    return message;
  }

  setFormValidated(false);
  message = 'To pole jest wymagane';

  return message;
};
