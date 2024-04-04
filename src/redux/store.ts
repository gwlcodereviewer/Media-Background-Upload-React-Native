import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authApi } from "./api/authApi";
import subscriptionReducer from "./api/subscriptionState";
import uploadReducer from "./api/uploadState";
import userReducer from "./api/userState";
import downloadReducer from "./api/downloadState";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    subscription: subscriptionReducer,
    upload: uploadReducer,
    download: downloadReducer,
    user: userReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
