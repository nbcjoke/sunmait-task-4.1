import { combineReducers } from "../../custom-redux";

import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
});
