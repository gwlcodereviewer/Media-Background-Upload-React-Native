import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface SubscriptionState {
  subscriptionStatus: string;
  familyPlanStatus: string;
  isFamilyAdmin?: boolean;
  maxUsersAllowed?: number;
}

const initialState: SubscriptionState = {
  subscriptionStatus: '',
  familyPlanStatus: '',
  isFamilyAdmin: false,
  maxUsersAllowed: 0,
};

export const subscriptionSlice = createSlice({
  name: 'subscriptionState',
  initialState,
  reducers: {
    setSubscriptionStatus: (state, action: PayloadAction<string>) => {
      state.subscriptionStatus = action.payload;
    },
  },
});

export const {
  setSubscriptionStatus,
} = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
