import { combineReducers } from "@reduxjs/toolkit";

import opportunitiesReducer from "./opportunitiesReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  opportunities: opportunitiesReducer,
});
