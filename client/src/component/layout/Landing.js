import React from 'react';
import { Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth} from '../../features/userLogginSlice';


const Landing = () => {


  const auth = useSelector(selectAuth)

  if(auth.isAuthenticated){
    return <Navigate replace to='/dashboard' />;
  }


  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Developer Connector</h1>
        <p className="lead">
          Create a developer profile/portfolio, share posts and get help from
          other developers
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
