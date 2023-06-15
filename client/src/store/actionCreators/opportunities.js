import api from "../../api/config";

import { opportunitiesSlice } from "../reducers/opportunitiesReducer";

export const getOpportunities = (search) => async (dispatch) => {
  try {
    dispatch(opportunitiesSlice.actions.opportunitiesRequest());
    const response = await api.get("/opportunities", {
      params: { search },
    });
    dispatch(opportunitiesSlice.actions.opportunitiesSuccess(response.data));
  } catch (err) {
    dispatch(opportunitiesSlice.actions.opportunitiesFail(err.message));
  }
};
