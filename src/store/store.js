import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modalSlice';
import formSlice from './formSlice';

const store = configureStore({
  reducer: { modal: modalSlice.reducer, form: formSlice.reducer },
});

export default store;
