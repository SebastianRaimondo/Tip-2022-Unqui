import React, { Fragment } from "react";
import Moment from "react-moment";

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{" "}
        {edu.to === null ? (
          " Ahora"
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger'>Eliminar</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'> Credenciales de educacion</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>Universidad </th>
            <th className='hide-sm'>Grado</th>
            <th className='hide-sm'>Años</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default Education;
