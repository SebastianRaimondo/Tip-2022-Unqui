import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { selectCurrentProfile } from "../../features/profileSlice";
import { selectAuth } from "../../features/userLogginSlice";
import Alert from "../layout/Alert";
import { DashboardActions } from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { deleteAccount } from "../../actions/profile";

const Dashboard = () => {
  const profile = useSelector(selectCurrentProfile);
  const auth = useSelector(selectAuth);


  const dispatch = useDispatch();
  useEffect(() => dispatch(getCurrentProfile()), []);

  return profile.loading && profile.profile === null ? (
    <div className='container'>
      <Spinner />
    </div>
  ) : (
    <div className='container'>
      <Alert />
      <h1 className='large text-primary'> Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'>
          {" "}
          Bienvenido {auth.user && auth.user.name}{" "}
        </i>
      </p>

      {profile.profile !== null ? (
        <div>
          {" "}
          <DashboardActions />
          <Experience experience={profile.profile.experience} />
          <Education education={profile.profile.education} />
          <div className='my-2'>
            <button
              className='btn btn-danger'
              onClick={() => dispatch(deleteAccount())}
            >
              <i className=' fas fa-user'></i>{" "}Eliminar mi cuenta
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>Aun no has creado tu perfil, por favor agrega informacion</p>

          <Link to='/create-profile' className='btn btn-primary my-1'>
            Crear perfil
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
