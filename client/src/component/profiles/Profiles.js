import React, { Fragment, useEffect } from "react";
import Spinner from "../layout/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { selectProfiles } from "../../features/profileSlice";
import { getProfiles } from "../../actions/profile";
import { selectLoading } from "../../features/profileSlice";
import ProfileItem from "./ProfileItem"

const Profiles = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const profiles = useSelector(selectProfiles);

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className='large text-primary'>Desarrolladores</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i>
            Busca y conectate con desarrolladores
          </p>

          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4> No se encontraron perfiles</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiles;
