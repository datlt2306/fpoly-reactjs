import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
    } as { isLogin: boolean },
    reducers: {
        login: (state) => {
            state.isLogin = !state.isLogin;
        }
    }
});

export const { login } = authSlice.actions;
export default authSlice.reducer