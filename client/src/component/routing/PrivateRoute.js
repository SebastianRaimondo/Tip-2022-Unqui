import React from "react";
import { selectAuth } from "../../features/userLogginSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(selectAuth).isAuthenticated;
  const isLoading = useSelector(selectAuth).isLoading

  //console.log(children)

  if (isAuthenticated && !isLoading) {
    return children;
  }
  return <Navigate replace to='/login' />;
};

export default PrivateRoute;
