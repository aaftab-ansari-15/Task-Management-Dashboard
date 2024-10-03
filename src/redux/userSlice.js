// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialSignUpData = { name: "", email: "", password: "" };
const modalSlice = createSlice({
  name: "user",
  initialState: {
    signUpData: initialSignUpData,
  },
  reducers: {
    addUser: (state) => {
      state.isSignUpOpen = true;
      state.signUpData = initialSignUpData;
    },
  },
});

export const { addUser } = modalSlice.actions;
export default modalSlice.reducer;
