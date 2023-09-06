import { createSlice } from '@reduxjs/toolkit';
import { ImageListType } from 'react-images-uploading';

interface sharingEditState {
  title: string;
  content: string;
  start: Date;
  end: Date;
  images: ImageListType;
  pricePerDay: string;
  location?: {
    address: string;
    lat: number;
    lng: number;
  };
}

const initialState: sharingEditState = {
  title: '',
  content: '',
  start: new Date(),
  end: new Date(),
  images: [],
  pricePerDay: '',
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
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    setPricePerDay: (state, action) => {
      state.pricePerDay = action.payload;
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
  setStart,
  setEnd,
  setPricePerDay,
  setLocation,
  setContent,
  setInit,
} = sharingEditSlice.actions;
export default sharingEditSlice.reducer;
