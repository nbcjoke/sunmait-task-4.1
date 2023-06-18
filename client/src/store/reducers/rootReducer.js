import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./loginReducer";
import opportunitiesReducer from "./opportunitiesReducer";
import signupReducer from "./signupReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  opportunities: opportunitiesReducer,
  signup: signupReducer,
});
