import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {IUserData} from '../../types/utils';

export interface UserState {
  userData: {
    id: number;
    profile_photo_url: string;
    cover_image: string;
    social_type: string;
  };
}

const initialState: UserState = {
  userData: {
    id: 0,
    profile_photo_url: '',
    cover_image: '',
    social_type: '',
  },
};

export const userSlice = createSlice({
  name: 'user state',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
    },
  },
});

export const {setUserData} = userSlice.actions;

export default userSlice.reducer;
