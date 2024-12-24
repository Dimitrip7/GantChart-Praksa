// features/api/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "events",
    }),
    createEvent: builder.mutation({
      query: (newEvent) => ({
        url: "events",
        method: "POST",
        body: newEvent,
      }),
    }),
  }),
});

export const { useGetEventsQuery, useCreateEventMutation } = apiSlice;
