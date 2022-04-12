import axios from "axios";

const setAuthToken = token => {
  if (token) {

    
    axios.defaults.headers.common['x-auth-token'] = token;
    let caca =  axios.defaults.headers.common ['x-auth-token'] = token;
    console.log(caca)

  }

  delete axios.defaults.headers.common['x-auth-token'];
};

export default setAuthToken;
