import React, { Fragment } from "react";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profile";
import { useDispatch } from "react-redux";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();
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
        <button
          onClick={() => dispatch(deleteExperience(exp._id))}
          className='btn btn-danger'
        >
          Eliminar
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'> Credenciales de experiencia</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>Compañía</th>
            <th className='hide-sm'>Título</th>
            <th className='hide-sm'>Años</th>
            <th className='hide-sm'>Acción</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
