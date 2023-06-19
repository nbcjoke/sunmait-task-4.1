import { createAsyncThunk } from "@reduxjs/toolkit";

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
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Wrong credentials");
    }
  }
);
