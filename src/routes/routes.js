import { Route, Routes } from "react-router-dom";

import { Home, Login } from "../pages";

import { PrivateRoute } from "./privateRoute";
import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
    </Routes>
  );
};
