import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modalSlice';
import contactFormSlice from './contactFormSlice';
import refSlice from './heroSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    contactForm: contactFormSlice.reducer,
    hero: refSlice.reducer,
  },
});

export default store;
