// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const allUserData = localStorage.getItem("allUser");
let initialAllUserData;
try {
  initialAllUserData = allUserData ? JSON.parse(allUserData) : []; // Ensure to handle the case when allUserData is null
} catch (error) {
  initialAllUserData = []; // Fallback to empty array if parsing fails
}
console.log("Initial allUserData after parsing:", initialAllUserData); //

const userSlice = createSlice({
  name: "allUser",
  initialState: {
    allUser: initialAllUserData,
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = action.payload;
      state.allUser.push(newUser);
      localStorage.setItem("allUser", JSON.stringify(state.allUser));
    },
    removeUserByEmail: (state, action) => {
      const userEmail = action.payload.email;
      state.allUser = state.allUser.filter((user) => user.email !== userEmail);
      localStorage.setItem("allUser", JSON.stringify(state.allUser));
    },
    clearAllUsers: (state) => {
      state.allUser = [];
      localStorage.removeItem("allUser");
    },
  },
});

export const { addUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
