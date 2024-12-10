// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import tasksReducer from "./tasksSlice";
import uiReducer from "./uiSlice";
import filterReducer from "./filterSlice";
import sortReducer from "./sortSlice";
import categoryReducer from "./categorySlice"
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    users: usersReducer,
    tasks: tasksReducer,
    category: categoryReducer,
    filter: filterReducer,
    sort: sortReducer,
  },
});
