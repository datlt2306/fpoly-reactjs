import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
            providesTags: ["Product"],
        }),
        getProduct: builder.query({
            query: (id) => "/products/" + id,
            providesTags: ["Product"],
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: "/products/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: "/products/" + product.id,
                method: "PUT",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useRemoveProductMutation,
    useUpdateProductMutation,
} = productApi;
