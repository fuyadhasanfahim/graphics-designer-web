import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string | undefined;
    user: object | undefined;
    users: object[];
}

const initialState: AuthState = {
    accessToken: undefined,
    user: undefined,
    users: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
            state.users = [];
        },
        getAllUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { userLoggedIn, userLoggedOut, getAllUsers } = authSlice.actions;
export default authSlice.reducer;
