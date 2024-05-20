import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form-slice',
    initialState: {
        isVisible: false,
    },
    reducers: {
        enableVisibility: (state) => {
            state.isVisible = true;
        },
        disableVisibility: (state) => {
            state.isVisible = false;
        },
    },
});

export const {enableVisibility, disableVisibility} = formSlice.actions;
export default formSlice.reducer;