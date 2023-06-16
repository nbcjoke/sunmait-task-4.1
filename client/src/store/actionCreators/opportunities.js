import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/config";

export const getOpportunities = createAsyncThunk(
  "getOpportunities",
  async (search, thunkAPI) => {
    try {
      const response = await api.get("/opportunities", {
        params: { search },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Wrong credentials");
    }
  }
);
