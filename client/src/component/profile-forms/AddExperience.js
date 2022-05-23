import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Link} from "react-router-dom";
import { addExperience } from "../../actions/profile";

const AddExperience = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section class='container'>
      <h1 class='large text-primary'>Agrega tu experiencia</h1>
      <p class='lead'>
        <i class='fas fa-code-branch'></i> Agrega categoria de programador o
        desarrollador que hayas tenido
      </p>
      <small>* = campo requerido</small>
      <form
        class='form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addExperience(formData, history));
        }}
      >
        <div class='form-group'>
          <input
            type='text'
            placeholder='* Empleo'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='* Compañia'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='Ubicacion'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <h4>Desde</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Empleo actual
          </p>
        </div>
        <div class='form-group'>
          <h4>Hasta</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div class='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Descripcion del empleo'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' class='btn btn-primary my-1' />
        <Link className="btn btn-light my-1" to="/dashboard">Regresar</Link>
      </form>
    </section>
  );
};

export default AddExperience;
