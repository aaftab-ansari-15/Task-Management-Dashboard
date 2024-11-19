// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isSideBar: false,
    authComponent: "SignUp",
    darkMode: false,
    isUpdateTaskForm: false,
    isAddTaskForm: false,
    isTaskInfoOpen: false,
    updateTaskInUserData: {},
    updateTaskInUserData1: {},
    componentName: "Dashboard",
  },
  reducers: {
    changeDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setAuthComponent: (state, action) => {
      state.authComponent = action.payload;
    },
    sideBarModal: (state, action) => {
      state.isSideBar = action.payload;
    },
    addTaskFrom: (state, action) => {
      console.log(action.payload);
      state.isAddTaskForm = action.payload;
    },
    updateTaskFrom: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isUpdateTaskForm = arg1;
      state.updateTaskInUserData = arg2;
    },
    taskInfoModal: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isTaskInfoOpen = arg1;
      state.updateTaskInUserData1 = arg2;
    },
    changeComponent: (state, action) => {
      state.componentName = action.payload;
    },
  },
});

export const {
  changeDarkMode,
  setAuthComponent,
  sideBarModal,
  updateTaskFrom,
  addTaskFrom,
  taskInfoModal,
  changeComponent,
} = modalSlice.actions;
export default modalSlice.reducer;
