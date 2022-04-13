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
        <a onClick={() => dispatch(logout())} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        {" "}
        <Link to='/register'>Register</Link>
      </li>
      <li>
        {" "}
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <a href='profiles.html'>Developers</a>
      </li>
    </ul>
  );

  // const auth = useSelector(selectAuth)

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'>DevConnector</i>
        </Link>
      </h1>
      {!authState.loading && (
        <Fragment>
          {authState.isAuthenticated ? authLinks : guestLinks}
        </Fragment>
      )}
    </nav>
  );
};

export default Navbar;
