import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

export const PrivateRoute = ({ children }) => {
  //   const { isAuth } = useSelector((state) => state.login);
  //   return isAuth ? children : <Navigate to={"../" + ROUTE_NAMES.LOGIN} />;
};
