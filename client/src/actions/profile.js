import axios from "axios";
import { setAlertAction } from "./alert";



export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
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
    const res = await axios.get(
      `/api/profile/user/${userId}`
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
    console.log(username)

    const res = await axios.get(`/api/profile/github/${username}`);
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

export const createProfile = (formData, hist, edit) => async (dispatch) => {
  try {
    const res = await axios.post("/api/profile", formData);

    dispatch({
      type: "profile/getProfile",
      payload: res.data,
    });

    if (!edit) {
      dispatch(setAlertAction("Perfil creado", "success", 4000));
      return hist("/dashboard");
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
    const res = await axios.put(
      "/api/profile/experience",formData 
       
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
  
    const res = await axios.put("/api/profile/education", formData);

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

export const addLanguage = (formData, history) => async (dispatch) => {
  try {
    
    const res = await axios.put("/api/profile/language", formData);

    dispatch({
      type: "profile/updateProfile",
      payload: res.data,
    });

    dispatch(setAlertAction("Idioma agregado", "success", 4000));
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
    
    const res = await axios.delete(`/api/profile/experience/${id}`);

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
   
    const res = await axios.delete(`/api/profile/education/${id}`);

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


export const deleteLanguage = (id) => async (dispatch) => {
  try {
   
    const res = await axios.delete(`/api/profile/language/${id}`);

    dispatch({
      type: "profile/updateProfile",
      payload: res.data,
    });

    dispatch(setAlertAction("Idioma eliminado", "success", 4000));
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
      
      const res = await axios.delete("/api/profile");

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
