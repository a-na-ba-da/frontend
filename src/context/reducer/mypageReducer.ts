import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getMyActivity } from '../../api/mypage';

export const fetchMyActivity = createAsyncThunk(
  'user/fetchMyActivity',
  async () => {
    const res = await getMyActivity();
    return res.data.detail;
  },
);

interface myActivitydataState {
  saves: Array<object>;
  recycles: Array<object>;
  changes: Array<object>;
  lends: Array<object>;
}

interface myActivityState {
  data: Array<myActivitydataState>;
  loading: boolean;
  error: string | undefined | null;
}

const initialState: myActivityState = {
  data: [],
  loading: false,
  error: null,
};

const myActivitySlice = createSlice({
  name: 'myActivity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyActivity.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMyActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default myActivitySlice.reducer;
