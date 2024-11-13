// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isSideBar: false,
    isSignUpOpen: false,
    isLoginOpen: false,
    darkMode: false,
    isUpdateTaskForm: false,
    isAddTaskForm: false,
    isTaskInfoOpen: false,
    updateTaskInUserData: {},
    updateTaskInUserData1: {},
    componentName:"MyTasksListOldUi",
  },
  reducers: {
    sideBarModal: (state, action) => {
      state.isSideBar = action.payload;
    },
    openSignUpModal: (state) => {
      state.isSignUpOpen = true;
    },
    closeSignUpModal: (state) => {
      state.isSignUpOpen = false;
    },
    openLoginModal: (state) => {
      state.isLoginOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false;
    },
    changeDarkMode: (state) => {
      state.darkMode = !state.darkMode;
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
      state.componentName = action.payload
    }
  },
});

export const {
  sideBarModal,
  openSignUpModal,
  closeSignUpModal,
  openLoginModal,
  closeLoginModal,
  changeDarkMode,
  updateTaskFrom,
  addTaskFrom,
  taskInfoModal,
  changeComponent,
} = modalSlice.actions;
export default modalSlice.reducer;
