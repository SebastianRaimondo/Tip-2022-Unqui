import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './features/alertSlice'
import userReducer from './features/userLogginSlice'


export const store = configureStore({
  reducer:{
    alert: alertReducer,
    auth: userReducer
    
  }
})