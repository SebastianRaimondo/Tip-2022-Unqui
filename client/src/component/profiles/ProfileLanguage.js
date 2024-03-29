import React, { Fragment } from 'react';


const ProfileLanguage  = ({
  profile: {
    bio,
    skills,
    user: { name },
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
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i> {skill}
        </div>
      ))}
    </div>
  </div>
);


export default ProfileLanguage;
