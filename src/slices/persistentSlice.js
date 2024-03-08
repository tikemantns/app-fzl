import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

const persistentSlice = createSlice({
    name: 'persistentSlice',
    initialState,
    reducers: {
        updateUserDetails(state, action){
            state.user = action.payload
        },
        logout(state) {
            state.user = null
        }
    },
});

export const { 
    updateUserDetails,
    logout 
} = persistentSlice.actions

export default persistentSlice;
