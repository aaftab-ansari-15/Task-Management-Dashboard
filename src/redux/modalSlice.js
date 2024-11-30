// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD } from "../constants/componentsName.";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isSideBar: false,
    authComponent: "SignUp",
    darkMode: false,
    isUpdateTaskForm: false,
    isAddTaskForm: false,
    isTaskInfoOpen: false,
    isCategoryForm: false,
    isTaskAlert: false,
    updateTaskInUserData: {},
    updateTaskInUserData1: {},
    addTaskInUserData: {},
    taskAlertData:{},
    componentName: DASHBOARD,
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
    taskInfoModal: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isTaskInfoOpen = arg1;
      state.updateTaskInUserData1 = arg2;
    },
    taskAlert: (state, action) => {
      const  {alertState, taskAlertData} = action.payload;
      state.isTaskAlert = alertState;
      state.taskAlertData = taskAlertData;
    },
    addTaskForm: (state, action) => {
      const { formState, data } = action.payload;
      state.isAddTaskForm = formState;
      state.addTaskInUserData = data;
    },
    updateTaskFrom: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isUpdateTaskForm = arg1;
      state.updateTaskInUserData = arg2;
    },
    categoryForm: (state, action) => {
      state.isCategoryForm = action.payload;
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
  addTaskForm,
  taskInfoModal,
  categoryForm,
  changeComponent,
  taskAlert,
} = modalSlice.actions;
export default modalSlice.reducer;
