import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import configs from '../../configs';
import {API_END_POINTS, REDUCER_PATHS} from '../../constants/server';
import {REQUEST_METHODS} from '../../helpers/constants';
import { getApiHeader } from '../../utils';
import { IApiResponse, IListingApiResponse } from '../../types/utils';


/**
 * Name: subscriptionApi
 * Desc: Function to manage subscription API calls.
 */
export const subscriptionApi = createApi({
  reducerPath: REDUCER_PATHS.subscriptionApi,
  baseQuery: fetchBaseQuery({
    baseUrl: configs.baseUrl,
    prepareHeaders: headers => {
      return getApiHeader(headers);
    },
  }),
  endpoints: builder => ({
    getSubscriptionListing: builder.mutation<IListingApiResponse, string>({
      query() {
        return {
          url: API_END_POINTS.subscriptionListing,
          method: REQUEST_METHODS.GET,
        };
      },
    }),
    createSubscription: builder.mutation<IApiResponse, {}>({
      query(data) {
        return {
          url: API_END_POINTS.createSubscription,
          method: REQUEST_METHODS.POST,
          body: data,
        };
      },
    }),
    updateSubscription: builder.mutation<IApiResponse, {}>({
      query(data) {
        return {
          url: API_END_POINTS.updateSubscription,
          method: REQUEST_METHODS.POST,
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetSubscriptionListingMutation,
  useCreateSubscriptionMutation,
  useUpdateSubscriptionMutation,
} = subscriptionApi;
