// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import allUserReducer from "./allUserSlice";
import tasksReducer from "./tasksSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    allUser: allUserReducer,
    user: userReducer,
    tasks: tasksReducer,
  },
});
