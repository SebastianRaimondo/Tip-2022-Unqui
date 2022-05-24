import axios from "axios";
import { setAlertAction } from "./alert";

export const getCurrentProfile = () => async (dispatch) => {
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

    const res = await axios.get("/api/profile/me", setToken());
    dispatch({
      type: "profile/getProfile",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProfiles = () => async (dispatch) => {
  dispatch({ type: "profile/clearProfile" });
  try {
    const res = await axios.get("/api/profile");
    dispatch({
      type: "profile/getProfiles",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getProfileById = (userId) => async (dispatch) => {
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

    const res = await axios.get(
      `/api/profile/experience/${userId}`,
      setToken()
    );
    dispatch({
      type: "profile/getProfile",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getGithubRepos = (username) => async (dispatch) => {
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

    const res = await axios.get(`/api/profile/github/${username}`, setToken());
    dispatch({
      type: "profile/getRepos",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const clearProfile = () => (dispatch) => {
  dispatch({
    type: "profile/clearProfile",
  });
};

export const createProfile = (formData, history, edit) => async (dispatch) => {
  //console.log(his)

  try {
    const setToken = () => {
      if (localStorage.token) {
        let token = localStorage.token;

        return {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
      }
    };

    //console.log(edit)
    const res = await axios.post("/api/profile", formData, setToken());

    dispatch({
      type: "profile/getProfile",
      payload: res.data,
    });

    //console.log(!edit)

    if (!edit) {
      dispatch(setAlertAction("Perfil creado", "success", 4000));
      return history("/dashboard");
    }
    dispatch(setAlertAction("Perfil actualizado", "success", 4000));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => dispatch(setAlertAction(e.msg, "danger", 4000)));
    }

    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const setToken = () => {
      if (localStorage.token) {
        let token = localStorage.token;

        return {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
      }
    };

    //console.log(edit)
    const res = await axios.put(
      "/api/profile/experience",
      formData,
      setToken()
    );

    dispatch({
      type: "profile/updateProfile",
      payload: res.data,
    });

    dispatch(setAlertAction("Experiencia agregada", "success", 4000));
    dispatch(setAlertAction("Perfil actualizado", "success", 4000));
    return history("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => dispatch(setAlertAction(e.msg, "danger", 4000)));
    }

    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const setToken = () => {
      if (localStorage.token) {
        let token = localStorage.token;

        return {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
      }
    };

    //console.log(edit)
    const res = await axios.put("/api/profile/education", formData, setToken());

    dispatch({
      type: "profile/updateProfile",
      payload: res.data,
    });

    dispatch(setAlertAction("Educacion agregada", "success", 4000));
    dispatch(setAlertAction("Perfil actualizado", "success", 4000));
    return history("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((e) => dispatch(setAlertAction(e.msg, "danger", 4000)));
    }

    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteExperience = (id) => async (dispatch) => {
  try {
    const setToken = () => {
      if (localStorage.token) {
        let token = localStorage.token;

        return {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
      }
    };

    const res = await axios.delete(`/api/profile/experience/${id}`, setToken());

    dispatch({
      type: "profile/updateProfile",
      payload: res.data,
    });

    dispatch(setAlertAction("Experiencia eliminada", "success", 4000));
  } catch (err) {
    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const setToken = () => {
      if (localStorage.token) {
        let token = localStorage.token;

        return {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
        };
      }
    };

    const res = await axios.delete(`/api/profile/education/${id}`, setToken());

    dispatch({
      type: "profile/updateProfile",
      payload: res.data,
    });

    dispatch(setAlertAction("Educacion eliminada", "success", 4000));
  } catch (err) {
    dispatch({
      type: "profile/profileError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("¿Esta seguro? Esto NO puede ser deshecho")) {
    try {
      const setToken = () => {
        if (localStorage.token) {
          let token = localStorage.token;

          return {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          };
        }
      };
      const res = await axios.delete("/api/profile", setToken());

      dispatch({
        type: "profile/clearProfile",
        payload: res.data,
      });

      dispatch({ type: "auth/logout" });

      dispatch(
        setAlertAction(
          "Su cuenta ha sido permanentemente eliminada",
          "success",
          4000
        )
      );
    } catch (err) {
      dispatch({
        type: "profile/profileError",
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
