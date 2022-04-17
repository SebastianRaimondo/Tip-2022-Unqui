import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Fragment } from "react";
import { selectCurrentProfile } from "../../features/profileSlice";
import { selectAuth } from "../../features/userLogginSlice";

const Dashboard = () => {
  const profile = useSelector(selectCurrentProfile);
  const auth = useSelector(selectAuth);

  console.log(profile.loading);
  console.log(profile.profile);

  const dispatch = useDispatch();
  useEffect(() => dispatch(getCurrentProfile()), []);

  return profile.loading && profile.profile === null ? (
    <div className='container'>
      <Spinner />
    </div>
  ) : (
    <div className='container'>
      <h1 className='large text-primary'> Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'>
          {" "}
          Bienvenido {auth.user && auth.user.name}{" "}
        </i>
      </p>

      {profile.profile !== null ? (
        <div className='container'> Tiene perfil </div>
      ) : (
        <div className='container'> No tiene perfil</div>
      )}
    </div>
  );
};

export default Dashboard;
