import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modalSlice';
import contactFormSlice from './contactFormSlice';
import heroSlice from './heroSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    contactForm: contactFormSlice.reducer,
    hero: heroSlice.reducer,
  },
});

export default store;
