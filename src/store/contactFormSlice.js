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
    buttonStatus: 'primary',
    formValues: { name: '', surname: '', email: '', topic: '', content: '', conditions: false },
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
    updateFormFields(state, action) {
      state.formValues = { ...state.formValues, ...action.payload };
    },
    updateFormValidation(state, action) {
      state.formValidation = {
        ...state.formValidation,
        ...action.payload,
      };
    },
    setFormChangedToFalse(state) {
      state.isFormChanged = false;
    },
    setFormChangedToTrue(state) {
      state.isFormChanged = true;
    },
  },
});

export const contactFormActions = contactFormSlice.actions;

export default contactFormSlice;
