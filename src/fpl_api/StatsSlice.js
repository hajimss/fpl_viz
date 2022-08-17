import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statsApi = createApi({
  reducerPath: "statsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fpl-understat-data.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getTopThree: builder.query({
      query: () => `top_three`,
    }),
  }),
});

export const { useGetTopThreeQuery } = statsApi;
