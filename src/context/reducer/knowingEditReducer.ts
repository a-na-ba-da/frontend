import { createSlice } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

interface knowingEditState {
  images: ImageListType;
  selectedMethod: string;
  title: string;
  productUrl?: string;
  location?: {
    address: string;
    lat: number;
    lng: number;
  };
  content: string;
}

const initialState: knowingEditState = {
  images: [],
  selectedMethod: '',
  title: '',
  content: '',
  productUrl: undefined,
  location: undefined,
};

const knowingEditSlice = createSlice({
  name: 'knowingEdit',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setSelectedMethod: (state, action) => {
      if (action.payload === 'offline') {
        state.productUrl = undefined;
      } else {
        state.location = undefined;
      }
      state.selectedMethod = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setProductUrl: (state, action) => {
      state.productUrl = action.payload;
    },
    setLocation: (state, action) => {
      state.location = { ...state.location, ...action.payload };
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setInit: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setImages,
  setSelectedMethod,
  setTitle,
  setProductUrl,
  setLocation,
  setContent,
  setInit,
} = knowingEditSlice.actions;
export default knowingEditSlice.reducer;
