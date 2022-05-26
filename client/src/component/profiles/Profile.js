import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";
import { selectProfile } from "../../features/profileSlice";
import { useParams, Link } from "react-router-dom";
import { selectAuth } from "../../features/userLogginSlice";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import { Fragment } from "react";
import ProfileExperience from "./ProfileExperience";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const auth = useSelector(selectAuth);
  const profile = useSelector(selectProfile);
  //console.log(auth.isAuthenticated)
 // console.log(profile.profile.experience)
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
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Editar Perfil
              </Link>
            )}

          <div class='profile-grid my-1'>
            {profile !== null && (
              <>
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />

                <div className="profile-exp bg-white p-2">
                  <h2 className="text-primary">Experiencia</h2>
            
                  {profile.experience.length > 0 ? (
                  
                  <Fragment>
                    {profile.experience.map(experience => (
                 
                      <ProfileExperience key={experience._id} experience={experience}/>
                    ))}
                  
                  </Fragment>) : (<h4>No hay experiencias que mostrar</h4>)}

                </div>
              </>
              
            )
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
