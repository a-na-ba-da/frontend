import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getSharingPostList } from '../../api/sharing';

export const fetchSharingPostList = createAsyncThunk(
  'user/fetchSharingPostList',
  async (keyword: string | undefined) => {
    const res = await getSharingPostList(keyword);
    return res.data.detail.content;
  },
);

interface sharingState {
  scroll: number;
  data: buyingPostType[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState: sharingState = {
  scroll: 0,
  data: [],
  loading: false,
  error: null,
};

const sharingSlice = createSlice({
  name: 'sharing',
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.scroll = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSharingPostList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSharingPostList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSharingPostList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setScroll } = sharingSlice.actions;
export default sharingSlice.reducer;
