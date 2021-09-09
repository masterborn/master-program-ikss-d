import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isModalOpen: false },
  reducers: {
    closeModal(state) {
      state.isModalOpen = false;
    },
    openModal(state) {
      state.isModalOpen = true;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
