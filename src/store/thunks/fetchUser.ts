import { IUser } from "@/interfaces/user";
import { pause } from "@/utils/pause";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const fetchUsers: AsyncThunk<IUser[], void, {}> = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get<IUser[]>('http://localhost:3000/users');
    await pause(1000);
    return response.data;
})



export { fetchUsers };