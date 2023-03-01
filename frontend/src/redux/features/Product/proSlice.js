
import { apiSlice } from './apiSlice';




export const proApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/foods',
           
           
        })

    })
})

export const { useGetProductsQuery } = proApiSlice;








