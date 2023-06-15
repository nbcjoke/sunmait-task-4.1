import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opportunities: [],
  isLoading: false,
  error: null,
};

export const opportunitiesSlice = createSlice({
  name: "opportunities",
  initialState,
  reducers: {
    opportunitiesRequest(state) {
      state.isLoading = true;
    },
    opportunitiesSuccess(state, { payload }) {
      state.isLoading = false;
      state.opportunities = payload;
    },
    opportunitiesFail(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default opportunitiesSlice.reducer;
