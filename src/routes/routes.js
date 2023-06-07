import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";

import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
    </Routes>
  );
};
