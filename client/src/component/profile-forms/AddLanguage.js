import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addLanguage } from "../../actions/profile";

const AddLanguage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    level: "",
    language: "",
    school: "",
  });

  const dataListLanguage = [
    "Ingles",
    "Aleman",
    "Italiano",
    "Frances",
    "Portugues",
  ];
  const dataListLevel = [
    "Principiante",
    "Elemental",
    "Bajo-Intermedio",
    "Intermedio",
    "Alto-Intermedio",
    "Avanzado",
  ];

  const { level, language, school } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log(level);
  console.log(language);
  console.log(school);

  return (
    <section className='container'>
      <h1 className='large text-primary'>Agrega tu nivel de idioma</h1>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addLanguage(formData, history));
        }}
      >
        <label for='school'>
          ¿En que Universidad o institucion estudiaste?
        </label>
        <br></br>
        <input
          type='text'
          placeholder='Universidad o institucion '
          name='school'
          value={school}
          onChange={(e) => onChange(e)}
        />

        <div className='form-group'>
          <label for='language'>
            Elige un idioma de la lista o ingresalo manualmente:
          </label>
          <br></br>

          <input
            list='languages'
            name='language'
            id='language'
            placeholder='Idioma'
            onChange={(e) => onChange(e)}
          ></input>
          <datalist id='languages'>
            {dataListLanguage.map((op) => (
              <option>{op}</option>
            ))}
          </datalist>
        </div>

        <div>
          <label for='Level'>Elige un nivel o ingresalo manualmente:</label>
          <br></br>
          <input
            list='levels'
            name='level'
            id='level'
            placeholder='Nivel'
            onChange={(e) => onChange(e)}
          ></input>
          <datalist id='levels'>
            {dataListLevel.map((op) => (
              <option>{op}</option>
            ))}
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
