// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
const userData = JSON.parse(localStorage.getItem("user"));
console.log(userData);
const initialSignUpData = {
  user: userData ? userData : null,
};
console.log(initialSignUpData);
const userSlice = createSlice({
  name: "user",
  initialState: initialSignUpData,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null; // Clear user state
      localStorage.removeItem("user"); // Remove user from localStorage
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
