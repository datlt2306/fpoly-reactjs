import { IUser } from "@/interfaces/user";
import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { addUser, fetchUsers, deleteUser } from "../store";


interface UserState {
    data: IUser[];
    isLoading: boolean;
    error: SerializedError | null;
}

const initialState: UserState = {
    data: [],
    isLoading: true,
    error: null
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // FETCH USER
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })


        // ADD USER
        builder.addCase(addUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(addUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.data.push(action.payload);
        })
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })

        // DELETE USER
        builder.addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.data = state.data.filter((user) => user.id != action.payload.id);
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
});

export const userReducer = userSlice.reducer;
