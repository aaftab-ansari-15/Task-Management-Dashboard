// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isSideBar: false,
    authComponent: "SignUp",
    darkMode: false,
    isUpdateTaskForm: false,
    isAddTaskForm: false,
    isTaskInfoOpen: false,
    isCategoryForm: false,
    newCategoryDate: "",
    updateTaskInUserData: {},
    updateTaskInUserData1: {},
    addTaskInUserData: {},
    componentName: "Dashboard",
    
  },
  reducers: {
    changeDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setAuthComponent: (state, action) => {
      state.authComponent = action.payload;
    },
    sideBarModal: (state, action) => {
      state.isSideBar = action.payload;
    },
    addTaskForm: (state, action) => {
      const { formState, data } = action.payload;
      state.isAddTaskForm = formState;
      state.addTaskInUserData = data;
    },
    updateTaskFrom: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isUpdateTaskForm = arg1;
      state.updateTaskInUserData = arg2;
    },
    taskInfoModal: (state, action) => {
      const { arg1, arg2 } = action.payload;
      state.isTaskInfoOpen = arg1;
      state.updateTaskInUserData1 = arg2;
    },
    categoryForm: (state, action) => {
      state.isCategoryForm = action.payload;
      if(action.payload){
        state.newCategoryDate = new Date().toISOString().split('T')[0];
      }
      else{
        state.newCategoryDate = ""
      }
      console.log(state.newCategoryDate)
    },
    changeComponent: (state, action) => {
      state.componentName = action.payload;
    },
  },
});

export const {
  changeDarkMode,
  setAuthComponent,
  sideBarModal,
  updateTaskFrom,
  addTaskForm,
  taskInfoModal,
  categoryForm,
  changeComponent,
} = modalSlice.actions;
export default modalSlice.reducer;
