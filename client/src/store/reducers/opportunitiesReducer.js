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
  extraReducers: {
    [getOpportunities.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getOpportunities.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.opportunities = payload;
    },
    [getOpportunities.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default opportunitiesSlice.reducer;
