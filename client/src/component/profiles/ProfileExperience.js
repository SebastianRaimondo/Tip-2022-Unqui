import React from 'react';
import Moment from "react-moment"

const ProfileExperience = ({
  experience:{company, title, location, current, to, from,description}
}) => 
  
    <div>
      
      <h3 className='text-dark'>{company}</h3>
      <p>
        <Moment format= "YYYY/MM/DD">{from}</Moment> - {!to ? "ahora": <Moment format="YYYY/MM/DD">{to}</Moment>
        
      }
      </p>
      <p>

        <strong> Posicion:</strong>{title}
      </p>
      <p>

        <strong>Descripcion</strong>{description}
      </p>
    </div>



export default ProfileExperience;
