import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isModalOpen: false },
  reducers: {
    closeModal(state) {
      // eslint-disable-next-line no-param-reassign
      state.isModalOpen = false;
    },
    openModal(state) {
      // eslint-disable-next-line no-param-reassign
      state.isModalOpen = true;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
