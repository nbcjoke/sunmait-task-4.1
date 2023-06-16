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
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.isLoading = false;
      state.userData = payload;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default loginSlice.reducer;
