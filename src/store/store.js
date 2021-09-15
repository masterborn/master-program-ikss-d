import { configureStore } from '@reduxjs/toolkit';

import modalSlice from './modalSlice';
import contactFormSlice from './contactFormSlice';

const store = configureStore({
  reducer: { modal: modalSlice.reducer, contactForm: contactFormSlice.reducer },
});

export default store;
