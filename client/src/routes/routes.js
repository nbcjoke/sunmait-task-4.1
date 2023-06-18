import { Route, Routes } from "react-router-dom";

import { Home, Login, Signup } from "../pages";

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
      <Route path={ROUTE_NAMES.SIGNUP} element={<Signup />} />
    </Routes>
  );
};
