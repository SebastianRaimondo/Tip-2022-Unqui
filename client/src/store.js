import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './features/alertSlice'
import userReducer from './features/userLogginSlice'
import profileReducer from './features/profileSlice'
import postReducer from "./features/postSlice";


export const store = configureStore({
  reducer:{
    alert: alertReducer,
    auth: userReducer,
    profile: profileReducer,
    post: postReducer
    
  }
})