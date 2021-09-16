import { createSlice } from '@reduxjs/toolkit';

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState: {
    formValidation: {
      name: false,
      surname: false,
      email: false,
      topic: false,
      content: false,
      conditions: false,
    },
    isFormChanged: false,
    isFormSubmitted: false,
    buttonStatus: 'primary',
    formValues: {
      name: '',
      surname: '',
      email: '',
      topic: '',
      content: '',
      conditions: false,
      _gotcha: '',
    },
  },
  reducers: {
    setButtonToLoading(state) {
      state.buttonStatus = 'loading';
    },
    setButtonToError(state) {
      state.buttonStatus = 'error';
    },
    setButtonToSuccess(state) {
      state.buttonStatus = 'success';
    },
    clearFormFields(state) {
      state.formValues = {
        name: '',
        surname: '',
        email: '',
        topic: '',
        content: '',
        conditions: false,
      };
    },
    setFieldsToInvalid(state) {
      state.formValidation = {
        name: false,
        surname: false,
        email: false,
        topic: false,
        content: false,
        conditions: false,
        _gotcha: '',
      };
    },
    updateFormFields(state, action) {
      state.formValues = { ...state.formValues, ...action.payload };
    },
    updateFormValidation(state, action) {
      state.formValidation = {
        ...state.formValidation,
        ...action.payload,
      };
    },
    setIsFormChangedToFalse(state) {
      state.isFormChanged = false;
    },
    setIsFormChangedToTrue(state) {
      state.isFormChanged = true;
    },
    setIsFormSubmittedToFalse(state) {
      state.isFormSubmitted = false;
    },
    setIsFormSubmittedToTrue(state) {
      state.isFormSubmitted = true;
    },
  },
});

export const contactFormActions = contactFormSlice.actions;

export default contactFormSlice;
