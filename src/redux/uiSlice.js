// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD } from "../constants/componentsName.";

const uiSlice = createSlice({
  name: "modal",
  initialState: {
    mainLayoutComponent: DASHBOARD,
    authComponent: SIGNUP,
    isSidebarVisible: false,
    isDarkMode: false,
    isUpdateTaskForm: false,
    isAddTaskForm: false,
    isCategoryForm: false,
    isTaskInfoOpen: false,
    isTaskAlert: false,
    selectedDate: new Date().toISOString(),
    updateTaskInUserData: {},
    updateTaskInUserData1: {},
    addTaskInUserData: {},
    taskAlertData: {},
  },
  reducers: {
    changeDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
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
      const { alertState, taskAlertData } = action.payload;
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
      state.mainLayoutComponent = action.payload;
    },
    setSelectedDate: (state, action) => {
      const { date } = action.payload;
      state.selectedDate = date;
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
  setSelectedDate,
} = uiSlice.actions;
export default uiSlice.reducer;
