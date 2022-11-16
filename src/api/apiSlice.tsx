import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfaces/product";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => "/products",
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        addProduct: builder.mutation({
            query(body) {
                return {
                    url: "/products",
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});
export const { useGetProductsQuery, useGetProductQuery } = productApi;
