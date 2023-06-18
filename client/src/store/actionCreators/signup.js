import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/config";

export const signup = createAsyncThunk(
  "signup",
  async (formValues, thunkAPI) => {
    try {
      const response = await api.post("/signup", {
        formValues,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Wrong credentials");
    }
  }
);
