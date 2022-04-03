import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state = state.push(action);
    },

    deleteAlert: (state, action) =>
      state.filter((a) => a.payload.id !== action.payload),
  },
});

export default alertSlice.reducer;
export const selectAlert = (state) => state.alert;
