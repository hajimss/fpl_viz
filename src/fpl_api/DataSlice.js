import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fantasyApi = createApi({
  reducerPath: "fantasyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fantasy-viz-proxy.herokuapp.com/?endpoint=",
  }),
  endpoints: (builder) => ({
    getManagerDataByID: builder.query({
      query: (ID) => `entry/${ID}/`,
    }),
    getManagerHistoryDataByID: builder.query({
      query: (ID) => `entry/${ID}/history/`,
    }),
    getFixtures: builder.query({
      query: () => "fixtures/",
    }),
    getFixturesByEvent: builder.query({
      query: (ev) => `fixtures?event=${ev}`,
    }),
    getGeneralData: builder.query({
      query: () => "bootstrap-static/",
    }),
  }),
});

export const {
  useGetManagerDataByIDQuery,
  useGetManagerHistoryDataByIDQuery,
  useGetFixturesByEventQuery,
  useGetGeneralDataQuery,
} = fantasyApi;
