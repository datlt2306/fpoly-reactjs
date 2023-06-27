import { pause } from '@/utils/pause';
import { faker } from '@faker-js/faker';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumApi = createApi({
    reducerPath: 'albums',
    tagTypes: ['Album', 'UserAlbums'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        // fake a network latency of 1s
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),

    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result?.map((album: any) => ({ type: "Album", id: album.id })) || []
                    tags.push({ type: "UserAlbums", id: user.id });
                    console.log(tags);
                    return tags
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: "GET",
                        params: {
                            userId: user.id
                        },
                    }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: "UserAlbums", id: user.id }]
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: {
                            userId: user.id,
                            name: faker.commerce.productName()
                        }
                    }
                }
            }),

            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "Album", id: album.id }]
                }, query: (album) => {
                    return {
                        url: `/albums/${album.id}`,
                        method: "DELETE"
                    }
                }
            })
        }
    }
})
export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumApi;
export { albumApi }

