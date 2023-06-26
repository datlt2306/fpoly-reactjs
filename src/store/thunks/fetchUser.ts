import { IUser } from "@/interfaces/user";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const fetchUsers: AsyncThunk<IUser[], void, {}> = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get<IUser[]>('http://localhost:3000/users');
    await pause(1000);
    return response.data;
})

// Dev Online
const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export { fetchUsers };