import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'apiProduct',
    baseQuery: fetchBaseQuery ({baseUrl: 'http://localhost:3002/'}),
 
    endpoints: (builder) => ({})
})