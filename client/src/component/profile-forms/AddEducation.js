import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Link} from "react-router-dom";
import { addEducation } from "../../actions/profile";

const AddEducation = () => {
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

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className='container'>
      <h1 className='large text-primary'>Agregá tu educación</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Agregá tus estudios o bootcamp
      </p>
      <small>* = Campo requerido</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addEducation(formData, history));
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Estudio o Bootcamp'
            name='school'
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Grado o certificación'
            name='degree'
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Campo de estudio'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <h4>Desde</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
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
            Institucion actual
          </p>
        </div>
        <div className='form-group'>
          <h4>Hasta</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Descripción'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className="btn btn-light my-1" to="/dashboard">Regresar</Link>  
      </form>
    </section>
  );
};

export default AddEducation;
