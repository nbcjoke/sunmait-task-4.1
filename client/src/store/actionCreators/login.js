import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/config";

export const login = createAsyncThunk("login", async (formValues, thunkAPI) => {
  try {
    const response = await api.post("/login", {
      formValues,
    });
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue("Wrong credentials");
  }
});
