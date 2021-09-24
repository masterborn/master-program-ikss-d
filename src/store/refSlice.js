import { createSlice } from '@reduxjs/toolkit';

const heroSlice = createSlice({
  name: 'hero',
  initialState: { heroHeight: null },
  reducers: {
    setHeight(state, action) {
      state.heroHeight = action.payload;
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice;
