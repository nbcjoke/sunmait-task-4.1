import { createSlice } from "@reduxjs/toolkit";

import { getOpportunities } from "../actionCreators/opportunities";

const initialState = {
  opportunities: [],
  isLoading: false,
  error: null,
};

export const opportunitiesSlice = createSlice({
  name: "opportunities",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getOpportunities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOpportunities.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.opportunities = payload;
    });
    builder.addCase(getOpportunities.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default opportunitiesSlice.reducer;
