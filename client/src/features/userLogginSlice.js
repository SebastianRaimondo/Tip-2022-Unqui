import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const userlogginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token= action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },


    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token= action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },

    registerFail: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },


    
    loginFail: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },

    logout: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },

    userLoaded: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },

    authErrors: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    
  },
});

export default userlogginSlice.reducer;
export const {userLoaded} = userlogginSlice.actions
export const selectAuth = (state) => state.auth

