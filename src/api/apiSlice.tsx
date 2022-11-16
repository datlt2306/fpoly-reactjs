import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../interfaces/product";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => "/products",
            providesTags: ["Products"],
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),
        addProduct: builder.mutation<IProduct, Partial<IProduct>>({
            query(body) {
                return {
                    url: "/products",
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["Products"],
        }),
    }),
});
export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation } = productApi;
