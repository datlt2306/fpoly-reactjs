import { IUser } from "@/interfaces/user";
import { pause } from "@/utils/pause";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const deleteUser: AsyncThunk<IUser, IUser, {}> = createAsyncThunk('user/deleteUser', async (user: IUser) => {
    await axios.delete(`http://localhost:3000/users/${user.id}`);
    await pause(1000);
    return user;
});

export { deleteUser }