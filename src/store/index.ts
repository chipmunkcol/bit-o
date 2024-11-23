import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from './reducer/reducerSidebar';
import userReducer from './reducer/reducerUser';

const store = configureStore({
    reducer: {
        user: userReducer,
        sidebar: sidebarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;