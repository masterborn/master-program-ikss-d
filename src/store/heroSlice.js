import { createSlice } from '@reduxjs/toolkit';

const heroSlice = createSlice({
  name: 'hero',
  initialState: { heroPosition: null },
  reducers: {
    setHeight(state, action) {
      state.heroPosition = action.payload;
    },
  },
});

export const heroActions = heroSlice.actions;

export default heroSlice;
