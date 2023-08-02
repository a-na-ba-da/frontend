import { createSlice } from '@reduxjs/toolkit';

interface savingState {
  isBuyingMenu: boolean;
  scroll: number;
}

const initialState: savingState = {
  isBuyingMenu: true,
  scroll: 0,
};

const savingSlice = createSlice({
  name: 'saving',
  initialState,
  reducers: {
    setIsBuyingMenu: (state, action) => {
      state.isBuyingMenu = action.payload;
    },
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
});

export const { setIsBuyingMenu, setScroll } = savingSlice.actions;
export default savingSlice.reducer;
