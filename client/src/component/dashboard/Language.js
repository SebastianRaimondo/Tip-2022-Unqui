import React, { Fragment } from "react";
import {deleteLanguage} from "../../actions/profile";
import { useDispatch } from "react-redux";

const Language = ({ language }) => {
  const dispatch = useDispatch();
  const languages = language.map((lan) => (
    <tr key={lan._id}>
        <td>{lan.school}</td>
      <td>{lan.language}</td>
      <td className='hide-sm'>{lan.level}</td>
      <td>
        <button
          onClick={() => dispatch(deleteLanguage(lan._id))}
          className='btn btn-danger'
        >
          Eliminar
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'> Credenciales de idioma</h2>

      <table className='table'>
        <thead>
          <tr>
            <th>Universidad o institución</th>
            <th className='hide-sm'>Idioma</th>
            <th className='hide-sm'>Nivel</th>
            <th className='hide-sm'>Acción</th>
          </tr>
        </thead>
        <tbody>{languages}</tbody>
      </table>
    </Fragment>
  );
};

export default Language;
