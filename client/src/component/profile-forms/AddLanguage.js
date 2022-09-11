import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addEducation } from "../../actions/profile";

const AddLanguage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className='container'>
      <h1 className='large text-primary'>Agrega tu nivel de idioma</h1>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEducation(formData, history));
        }}
      >
        <div className='form-group'>
          <label for='language'>
            Elige un idioma de la lista o ingresalo manualmente:
          </label>
          <br></br>
          <input list='languages' name='language' id='language'  placeholder="Idioma"></input>
          <datalist id='languages'>
            <option value='Ingles'></option>
            <option value='Aleman'></option>
            <option value='Italiano'></option>
            <option value='Frances'></option>
            <option value='Portugues'></option>
          </datalist>
        </div>

        <div>
          <label for='Level'>
            Elige un nivel o ingresalo manualmente:
          </label>
          <br></br>
          <input list='levels' name='level' id='level' placeholder="Nivel"></input>
          <datalist id='levels'>
            <option value='Principiante'> </option>
            <option value='Elemental'></option>
            <option value='Bajo-Intermedio'></option>
            <option value='Intermedio'></option>
            <option value='Alto-Intermedio'></option>
            <option value='Avanzado'></option>
          </datalist>
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Regresar
        </Link>
      </form>
    </section>
  );
};

export default AddLanguage;
