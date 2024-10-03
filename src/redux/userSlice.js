// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialSignUpData = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};
const userSlice = createSlice({
  name: "user",
  initialSignUpData,
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
