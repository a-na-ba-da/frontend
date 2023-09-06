import { createSlice } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

interface buyingEditState {
  images: ImageListType;
  buyingMethod: string;
  deliveryMethod: string;
  title: string;
  buyDate: Date;
  pay: number;
  productUrl?: string;
  location?: {
    address: string;
    lat: number;
    lng: number;
  };
  content: string;
}

const initialState: buyingEditState = {
  images: [],
  buyingMethod: '',
  deliveryMethod: '',
  title: '',
  buyDate: new Date(),
  pay: 0,
  content: '',
  productUrl: undefined,
  location: undefined,
};

const buyingEditSlice = createSlice({
  name: 'buyingEdit',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setBuyingMethod: (state, action) => {
      if (action.payload === 'offline') {
        state.productUrl = undefined;
        state.deliveryMethod = '';
        state.location = undefined;
      } else {
        state.location = undefined;
      }
      state.buyingMethod = action.payload;
    },
    setDeliveryMethod: (state, action) => {
      if (action.payload === 'online') state.location = undefined;
      state.deliveryMethod = action.payload;
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
  setBuyingMethod,
  setDeliveryMethod,
  setProductUrl,
  setLocation,
  setContent,
  setInit,
} = buyingEditSlice.actions;
export default buyingEditSlice.reducer;
