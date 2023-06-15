import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./loginReducer";
import opportunitiesReducer from "./opportunitiesReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  opportunities: opportunitiesReducer,
});
