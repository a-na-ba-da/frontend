// 현재 페이지의 종류를 관리하는 리듀서
// 아껴쓰기-같이사요: buying
// 아껴쓰기-같이알아요: knowing
import { createSlice } from '@reduxjs/toolkit';

interface menuState {
  menuType: string;
}

const initialState: menuState = {
  menuType: '',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuType: (state, action) => {
      state.menuType = action.payload;
    },
  },
});

export const { setMenuType } = menuSlice.actions;
export default menuSlice.reducer;
