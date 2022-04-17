import React from "react";
import { selectAuth} from "../../features/userLogginSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector(selectAuth)
  

  //console.log(auth)
  //console.log(auth)


  if (!auth.isAuthenticated && !auth.loading) {
    return <Navigate replace to='/login' />;
  }
 return children
};

export default PrivateRoute;
