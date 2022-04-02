import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const setAlertAction = createAction(
  "alert/setAlert",
  function prepare(msg, alertType) {
    const id = uuid();

    return {
      payload: {
        msg,
        id,
        alertType,
      },
    };
  }
);
