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

export const createProfile = (formData,history, edit = false)=> async dispatch => {
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

    
    


    if(!edit){

      dispatch(setAlertAction(edit ? 'Perfil actualizado' : 'Perfil creado','success',2000))

       return history('/dashboard')

        

    }

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