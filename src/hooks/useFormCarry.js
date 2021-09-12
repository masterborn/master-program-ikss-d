import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { contactFormActions } from '@store/contactFormSlice';

const useFormCarry = () => {
  const dispatch = useDispatch();
  const formValues = useSelector(({ contactForm }) => contactForm.formValues);

  const submitForm = async () => {
    dispatch(contactFormActions.setButtonToLoading());
    try {
      const response = await axios.post(
        `https://formcarry.com/s/${process.env.NEXT_PUBLIC_FORMCARRY_FORM_ID}`,
        formValues,
        {
          headers: { Accept: 'application/json' },
        },
      );

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
