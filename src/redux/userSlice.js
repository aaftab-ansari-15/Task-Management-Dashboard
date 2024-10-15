// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
const userData = JSON.parse(sessionStorage.getItem("user"));
const initialSignUpData = {
  user: userData ? userData : null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialSignUpData,
  reducers: {
    loginUser: (state, action) => {
      const allUserData = JSON.parse(localStorage.getItem("allUser") || "[]");
      const userEmail = action.payload.email;
      allUserData.forEach((user) => {
        if (user.email === userEmail) {
          user.isLogin = true;
        }
      });
      localStorage.setItem("allUser", JSON.stringify(allUserData));

      state.user = action.payload;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOutUser: (state, action) => {
      state.user = null;
      const allUserData = JSON.parse(localStorage.getItem("allUser") || "[]");
      const userEmail = action.payload.email;
      allUserData.forEach((user) => {
        if (user.email === userEmail) {
          user.isLogin = false;
        }
      });
      localStorage.setItem("allUser", JSON.stringify(allUserData));
      sessionStorage.removeItem("user");
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
