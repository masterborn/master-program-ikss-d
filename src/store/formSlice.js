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
      // eslint-disable-next-line no-param-reassign
      state.buttonStatus = 'loading';
    },
    setButtonToError(state) {
      // eslint-disable-next-line no-param-reassign
      state.buttonStatus = 'error';
    },
    setButtonToSuccess(state) {
      // eslint-disable-next-line no-param-reassign
      state.buttonStatus = 'success';
    },
    clearFormFields(state) {
      // eslint-disable-next-line no-param-reassign
      state.formValues = {
        name: '',
        surname: '',
        email: '',
        topic: '',
        content: '',
        conditions: false,
      };
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
