import { configureStore } from '@reduxjs/toolkit';
import formSliceReducer from './formSlice';

export const store = configureStore({
    reducer: {
        form: formSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;