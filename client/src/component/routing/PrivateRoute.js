import React from "react";
import { selectAuthState } from "../../features/userLogginSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectAuthState);

  //console.log(children)

  if (isAuthenticated) {
    return children;
  }
  return <Navigate replace to='/login' />;
};

export default PrivateRoute;
