// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getSessionStorageData,
  setSessionStorageData,
  removeSessionStorageData,
} from "../storage/sessionStorageUtils";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../storage/localStorageUtils";
const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    curretUser: getSessionStorageData("CurrentUser"),
  },
  reducers: {
    loginUser: (state, action) => {
      const usersData = getLocalStorageData("Users");
      usersData.forEach((user) => {
        if (user.email === action.payload.email) {
          user.isLogin = true;
        }
      });
      state.curretUser = action.payload;
      setLocalStorageData("Users", usersData);
      setSessionStorageData("CurrentUser", action.payload);
    },
    logOutUser: (state, action) => {
      const usersData = getLocalStorageData("Users");
      usersData.forEach((user) => {
        if (user.email === action.payload.email) {
          user.isLogin = false;
        }
      });
      state.curretUser = null;
      setLocalStorageData("Users", usersData);
      removeSessionStorageData("CurrentUser");
    },
  },
});

export const { loginUser, logOutUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
