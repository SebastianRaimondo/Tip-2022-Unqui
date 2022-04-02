import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './feature/alertSlice'


export const store = configureStore({
  reducer:{
    alert: alertReducer
  }
})