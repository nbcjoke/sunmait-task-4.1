import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/config";

export const login = createAsyncThunk(
  "login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await api.post("/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (err) {
      return thunkAPI.rejectWithValue("Wrong credentials");
    }
  }
);

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
      const errors = err.response.data.errors.reduce((result, error) => {
        return { ...result, [error.path]: error.msg };
      }, {});
      return thunkAPI.rejectWithValue(errors);
    }
  }
);
