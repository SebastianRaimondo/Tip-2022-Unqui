import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { selectAuth } from "../../features/userLogginSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const authState = useSelector(selectAuth);

  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Desarrolladores</Link>
      </li>

      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{" "}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={() => dispatch(logout())} href='#!'>
          <i className='fas fa-sign-out-alt' />{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/profiles'>Desarrolladores</Link>
      </li>
    </ul>
  );

  // const auth = useSelector(selectAuth)

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'> DevConnector</i>
        </Link>
      </h1>
      {!authState.loading && (
        <div>{authState.isAuthenticated ? authLinks : guestLinks}</div>
      )}
    </nav>
  );
};

export default Navbar;
