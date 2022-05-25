import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";
import { selectCurrentProfile } from "../../features/profileSlice";
import { useParams, Link } from "react-router-dom";
import { selectAuth } from "../../features/userLogginSlice";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const auth = useSelector(selectAuth);
  const profile = useSelector(selectCurrentProfile);
  //console.log(auth.isAuthenticated)
  //console.log(auth.loading)
  useEffect(() => {
    dispatch(getProfileById(id));
  }, []);

  return (
    <div className='container'>
      {profile === null || profile.loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to='/profiles' className='btn bnt-light'>
            Volver a perfiles
          </Link>

          {profile.profile !== null &&
            auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Editar Perfil
              </Link>
            )}

          <div class='profile-grid my-1'>
            {profile.profile !== null && (
              <>
                <ProfileTop profile={profile.profile} />
                <ProfileAbout profile={profile.profile} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
