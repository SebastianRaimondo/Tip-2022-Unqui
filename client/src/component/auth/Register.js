import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import PropTypes from 'prop-types'


const Register = ({setAlert}) => {

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    password2 : ''
  });

  const {name, email, password, password2} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value})


  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Leiva toca cubia","danger");
    } else {

      console.log("hasta aca anda")
    }
  };
  
  return (
   <section className="container">
      <h1 className="large text-primary">Registrarse</h1>
      <p className="lead"><i className="fas fa-user"></i> Crea tu cuenta</p>
      <form className="form" onSubmit={e => onSubmit(e)}>

        <div className="form-group">
          <input type="text"
           placeholder="Nombre" 
           name="name" 
           onChange = {e => onChange(e)}
           value ={name} required />
        



        </div>
        <div className="form-group">
          <input type="email" 
          placeholder="Correo electronico" 
          onChange = {e => onChange(e)}
          value ={email} required 
          name="email" />


          <small className="form-text"
          
            >Este sitio utiliza Gravatar, si quieres una imagen de perfil, puedes usar el email de Gravatar</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            minLength="6"
            onChange = {e => onChange(e)}
            value ={password} required 
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirmar contraseña"
            name="password2"
            minLength="6"
            onChange = {e => onChange(e)}
            value ={password2} required 
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Registrarse" />
      </form>
      <p className="my-1">
        ¿Ya tienes una cuenta? <Link to="/login">Ingresar</Link>
      </p>
    </section>
  );
}

Register.prototype = {
  setAlert : PropTypes.func.isRequired
}


export default connect(null,{setAlert})(Register);
