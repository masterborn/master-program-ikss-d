import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    isFormValid: false,
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
    formIsInvalid(state) {
      state.isFormValid = false;
    },
    formIsValid(state) {
      state.isFormValid = true;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
