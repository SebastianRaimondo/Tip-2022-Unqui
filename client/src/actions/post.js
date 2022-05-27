import axios from "axios";
import setAuthToken from "../features/utils/setAuthToken";
import { setAlertAction } from "./alert";

///////////////////////////////////////////////////////////////////////////////////////////////
//Get posts
export const getPosts = () => async (dispatch) => {
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
  try {
    const res = await axios.get("/api/posts", setToken());
    dispatch({
      type: "post/getPosts",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add likes
export const addLike = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.put(`/api/posts/like/${id}`);

    console.log(res);
    dispatch({
      type: "post/updateLikes",
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Remove likes

export const removeLike = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: "post/updateLikes",
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete post
export const deletePost = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.delete(`/api/posts/${id}`);

    dispatch({
      type: "post/deletePost",
      payload: id,
    });

    dispatch(setAlertAction("Post eliminado", "success", 4000));
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {

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

  try {
    const res = await axios.post("/api/posts/", formData, setToken());

    dispatch({
      type: "post/addPost",
      payload: res.data
    });

    dispatch(setAlertAction("Post creado", "success", 4000));
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
