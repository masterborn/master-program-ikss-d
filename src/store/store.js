import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modalSlice';
import contactFormSlice from './formSlice';

const store = configureStore({
  reducer: { modal: modalSlice.reducer, contactForm: contactFormSlice.reducer },
});

export default store;
