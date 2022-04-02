import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const deleteAlertAction = createAction(
  "alert/deleteAlert",
  function prepare(id) {
    return {
      payload: {
        id: id,
      },
    };
  }
);
