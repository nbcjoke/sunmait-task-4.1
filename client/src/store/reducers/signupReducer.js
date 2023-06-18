import { createSlice } from "@reduxjs/toolkit";

import { signup } from "../actionCreators/signup";

const initialState = {
  userData: {},
  isAuth: false,
  isLoading: false,
  error: null,
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
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
      state.error = payload;
    });
  },
});

export default signupSlice.reducer;
