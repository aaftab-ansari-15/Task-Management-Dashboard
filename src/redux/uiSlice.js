// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD, SIGNUP } from "../constants/componentsName.";

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
    updateTaskFormData: {},
    taskInfoData: {},
    addTaskFormData: {},
    taskAlertData: {},
    displayDashboardTasks: [],
    displayMyTasks:[]
  },
  reducers: {
    changeDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    changeComponent: (state, action) => {
      state.mainLayoutComponent = action.payload;
    },
    setAuthComponent: (state, action) => {
      state.authComponent = action.payload;
    },
    sideBarModal: (state, action) => {
      state.isSidebarVisible = action.payload;
    },
    taskInfoModal: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isTaskInfoOpen = arg1;
      state.taskInfoData = arg2;
    },
    taskAlert: (state, action) => {
      const { alertState, taskAlertData } = action.payload;
      state.isTaskAlert = alertState;
      state.taskAlertData = taskAlertData;
    },
    addTaskForm: (state, action) => {
      const { formState, data } = action.payload;
      state.isAddTaskForm = formState;
      state.addTaskFormData = data;
    },
    updateTaskForm: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isUpdateTaskForm = arg1;
      state.updateTaskFormData = arg2;
    },
    categoryForm: (state, action) => {
      state.isCategoryForm = action.payload;
    },
    setSelectedDate: (state, action) => {
      const { date } = action.payload;
      state.selectedDate = date;
    },
    setDashboardTasks: (state, action) => {
      state.displayDashboardTasks = action.payload;
    },
  },
});

export const {
  changeDarkMode,
  setAuthComponent,
  sideBarModal,
  updateTaskForm,
  addTaskForm,
  taskInfoModal,
  categoryForm,
  changeComponent,
  taskAlert,
  setSelectedDate,
  setDashboardTasks,

} = uiSlice.actions;
export default uiSlice.reducer;
