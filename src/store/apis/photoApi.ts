import { pause } from "@/utils/pause";
import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photoApi = createApi({
    reducerPath: 'photos',
    tagTypes: ['Photo', 'AlbumPhotos'],
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
            fetchPhotos: builder.query({
                providesTags: (result, error, album) => {
                    const tags = result?.map((photo: any) => ({ type: "Photo", id: photo.id })) || []
                    tags.push({ type: "AlbumPhotos", id: album.id });
                    return tags
                },
                query: (album) => {
                    return {
                        url: '/photos',
                        method: "GET",
                        params: {
                            albumId: album.id
                        }
                    }
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "AlbumPhotos", id: album.id }]
                },
                query: (album) => {
                    return {
                        url: "/photos",
                        method: "POST",
                        body: {
                            albumId: album.id,
                            url: faker.image.url({ width: 150, height: 150 }),
                        }
                    }
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, photo) => {
                    return [{ type: "Photo", id: photo.id }]
                },
                query: (photo) => {
                    return {
                        url: `/photos/${photo.id}`,
                        method: "DELETE"
                    }
                }
            })
        }
    }
})
export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photoApi;
export { photoApi }
