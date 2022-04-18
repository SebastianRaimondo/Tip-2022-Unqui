import axios from 'axios'
import { setAlertAction } from './alert';

export const getCurrentProfile = () => async dispatch => {

  try {
    const setToken = () => {
      if (localStorage.token) {
        let token = localStorage.token;
  
        return {
          headers: {
            "x-auth-token": token,
          },
        };
      }
    };

    const res = await axios.get('/api/profile/me', setToken())
    dispatch({
      type : 'profile/getProfile',
      payload : res.data
    })
  } catch (err) {
    dispatch({
      type : 'profile/profileError',
      payload : {msg : err.response.statusText, status : err.response.status}
    })
  } 
}

export const clearProfile = () => dispatch => {

  dispatch({
    type : 'profile/clearProfile'
  })
}


export const createProfile = (formData,history,edit)=> async dispatch => {
//console.log(his)

  try {

    const setToken = () => {
      if (localStorage.token) {
        let token = localStorage.token;
  
        return {
          headers: {
            'Content-Type' : 'application/json',
            "x-auth-token": token,
          },
        };
      }
    };

    //console.log(edit)
    const res = await axios.post('/api/profile', formData,setToken())

    dispatch({
      type : 'profile/getProfile',
      payload : res.data
    })

    //console.log(!edit)

    if(!edit){

      dispatch(setAlertAction('Perfil creado','success',4000))
      return history('/dashboard')

    }
      dispatch(setAlertAction('Perfil actualizado','success',4000))
    

  } catch (err) {

    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => dispatch(setAlertAction(e.msg, "danger", 4000)));
    }

    dispatch({
      type : 'profile/profileError',
      payload : {msg : err.response.statusText, status : err.response.status}
    })
  }

}