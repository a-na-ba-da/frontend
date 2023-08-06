import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getBuyingPostList } from '../../api/saving';

export const fetchBuyingPostList = createAsyncThunk(
  'user/fetchBuyingPostList',
  async (keyword: string | undefined) => {
    const res = await getBuyingPostList(keyword);
    return res.data.detail.content;
  },
);

interface buyingState {
  data: buyingPostType[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState: buyingState = {
  data: [],
  loading: false,
  error: null,
};

const buyingSlice = createSlice({
  name: 'buying',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuyingPostList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBuyingPostList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBuyingPostList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default buyingSlice.reducer;
