import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isAuth: false,
  isLoading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
    },
    loginSuccess(state, { payload }) {
      state.isAuth = true;
      state.isLoading = false;
      state.userData = payload;
    },
    loginFail(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default loginSlice.reducer;
