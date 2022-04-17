import React from 'react';
import { Navigate } from "react-router-dom";
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
          <a href="register.html" className="btn btn-primary">Sign Up</a>
          <a href="login.html" className="btn btn-light">Login</a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Landing;
