import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getKnowingPostList } from '../../api/saving';

export const fetchKnowingPostList = createAsyncThunk(
  'user/fetchKnowingPostList',
  async (keyword: string | undefined) => {
    const res = await getKnowingPostList(keyword);
    return res.data.detail.content;
  },
);

interface knowingState {
  data: knowingPostType[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState: knowingState = {
  data: [],
  loading: false,
  error: null,
};

const knowingSlice = createSlice({
  name: 'knowing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKnowingPostList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchKnowingPostList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchKnowingPostList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default knowingSlice.reducer;
