import { createSlice } from '@reduxjs/toolkit';

interface mapState {
  marker: {
    position: {
      lat: number;
      lng: number;
    };
    errMsg: null | string;
    isLoading: boolean;
  };
  address?: {
    address: string | undefined;
    road_address: string | undefined;
  };
}

const initialState: mapState = {
  marker: {
    position: {
      lat: 36.77322,
      lng: 126.933632,
    },
    errMsg: null,
    isLoading: true,
  },
  address: undefined,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMarker: (state, action) => {
      state.marker = { ...state.marker, ...action.payload };
    },
    setAddress: (state, action) => {
      state.address = { ...state.address, ...action.payload };
    },
    setInit: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setMarker, setAddress, setInit } = mapSlice.actions;
export default mapSlice.reducer;
