import React from "react";
import { selectAuthState,selectAuthStateLoading } from "../../features/userLogginSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectAuthState)
  const isLoading = useSelector(selectAuthStateLoading)

  console.log(isLoading)
  console.log(isAuthenticated)

  if (!isAuthenticated && !isLoading) {
    return <Navigate replace to='/login' />;
  }
 return children
};

export default PrivateRoute;
