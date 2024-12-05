// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageData,
  setLocalStorageData,
  removeLocalStorageData,
} from "../storage/localStorageUtils";
import {
  getSessionStorageData,
  setSessionStorageData,
  removeSessionStorageData,
} from "../storage/sessionStorageUtils";
import STORAGE_KEYS from "../constants/storageKey";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: getLocalStorageData(STORAGE_KEYS.USERS),
    curretUser: getSessionStorageData(STORAGE_KEYS.CURRENT_USER),
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
      setLocalStorageData(STORAGE_KEYS.USERS, state.users);
    },
    updateUser: (state, action) => {
      const updatedUserData = action.payload;
      state.users = state.users.map((user) =>
        user.email === updatedUserData.email
          ? { ...user, ...updatedUserData }
          : user
      );
      setLocalStorageData(STORAGE_KEYS.USERS, state.users);
    },
    deleteUser: (state, action) => {
      const userEmail = action.payload.email;
      state.users = state.users.filter((user) => user.email !== userEmail);
      setLocalStorageData(STORAGE_KEYS.USERS, state.users);
    },
    deleteAllusers: (state) => {
      state.users = [];
      removeLocalStorageData(STORAGE_KEYS.USERS);
    },
    loginUser: (state, action) => {
      const usersData = getLocalStorageData(STORAGE_KEYS.USERS);
      usersData.forEach((user) => {
        if (user.email === action.payload.email) {
          user.isLogin = true;
        }
      });
      state.curretUser = action.payload;
      setLocalStorageData(STORAGE_KEYS.USERS, usersData);
      setSessionStorageData(STORAGE_KEYS.CURRENT_USER, action.payload);
    },
    logOutUser: (state, action) => {
      const usersData = getLocalStorageData(STORAGE_KEYS.USERS);
      usersData.forEach((user) => {
        if (user.email === action.payload.email) {
          user.isLogin = false;
        }
      });
      state.curretUser = null;
      setLocalStorageData(STORAGE_KEYS.USERS, usersData);
      removeSessionStorageData(STORAGE_KEYS.CURRENT_USER);
    },
  },
});

export const {
  addUser,
  updateUser,
  deleteUser,
  deleteuserss,
  loginUser,
  logOutUser,
} = usersSlice.actions;
export default usersSlice.reducer;
