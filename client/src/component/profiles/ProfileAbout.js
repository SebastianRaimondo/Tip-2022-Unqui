import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
    language,
  },
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 className='text-primary'>Biografia de {name}</h2>
        <p>{bio}</p>
        <div className='line'></div>
      </Fragment>
    )}

    <h2 className='text-primary'>Habilidades</h2>
    <div className='skills'>
      {skills.map((lan, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i> {lan}
        </div>
      ))}
    </div>
    <div className='line'></div>
    <Fragment>
      <h2 className='text-primary'>Idiomas</h2>
      <div className='skills'>
        {language.map((lan, index) => (
          <div key={index} className='p-1'>
            <i className='fas fa-check'></i> {lan.language}
            <i></i> {lan.level}
          </div>
        ))}
      </div>
    </Fragment>
  </div>
);

export default ProfileAbout;
