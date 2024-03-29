import React from "react";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
    experience,
  },
}) => {
  let file = "";

  if (experience.length > 0) {
    file = experience[0].file;
  }

  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{name}</h1>
      <p className='lead'>
        {status} {company && <span> en {company}</span>}
      </p>
     
      <img className='round-img-Ptop ' src={`/images/${file}`} alt='' />
      
      <p>{location && <span>{location}</span>}</p>

      <div className='icons my-1'>
        {website && (
          <a
            href={"https://" + website}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fas fa-globe fa-2x'></i>
          </a>
        )}

        {social && social.twitter && (
          <a
            href={"https://" + social.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}

        {social && social.facebook && (
          <a
            href={"https://" + social.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}

        {social && social.linkedin && (
          <a
            href={"https://" + social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        )}

        {social && social.youtube && (
          <a
            href={"https://" + social.youtube}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}

        {social && social.instagram && (
          <a
            href={"https://" + social.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
