import { createSlice } from '@reduxjs/toolkit';

interface buyingState {
  isBuyingMenu: boolean;
}

const initialState: buyingState = {
  isBuyingMenu: true,
};

const buyingSlice = createSlice({
  name: 'buying',
  initialState,
  reducers: {
    setIsBuyingMenu: (state, action) => {
      state.isBuyingMenu = action.payload;
    },
  },
});

export const { setIsBuyingMenu } = buyingSlice.actions;
export default buyingSlice.reducer;
