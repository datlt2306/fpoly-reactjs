import { pause } from "@/utils/pause";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const deleteUser: AsyncThunk<number | string, number | string, {}> = createAsyncThunk('user/deleteUser', async (id: number | string) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    await pause(1000);
    return id;
});

export { deleteUser }