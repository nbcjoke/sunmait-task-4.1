import { createSlice } from "@reduxjs/toolkit";

import { login } from "../actionCreators/login";

const initialState = {
  userData: {},
  isAuth: false,
  isLoading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled.type]: (state, { payload }) => {
      state.isAuth = true;
      state.isLoading = false;
      state.userData = payload;
    },
    [login.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default loginSlice.reducer;
