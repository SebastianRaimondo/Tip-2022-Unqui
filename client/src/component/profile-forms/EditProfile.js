import React,{useState, useEffect} from 'react';
import { Fragment } from 'react';
import { createProfile } from '../../actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../layout/Alert';
import {Link, useNavigate } from 'react-router-dom';
import { getCurrentProfile } from '../../actions/profile';
import { selectCurrentProfile } from '../../features/profileSlice';



const EditProfile = () => {

  const {profile, loading} = useSelector(selectCurrentProfile)
 // const profile = ''
  const history= useNavigate()
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({

    company : '',
    website : '',
    location : '',
    status : '',
    skills : '',
    githubusername : '',
    bio : '',
    twitter : '',
    facebook : '',
    linkedin : '',
    youtube : '',
    instagram : ''
})
//console.log(profile)
//console.log(loading)

const [displaySocialInputs, toggleSocialInputs] = useState(false)

useEffect(() => {

 dispatch(getCurrentProfile());

  setFormData({

   company: loading || !profile.company? '' : profile.company,
   website : loading || !profile.website? '' :profile.website,
   location : loading || !profile.location? '' : profile.location,
   status : loading || !profile.status? '': profile.status,
   skills : loading || !profile.skills? '' : profile.skills.toString(),
   githubusername:
   loading || !profile.githubusername? '' : profile.githubusername,
   bio : loading || !profile.bio? '' : profile.bio,
   twitter: loading || !profile.social? '' : profile.social.twitter,
   facebook : loading || !profile.social? '' : profile.social.facebook,
   linkedin : loading || !profile.social? '' : profile.social.linkedin,
   youtube : loading || !profile.social? '' : profile.social.youtube,
   instagram : loading || !profile.social? '': profile.social.instagram


  })
},[loading])


const {
  company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
} = formData

console.log(formData)

const onChange = e => setFormData({...formData, [e.target.name] : e.target.value})
const edit = true
//const formDataWithSkillsStrings = formData.skills
//console.log(formData)
//console.log(profile.skills.toString())
const onSubmit = e => {
  e.preventDefault();
  dispatch(createProfile(formData,history,edit))
}
//console.log(formData)
  return (
    <section className="container">
      <Alert/>
    <h1 className="large text-primary">
      Edita tu Perfil
    </h1>
    <p className="lead">
      <i className="fas fa-user"></i> Vamos a obtener un poco de informaci??n para hacer su perfil destacado
    </p>
    <small>* = campo requerido</small>
    <form className="form" onSubmit={e => onSubmit(e)}>
      <div className="form-group">
        <select name="status" value={status} onChange={e => onChange(e)}>
          <option value="0">* Seleccione el Status profesional</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor">Instructor or Teacher</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </select>
        <small className="form-text"
          >Danos una idea de d??nde te encuentras en tu carrera</small
        >
      </div>
      <div className="form-group">
        <input type="text" placeholder="Compa??ia" name="company"  value={company} onChange={e => onChange(e)}/>
        <small className="form-text"
          >Podr??a ser su propia empresa o una para la que trabaja</small
        >
      </div>
      <div className="form-group">
        <input type="text" placeholder="Website" name="website" value={website} onChange={e => onChange(e)}/>
        <small className="form-text"
          >Podr??a ser su propio sitio web o el de una empresa</small
        >
      </div>
      <div className="form-group">
        <input type="text" placeholder="Ubicacion" name="location" value={location} onChange={e => onChange(e)} />
        <small className="form-text"
          >Ciudad y provincia (ej.General Belgrano, Bs As)</small
        >
      </div>
      <div className="form-group">
        <input type="text" placeholder="* Habilidades" name="skills" value={skills} onChange={e => onChange(e)}/>
        <small className="form-text"
          >Utilice valores separados por comas (ej.
          HTML,CSS,JavaScript,PHP)</small
        >
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Github Username"
          name="githubusername" value={githubusername} onChange={e => onChange(e)}
        />
        <small className="form-text"
          >Si quieres tus ??ltimos repositorios y un enlace de Github, incluye tu nombre de usuario</small
        >
      </div>
      <div className="form-group">
        <textarea placeholder="Algo corto sobre tu biografia" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
        <small className="form-text">Cu??ntanos un poco sobre ti</small>
      </div>

      <div className="my-2">
        <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
        Agregar enlaces de redes sociales
        </button>
        <span>Opcional</span>
      </div>

{displaySocialInputs && <Fragment>

  <div className="form-group social-input">
        <i className="fab fa-twitter fa-2x"></i>
        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)}/>
      </div>

      <div className="form-group social-input">
        <i className="fab fa-facebook fa-2x"></i>
        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)}/>
      </div>

      <div className="form-group social-input">
        <i className="fab fa-youtube fa-2x"></i>
        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)}/>
      </div>

      <div className="form-group social-input">
        <i className="fab fa-linkedin fa-2x"></i>
        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)}/>
      </div>

      <div className="form-group social-input">
        <i className="fab fa-instagram fa-2x"></i>
        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} />
      </div>
  </Fragment>}


      
      <input type="submit" className="btn btn-primary my-1" />
      <Link className="btn btn-light my-1" to="/dashboard">Regresar</Link>
    </form>
  </section>
  );
}

export default EditProfile;
