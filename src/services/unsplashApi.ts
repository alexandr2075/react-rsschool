import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_KEY, BASE_URL } from '../constants';

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUnsplash: builder.query({
      query: (name) => `${name}/?client_id=${ACCESS_KEY}&per_page=30`,
    }),
    getSearchUnsplash: builder.query({
      query: (valueSearch) => ({
        url: `search/photos?query=${valueSearch}&per_page=30&page=2`,
        headers: {
          authorization: 'Client-ID T_WBzHCyEvDlZ2IItceILiDVrwuhwTVDEg0Oh3QV6ic',
        },
      }),
    }),
  }),
});

export const { useGetUnsplashQuery, useGetSearchUnsplashQuery } = unsplashApi;
