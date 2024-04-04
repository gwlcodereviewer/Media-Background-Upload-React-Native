# redux  
Guide to implement redux toolkit in the React native project, 

## Note about this component
redux component is responsible for implementing redux toolkit in react native project, developer can use this component with small code no need to add other all of the which is needed in react-redux.
WAlready have an API call in redux for reference, use can use it direct. 
## Installation
There  are some react native libraries which we need to install before use

```
$ yarn add react-redux
$ yarn add @reduxjs/toolkit
```

## Usage
In the React class that you want to localize require the component and define the strings object passing to the constructor a simple object containing a language key (i.e. en, it, fr..) and then a list of key-value pairs with the needed localized strings.

Added Provider component import from react-redux 
<Provider store={store}>
  Child item like stack navigator
  </Provider>
```
 > Create a folder redux in the project directory, we have added one folder in redux api in api folder we can create functions for api call as mentioned bellow

```
export const authApi = createApi({
  reducerPath: REDUCER_PATHS.AuthApi,
  baseQuery: fetchBaseQuery({
    baseUrl: configs.baseUrl,
  }),
  endpoints: builder => ({
    loginUser: builder.mutation<ILoginApiResponse, {}>({
      query(data) {
        return {
          url: API_END_POINTS.login,
          method: REQUEST_METHODS.POST,
          body: data,
        };
      },
    }),
  }),
});

export const {useLoginUserMutation} = authApi;
```
> Create one file store in redux folder in which file we need to configureStore and also need to add reducer path
  
```
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {authApi} from './api/authApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```



