import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { addUser, fetchUsers } from "../store";
import { RejectedActionFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { IUser } from "@/interfaces/user";


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
    }
});

export const userReducer = userSlice.reducer;
