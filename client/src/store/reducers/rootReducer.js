import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
});
