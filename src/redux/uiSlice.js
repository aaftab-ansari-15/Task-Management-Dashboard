import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD, SIGNUP } from "../constants/componentsName.";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    //component-render-name
    mainLayoutComponent: DASHBOARD,
    authComponent: SIGNUP,
    //visibility&style-toggle
    isSidebarVisible: false,
    isDarkMode: false,
    //forms-render
    isCategoryForm: false,
    isAddTaskForm: false,
    addTaskFormData: {},
    isUpdateTaskForm: false,
    updateTaskFormData: {},
    isTaskInfoOpen: false,
    taskInfoData: {},
    //alert-toggle
    isTaskAlert: false,
    taskAlertData: {},
    //dashboard-seleceted-date
    selectedDate: new Date().toISOString(),
    //dashboard-tasks
    displayDashboardTasks: [],
    //mytasks-tasks
    myTasks: [],
    //mytask-view-style-name
    myTaskView: "",
    //searched-task-name
    searchFilterText: "",
    //in-progress-task-data
    taskInProgress: false,
    taskInProgressData: {},
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
    addCategoryForm: (state, action) => {
      state.isCategoryForm = action.payload;
    },
    setSelectedDate: (state, action) => {
      const { date } = action.payload;
      state.selectedDate = date;
    },
    setDashboardTasks: (state, action) => {
      state.displayDashboardTasks = action.payload;
    },
    updateTaskTrackTimer: (state, action) => {
      const { status, task } = action.payload;
      state.taskInProgress = status;
      state.taskInProgressData = task;
    },
    setMyTasksForDisplay: (state, action) => {
      state.myTasks = action.payload;
    },
    setMyTaskView: (state, action) => {
      state.myTaskView = action.payload;
    },
    setSearchFilterText: (state, action) => {
      state.searchFilterText = action.payload;
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
  addCategoryForm,
  changeComponent,
  taskAlert,
  setSelectedDate,
  setDashboardTasks,
  updateTaskTrackTimer,
  setMyTasksForDisplay,
  setMyTaskView,
  setSearchFilterText,
} = uiSlice.actions;
export default uiSlice.reducer;
