import { createSlice } from '@reduxjs/toolkit';

interface savingState {
  scroll: number;
}

const initialState: savingState = {
  scroll: 0,
};

const savingSlice = createSlice({
  name: 'saving',
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export const { setScroll } = savingSlice.actions;
export default savingSlice.reducer;
