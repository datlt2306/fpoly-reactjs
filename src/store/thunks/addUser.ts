import { IUser } from "@/interfaces/user";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { faker } from '@faker-js/faker';


const addUser: AsyncThunk<IUser, void, {}> = createAsyncThunk('user/addUsers', async () => {
    const response = await axios.post<IUser>('http://localhost:3000/users', {
        name: faker.name.fullName()
    });
    await pause(1000);
    return response.data;
})

// Dev Online
const pause = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export { addUser };