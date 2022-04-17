import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './features/alertSlice'
import userReducer from './features/userLogginSlice'
import profileReducer from './features/profileSlice'


export const store = configureStore({
  reducer:{
    alert: alertReducer,
    auth: userReducer,
    profile: profileReducer
    
  }
})