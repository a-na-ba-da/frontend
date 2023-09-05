import { createSlice } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

interface recyclingEditState {
  images: ImageListType;
  title: string;
  content: string;
}

const initialState: recyclingEditState = {
  images: [],
  title: '',
  content: '',
};

const recyclingEditSlice = createSlice({
  name: 'recyclingEdit',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setInit: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setImages, setTitle, setContent, setInit } =
  recyclingEditSlice.actions;
export default recyclingEditSlice.reducer;
