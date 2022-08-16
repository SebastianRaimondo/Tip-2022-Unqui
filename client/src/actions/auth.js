import axios from "axios";
import { setAlertAction } from "./alert";
import { clearProfile } from "./profile";

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post("api/users", body, config);

      dispatch({
        type: "auth/registerSuccess",
        payload: res.data,
      });
      dispatch(userLoaded());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((e) => dispatch(setAlertAction(e.msg, "danger", 4000)));
      }

      dispatch({
        type: "auth/registerFail",
      });
    }
  };

export const userLoaded = () => async (dispatch) => {

  const setToken = () => {
    if (localStorage.token) {
      let token = localStorage.token;
      console.log(token )

      return {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
    }
  };


 
  try {

  // const res = fetch("api/auth",setToken())
  //  .then(response => response.json())
  //  .then(data => console.log(data));

    //const cacho = (token) => console.log("Viva la patria y lo neegrito leiva") 
    //cacho( axios.get("api/auth",setToken()))

    const res = await axios.get("/api/auth",setToken());

    //console.log("desde el axios" + " " + res.data);

    dispatch({
      type: "auth/userLoaded",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "auth/authErrors",
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  
  try {
    const res = await axios.post("api/auth", body, config);

    dispatch({
      type: "auth/loginSuccess",
      payload: res.data,
    });

    dispatch(userLoaded());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => dispatch(setAlertAction(e.msg, "danger", 4000)));
    }

    dispatch({
      type: "auth/loginFail",
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch(clearProfile())
  dispatch({ type: "auth/logout" });
};

