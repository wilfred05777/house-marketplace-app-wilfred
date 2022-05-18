import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  // const loggedIn = true;

  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    // return <h3>Loadding...</h3>;
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
