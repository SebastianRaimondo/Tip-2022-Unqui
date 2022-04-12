import axios from "axios";

const setAuthToken = token => {
  if (token) {

    // Esta verga deberia andar para setear las cabeceras pero no anda porque esta version de axios tiene problemas segun algunos foros de internet
    axios.defaults.headers.common['x-auth-token'] = token;
    //let caca =  axios.defaults.headers.common ['x-auth-token'] = token;
   // console.log(caca)

  }

  delete axios.defaults.headers.common['x-auth-token'];
};

//export default setAuthToken;
