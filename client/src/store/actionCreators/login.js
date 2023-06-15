import api from "../../api/config";

import { loginSlice } from "../reducers/loginReducer";

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginSlice.actions.loginRequest());
      const response = await api.post("/login", {
        username,
        password,
      });
      dispatch(loginSlice.actions.loginSuccess(response));
    } catch (err) {
      dispatch(loginSlice.actions.loginFail(err.message));
    }
  };
