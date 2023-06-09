import { handleActions } from "redux-actions";

import * as actions from "../actions/loginActions";

const initialState = {
  userData: {},
  isLoading: false,
  isAuth: false,
  errors: null,
};

export const loginReducer = handleActions(
  {
    [actions.LOGIN_REQUEST]: (state) => {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    },
  },
  {
    [actions.LOGIN_SUCCESS]: (state, { payload: userData }) => {
      return {
        ...state,
        isAuth: true,
        userData,
      };
    },
  },
  {
    [actions.LOGIN_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload,
        userData: {},
        isAuth: false,
      };
    },
  },
  initialState
);
