import React, { Fragment } from "react";
import Moment from "react-moment";

const Experience = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Ahora"
        ) : (
          <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger'>Eliminar</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'> Credenciales de experiencia</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>Compañia</th>
            <th className='hide-sm'>Titulo</th>
            <th className='hide-sm'>Años</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
