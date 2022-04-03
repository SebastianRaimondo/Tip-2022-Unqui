
import { v4 as uuid } from "uuid";

export const setAlertAction = (msg, alertType, time) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: "alert/setAlert",
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: "alert/deleteAlert", payload: id }), time);
};
