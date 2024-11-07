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
    updateTaskInUserData: {},
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
      console.log(action.payload);
      const { arg1, arg2 } = action.payload;
      state.isUpdateTaskForm = arg1;
      state.updateTaskInUserData = arg2;
    },
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
} = modalSlice.actions;
export default modalSlice.reducer;
