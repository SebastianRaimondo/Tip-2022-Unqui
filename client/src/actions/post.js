import axios from "axios";
import { setAlertAction } from "./alert";


///////////////////////////////////////////////////////////////////////////////////////////////
//Get posts
export const getPosts =() => async dispatch => {

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
    const res = await axios.get("/api/post",setToken()); 
    dispatch({
      type : "post/getPosts",
      payload: res.data
    })

  } catch (err) {
    

    dispatch({
      type: "post/postError",
      payload: { msg: err.response.statusText, status: err.response.status },
    });


  }


}