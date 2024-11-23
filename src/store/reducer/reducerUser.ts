import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../index';

interface UserState {
    accessToken: string;
    refreshToken: string;
}

const initialState: UserState = {
    accessToken: '',
    refreshToken: '',
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
        },
        setRefreshToken: (state, action: PayloadAction<string>) => {
            state.refreshToken = action.payload;
        },
    },
});

export const {setAccessToken, setRefreshToken} = user.actions;
export const getAccessToken = (state: RootState) => state.user.accessToken;
export const getRefreshToken = (state: RootState) => state.user.refreshToken;
export default user.reducer;