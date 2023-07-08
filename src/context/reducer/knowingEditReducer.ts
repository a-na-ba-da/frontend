import { createSlice } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

interface knowingEditState {
  images: ImageListType;
  selectedMethod: string;
  title: string;
  productUrl?: string;
  buyLocation?: {
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
  buyLocation: undefined,
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
        state.buyLocation = undefined;
      }
      state.selectedMethod = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setProductUrl: (state, action) => {
      state.productUrl = action.payload;
    },
    setBuyLocation: (state, action) => {
      state.buyLocation = { ...state.buyLocation, ...action.payload };
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
  setBuyLocation,
  setContent,
  setInit,
} = knowingEditSlice.actions;
export default knowingEditSlice.reducer;
