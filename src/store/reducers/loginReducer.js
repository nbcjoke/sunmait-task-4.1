import { handleActions } from "redux-actions";

import * as actions from "../actions/loginActions";

const initialState = {
  userData: {},
  isAuth: false,
};

export const loginReducer = handleActions(
  {
    [actions.LOGIN_SUCCESS]: (state, { payload: userData }) => {
      return {
        ...state,
        isAuth: true,
        userData,
      };
    },
  },
  initialState
);
