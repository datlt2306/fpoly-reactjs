
import { userReducer } from '@/store/slices/userSlice';
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { albumApi } from './apis/albumApi';
import { photoApi } from './apis/photoApi';
const store = configureStore({
    reducer: {
        user: userReducer,
        [albumApi.reducerPath]: albumApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumApi.middleware, photoApi.middleware)
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export * from './thunks/addUser';
export * from './thunks/deleteUser';
export * from './thunks/fetchUser';

export { useAddAlbumMutation, useFetchAlbumsQuery, useRemoveAlbumMutation } from './apis/albumApi';
export { useAddPhotoMutation, useFetchPhotosQuery, useRemovePhotoMutation } from './apis/photoApi';
export default store;