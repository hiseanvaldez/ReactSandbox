import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const queensApi = createApi({
  reducerPath: "queensApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://queens-api-nsd7.onrender.com/",
  }),
  endpoints: (builder) => ({
    getPuzzle: builder.query({
      query: (size) => `/generate?size=${size}`,
    }),
  }),
});

export const { useGetPuzzleQuery, useLazyGetPuzzleQuery } = queensApi;
