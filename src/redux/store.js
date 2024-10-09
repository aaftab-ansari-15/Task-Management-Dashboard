// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import allUserReducer from "./allUserSlice";
import tasksReducer from "./tasksSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    allUser: allUserReducer,
    user: userReducer,
    tasks: tasksReducer,
  },
});
