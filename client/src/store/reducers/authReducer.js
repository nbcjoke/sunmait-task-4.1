import { createSlice } from "@reduxjs/toolkit";

import { login, signup } from "../actionCreators/auth";

const storedUser = localStorage.getItem("user");

const initialState = {
  userData: storedUser ? JSON.parse(storedUser) : {},
  isAuth: !!localStorage.getItem("token"),
  isLoading: false,
  errors: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unathorized(state) {
      state.isAuth = false;
    },
  },
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
      state.errors = payload;
    });
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      state.isLoading = false;
      state.userData = payload;
    });
    builder.addCase(signup.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default authSlice.reducer;
export const { unathorized } = authSlice.actions;
