
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";



const PrivateRoute = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const loading = useSelector(state => state.auth.loading)

//console.log("cargando " + loading)
  //console.log("autenticado " + isAuthenticated )



  if (!isAuthenticated && !loading) {
    return <Navigate replace to='/login' />;
  }
 return <Outlet/>
};

export default PrivateRoute;
