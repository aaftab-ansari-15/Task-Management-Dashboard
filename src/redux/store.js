// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    user: userReducer,
  },
});
