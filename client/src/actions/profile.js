import axios from 'axios'

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
    type : 'clearProfile'
  })
}