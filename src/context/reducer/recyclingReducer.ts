import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getRecyclingPostList } from '../../api/recycling';

export const fetchgetRecyclingPostList = createAsyncThunk(
  'user/fetchRecyclingPostList',
  async (keyword: string | undefined) => {
    const res = await getRecyclingPostList(keyword);
    return res.data.detail.content;
  },
);

interface recyclingState {
  scroll: number;
  data: buyingPostType[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState: recyclingState = {
  scroll: 0,
  data: [],
  loading: false,
  error: null,
};

const recyclingSlice = createSlice({
  name: 'recycling',
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchgetRecyclingPostList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchgetRecyclingPostList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchgetRecyclingPostList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setScroll } = recyclingSlice.actions;
export default recyclingSlice.reducer;
