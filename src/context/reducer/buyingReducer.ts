import { createSlice } from '@reduxjs/toolkit';

interface buyingState {
  isBuyingMenu: boolean;
  scroll: number;
}

const initialState: buyingState = {
  isBuyingMenu: true,
  scroll: 0,
};

const buyingSlice = createSlice({
  name: 'buying',
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

export const { setIsBuyingMenu, setScroll } = buyingSlice.actions;
export default buyingSlice.reducer;
