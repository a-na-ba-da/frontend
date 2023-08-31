import { createSlice } from '@reduxjs/toolkit';

interface nicknameState {
  nickname: string;
}

const initialState: nicknameState = {
  nickname: '',
};

const nicknameSlice = createSlice({
  name: 'nickname',
  initialState,
  reducers: {
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { setNickname } = nicknameSlice.actions;
export default nicknameSlice.reducer;
