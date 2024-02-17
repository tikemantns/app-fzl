import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: {
        email: null,
        password: null
    },
    register: {}
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state, action) {
            state.login = action.payload;
        },
        register(state, action) {
            state.register = action.payload;
        }
    }
});

export default authSlice;
