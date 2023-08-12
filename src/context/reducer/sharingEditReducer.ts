import { createSlice } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

interface sharingEditState {
  images: ImageListType;
  title: string;
  buyDate: string;
  pay: number;
  productUrl?: string;
  location?: {
    address: string;
    lat: number;
    lng: number;
  };
  content: string;
}

const initialState: sharingEditState = {
  images: [],
  title: '',
  buyDate: '',
  pay: 0,
  content: '',
  productUrl: undefined,
  location: undefined,
};

const sharingEditSlice = createSlice({
  name: 'sharingEdit',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setBuyDate: (state, action) => {
      state.buyDate = action.payload;
    },
    setPay: (state, action) => {
      state.pay = action.payload;
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
  setTitle,
  setBuyDate,
  setPay,
  setProductUrl,
  setLocation,
  setContent,
  setInit,
} = sharingEditSlice.actions;
export default sharingEditSlice.reducer;
