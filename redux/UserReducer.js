import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    reducers: {
        postDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        postDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        postDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { postDataRequest, postDataSuccess, postDataFailure } = userSlice.actions;

export default userSlice.reducer;
