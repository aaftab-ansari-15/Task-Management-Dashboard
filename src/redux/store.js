// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import userReducer from "./userSlice";
import allUserReducer from "./allUserSlice";
import tasksReducer from "./tasksSlice";
import filterReducer from "./filterSlice";
import sortReducer from "./sortSlice";
import useFullReducer from "./useFullSlice";
import categoryReducer from "./categorySlice"
import taskTrackTimeReducer from "./taskTrackTime"
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    allUser: allUserReducer,
    user: userReducer,
    tasks: tasksReducer,
    filter: filterReducer,
    sort: sortReducer,
    useFull: useFullReducer,
    category: categoryReducer,
    taskTrackTime: taskTrackTimeReducer,
  },
});
