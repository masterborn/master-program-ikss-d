import { useDispatch, useSelector } from 'react-redux';

import { contactFormActions } from '@store/contactFormSlice';
import FormCarryApi from '@api/clients/formcarryApi';

const useFormCarry = () => {
  const dispatch = useDispatch();
  const formValues = useSelector(({ contactForm }) => contactForm.formValues);

  let valuesToSubmit = {};

  // eslint-disable-next-line no-underscore-dangle
  if (formValues._gotcha === '') {
    valuesToSubmit = {
      name: formValues.name,
      surname: formValues.surname,
      email: formValues.email,
      topic: formValues.topic,
      content: formValues.content,
      conditions: formValues.conditions,
    };
  } else {
    valuesToSubmit = formValues;
  }

  const submitForm = async () => {
    dispatch(contactFormActions.setButtonToLoading());
    try {
      const response = await FormCarryApi.sendForm(valuesToSubmit);

      if (response.data.code === 200) {
        dispatch(contactFormActions.setIsFormChangedToFalse());
        dispatch(contactFormActions.setButtonToSuccess());
        dispatch(contactFormActions.clearFormFields());
        dispatch(contactFormActions.setFieldsToInvalid());
      } else {
        dispatch(contactFormActions.setButtonToError());
      }
    } catch {
      dispatch(contactFormActions.setButtonToError());
    }
  };

  const submitFormMock = (isFormSend) => {
    dispatch(contactFormActions.setButtonToLoading());

    setTimeout(() => {
      if (isFormSend) {
        dispatch(contactFormActions.setIsFormChangedToFalse());
        dispatch(contactFormActions.setButtonToSuccess());
        dispatch(contactFormActions.clearFormFields());
        dispatch(contactFormActions.setFieldsToInvalid());
      } else {
        dispatch(contactFormActions.setButtonToError());
      }
    }, 3000);
  };

  return { submitForm, submitFormMock };
};

export default useFormCarry;
