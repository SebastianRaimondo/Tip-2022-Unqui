import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{school}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{" "}
      {!to ? "ahora" : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
      <strong>Grado:</strong> {degree}
    </p>

    <p>
      <strong>Campo de estudio:</strong> {fieldofstudy}
    </p>
    <p>
      <strong>Descripción:</strong> {description}
    </p>
  </div>
);

export default ProfileEducation;
