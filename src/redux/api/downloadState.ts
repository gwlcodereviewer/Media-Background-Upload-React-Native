import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface IDownloadDetail {
  url: string;
  name: string;
  isInProgress: boolean;
}

export interface IDownloadState {
  downloadData: IDownloadDetail[];
  downloadingComplete: boolean;
  downloadingUpdate: IDownloadDetail;
  downloadingProgress: number;
}

const initialState: IDownloadState = {
  downloadData: [],
  downloadingComplete: false,
  downloadingUpdate: {
    url: '',
    name: '',
    isInProgress: false
  },
  downloadingProgress: 0,
};

export const downloadSlice = createSlice({
  name: 'download state',
  initialState,
  reducers: {
    setDownloadData: (state, action: PayloadAction<IDownloadDetail[]>) => {
      state.downloadData = action.payload;
    },
    setDownloadingComplete: (state, action: PayloadAction<boolean>) => {
      state.downloadingComplete = action.payload;
    },
    setDownloadingUpdate: (state, action: PayloadAction<IDownloadDetail>) => {
      state.downloadingUpdate = action.payload;
    },
    setDownloadingProgress: (state, action: PayloadAction<number>) => {
      state.downloadingProgress = action.payload;
    },
  },
});

export const {
  setDownloadData,
  setDownloadingComplete,
  setDownloadingUpdate,
  setDownloadingProgress,
} = downloadSlice.actions;

export default downloadSlice.reducer;
