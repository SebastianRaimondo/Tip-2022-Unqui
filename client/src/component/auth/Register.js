import React from "react";
import { useState } from "react";
import { Link,Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAlertAction } from "../../actions/alert";
import { register } from "../../actions/auth";
import { selectAuthState } from "../../features/userLogginSlice";
import Alert from "../layout/Alert";

export const Register = () => {
  const isAuthenticated = useSelector(selectAuthState);
 // console.log(isAuthenticated)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
   
      dispatch(setAlertAction("Las contraseñas no coinciden", "danger",2000));

    } else {
     dispatch(register({name,email,password}))
    }
  };

 // console.log(isAuthenticatedState)
 if(isAuthenticated){
   return  <Navigate replace to="/dashboard"/>
  }

  return (
    <section className='container'>
      <Alert/>
      <h1 className='large text-primary'>Registrarse</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Crea tu cuenta
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={(e) => onChange(e)}
            value={name}
           
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Correo electronico'
            onChange={(e) => onChange(e)}
            value={email}
          
            name='email'
          />

          <small className='form-text'>
            Este sitio utiliza Gravatar, si quieres una imagen de perfil, puedes
            usar el email de Gravatar
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Contraseña'
            name='password'
            minLength='6'
            onChange={(e) => onChange(e)}
            value={password}
            
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirmar contraseña'
            name='password2'
            minLength='6'
            onChange={(e) => onChange(e)}
            value={password2}
           
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Registrarse' />
      </form>
      <p className='my-1'>
        ¿Ya tienes una cuenta? <Link to='/login'>Ingresar</Link>
      </p>
    </section>
  );
};
