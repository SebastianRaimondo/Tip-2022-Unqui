import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
      dispatch(login(email,password))
  };

  //console.log(name)
  //console.log(email)
  //console.log(password)
  //console.log(password2)

  return (
    
    <section className='container'>
      <h1 className='large text-primary'>Ingresar</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Ingresa a tu cuenta
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Correo electronico'
            onChange={(e) => onChange(e)}
            value={email}
            required
            name='email'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Contraseña'
            name='password'
            minLength='6'
            onChange={(e) => onChange(e)}
            value={password}
            required
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Aceptar' />
      </form>
      <p className='my-1'>
        ¿No tienes una cuenta? <Link to='/register'>Registrarse</Link>
      </p>
    </section>
  );
};

export default Login;
