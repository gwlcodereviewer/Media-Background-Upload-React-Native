import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_END_POINTS, REDUCER_PATHS} from '../../constants/server';
import {REQUEST_METHODS} from '../../helpers/constants';
import configs from '../../configs';
import {ILoginApiResponse, IVerifyMobileApiResponse} from '../../types/utils';

/**
 * Name: authApi
 * Desc: Function to manage authentication API calls.
 */
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
    verifyMobile: builder.mutation<IVerifyMobileApiResponse, {}>({
      query(data) {
        return {
          url: API_END_POINTS.verifyMobile,
          method: REQUEST_METHODS.POST,
          body: data,
        };
      },
    }),
  }),
});

export const {useLoginUserMutation, useVerifyMobileMutation} = authApi;
