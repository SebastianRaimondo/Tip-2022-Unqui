import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => (
  <div class='profile-about bg-light p-2'>
    {bio && (
      <Fragment>
        <h2 class='text-primary'>Biografia de {name}</h2>
        <p>{bio}</p>
        <div class='line'></div>
      </Fragment>
    )}

    <h2 class='text-primary'>Skill Set</h2>
    <div class='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i> {skill}
        </div>
      ))}
    </div>
  </div>
);

export default ProfileAbout;
