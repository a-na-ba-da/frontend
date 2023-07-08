import { createSlice } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

interface buyingEditState {
  images: ImageListType;
  selectedMethod: string;
  title: string;
  buyDate: string;
  pay: string;
  productUrl?: string;
  buyLocation?: {
    address: string;
    lat: number;
    lng: number;
  };
  content: string;
}

const initialState: buyingEditState = {
  images: [],
  selectedMethod: '',
  title: '',
  buyDate: '',
  pay: '',
  content: '',
  productUrl: undefined,
  buyLocation: undefined,
};

const buyingEditSlice = createSlice({
  name: 'buyingEdit',
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
    setBuyDate: (state, action) => {
      state.buyDate = action.payload;
    },
    setPay: (state, action) => {
      state.pay = action.payload;
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
  setBuyDate,
  setPay,
  setProductUrl,
  setBuyLocation,
  setContent,
  setInit,
} = buyingEditSlice.actions;
export default buyingEditSlice.reducer;
