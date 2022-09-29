import axios from "axios";
import { setAlertAction } from "./alert";

///////////////////////////////////////////////////////////////////////////////////////////////
//Get posts
export const getPosts = () => async (dispatch) => {
 
  try {
    const res = await axios.get("/api/posts");
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
  
  try {
    const res = await axios.put(`/api/posts/like/${id}`);

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
  try {
      await axios.delete(`/api/posts/${id}`);

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
  try {
    const res = await axios.post("/api/posts/", formData);

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




// Add comment
export const addComment = (postId,formData) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/posts/comment/${postId}`, formData);

    dispatch({
      type: "post/addComment",
      payload: res.data
    });

    dispatch(setAlertAction("Comentario agregado", "success", 4000));
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};



// Delete comment
export const deleteComment = (postId,commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

    dispatch({
      type: "post/removeComment",
      payload: commentId
    });

    dispatch(setAlertAction("Comentario eliminado", "success", 4000));
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};







//Get post
export const getPost = id => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${id}`);
    dispatch({
      type: "post/getPost",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
