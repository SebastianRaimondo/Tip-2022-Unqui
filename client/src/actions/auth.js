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

  try {

    const res = await axios.get("/api/auth");
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

