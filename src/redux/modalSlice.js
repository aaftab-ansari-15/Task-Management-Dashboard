// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isSignUpOpen: false,
    isLoginOpen: false,
    taskMode: false,
    updateTaskInUserData: {},
    darkMode: false
  },
  reducers: {
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
      state.darkMode = !state.darkMode
    },
    changeTaskMode: (state, action) => {
      state.taskMode = !state.taskMode
      state.updateTaskInUserData = action.payload
    }
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openLoginModal,
  closeLoginModal,
  changeDarkMode,
  changeTaskMode
} = modalSlice.actions;
export default modalSlice.reducer;
