import React from 'react';
import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth} from '../../features/userLogginSlice';


const Landing = () => {


  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if(isAuthenticated){
    return <Navigate replace to='/dashboard' />;
  }


  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Developer Connector</h1>
        <p className="lead">
          Crea un perfil/portfolio de desarrollador, comparte posts e interactua con otros desarrolladores
        </p>
        <div className="buttons">
        <Link to='/register' className="btn btn-primary">Registrate</Link>
        <Link to='/login' className="btn btn-light">Inicia sesion</Link>
    
        </div>
      </div>
    </div>
  </section>
  );
}

export default Landing;
