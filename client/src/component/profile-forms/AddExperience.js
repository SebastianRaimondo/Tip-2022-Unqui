import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addExperience } from "../../actions/profile";
import axios from "axios";

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
    file: "",
  });

  const [image, setImage] = useState("");

  useEffect(() => {
    upload();
  }, [image]);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const upload = () => {
    const formDataUpload = new FormData();

    formDataUpload.append("file", image);

    axios
      .post("/api/upload", formDataUpload)
      .then((res) => setFormData({ ...formData, file: res.data }));
  };

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  return (
    <section className='container'>
      <h1 className='large text-primary'>Agregá tu experiencia</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Agregá categoria de programador o
        desarrollador que hayas tenido
      </p>
      <small>* = Campo requerido</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addExperience(formData, history));
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Empleo'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Compañía'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Ubicación'
            name='location'
            value={location}
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
            Empleo actual
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

        <div className='form-group'></div>

        <h4>Agregar imagen de la empresa</h4>
        <input type='file' name='image' onChange={handleChange} />
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Descripción del empleo'
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Regresar
        </Link>
      </form>
    </section>
  );
};

export default AddExperience;
