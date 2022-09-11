import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
  return (
   <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light"
          ><i className="fas fa-user-circle text-primary"></i> Editar Perfil</Link>

        <Link to="/add-experience" className="btn btn-light"
          ><i className="fab fa-black-tie text-primary"></i> Agregar Experiencia</Link>

        <Link to="/add-education" className="btn btn-light">   
         <i className="fas fa-graduation-cap text-primary"></i> Agregar Educacion</Link>

         <Link to="/add-language level" className="btn btn-light">   
         <i className="fas fa-language text-primary"></i> Agregar Nivel de idioma</Link>


      </div>
  );
}
