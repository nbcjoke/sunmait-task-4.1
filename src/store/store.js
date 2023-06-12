import { createStore } from "../custom-redux";

import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer);
