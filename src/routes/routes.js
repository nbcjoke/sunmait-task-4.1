import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { PrivateRoute } from "./privateRoute";
import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.HOME}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
    </Routes>
  );
};
