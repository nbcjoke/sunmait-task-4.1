import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/config";

export const signup = createAsyncThunk(
  "signup",
  async (
    { username, password, confirmPassword, firstname, lastname, age },
    thunkAPI
  ) => {
    try {
      const response = await api.post("/signup", {
        username,
        password,
        confirmPassword,
        firstname,
        lastname,
        age,
      });
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Wrong credentials");
    }
  }
);
