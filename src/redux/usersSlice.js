// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageData,
  setLocalStorageData,
  removeLocalStorageData,
} from "../storage/localStorageUtils";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: getLocalStorageData("Users"),
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
      setLocalStorageData("Users", state.users);
    },
    updateUser: (state, action) => {
      const updatedUserData = action.payload;
      state.users = state.users.map((user) =>
        user.email === updatedUserData.email
          ? { ...user, ...updatedUserData }
          : user
      );
      setLocalStorageData("Users", state.users);
    },
    deleteUser: (state, action) => {
      const userEmail = action.payload.email;
      state.users = state.users.filter((user) => user.email !== userEmail);
      setLocalStorageData("Users", state.users);
    },
    deleteAllusers: (state) => {
      state.users = [];
      removeLocalStorageData("Users");
    },
  },
});

export const { addUser, updateUser, deleteUser, deleteuserss } =
  usersSlice.actions;
export default usersSlice.reducer;
