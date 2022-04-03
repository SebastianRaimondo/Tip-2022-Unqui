import { createSlice } from "@reduxjs/toolkit";

const initialState = {


  token : localStorage.getItem('token'),

  isAuthenticated : null,
  loading : true,
  user : null


};

export const userlogginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    registerSuccess: (state, action) => {


      localStorage.setItem('token', action.payload.token)

      state.payload
      state.isAuthenticated = true,
      state.loading = false
    },

  ///  deleteAlert: (state, action) =>
  ///    state.filter((a) => a.payload.id !== action.payload.id),


  },
});

export default alertSlice.reducer;
export const selectAlert = (state) => state.alert;
