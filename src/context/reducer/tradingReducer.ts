import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getTradingPostList } from '../../api/trading';

export const fetchTradingPostList = createAsyncThunk(
  'user/tradingPostList',
  async (searchWord: string | undefined) => {
    const res = await getTradingPostList(searchWord);
    return res.data.detail.content;
  },
);

interface tradingState {
  data: any[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState: tradingState = {
  data: [],
  loading: false,
  error: null,
};

const tradingSlice = createSlice({
  name: 'trading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTradingPostList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTradingPostList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTradingPostList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tradingSlice.reducer;
