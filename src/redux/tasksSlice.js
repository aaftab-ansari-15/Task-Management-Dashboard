import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../storage/localStorageUtils";
import STORAGE_KEYS from "../constants/storageKey";
const getAllTasks = getLocalStorageData(STORAGE_KEYS.TASKS);
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: getAllTasks,
  },

  reducers: {
    //generateTasks method will only run once when new user Signup for the first time.
    generateTasks: (state, action) => {
      const { data, userId } = action.payload;
      state.allTasks.push({ userId: userId, tasks: data });
      setLocalStorageData(STORAGE_KEYS.TASKS, state.allTasks);
    },
    addTask: (state, action) => {
      const { data, userId } = action.payload;
      const userIndex = state.allTasks.findIndex(
        (user) => user.userId === userId
      );

      if (userIndex !== -1) {
        // Update tasks for the existing user
        state.allTasks[userIndex].tasks = [
          ...state.allTasks[userIndex].tasks,
          data,
        ];
      } else {
        // Add a new user with their first task
        state.allTasks.push({
          userId: userId,
          tasks: [data],
        });
      }
      setLocalStorageData(STORAGE_KEYS.TASKS, state.allTasks);
    },
    updateTask: (state, action) => {
      const { data, userId, taskId } = action.payload;
      const userIndex = state.allTasks.findIndex(
        (user) => user.userId === userId
      );
      if (userIndex !== -1) {
        // Update tasks for the existing user
        state.allTasks[userIndex].tasks = state.allTasks[userIndex].tasks.map(
          (task) => (task.taskId === taskId ? { ...task, ...data } : task)
        );
        setLocalStorageData(STORAGE_KEYS.TASKS, state.allTasks);
        console.log("task updated in local storage");
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    deleteTask: (state, action) => {
      const { userId, taskId } = action.payload;

      const userIndex = state.allTasks.findIndex(
        (user) => user.userId === userId
      );
      if (userIndex !== -1) {
        state.allTasks[userIndex].tasks = state.allTasks[
          userIndex
        ].tasks.filter((task) => task.taskId !== taskId);
        setLocalStorageData(STORAGE_KEYS.TASKS, state.allTasks);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    deleteAllTasks: (state, action) => {
      const { userId } = action.payload;

      const userIndex = state.allTasks.findIndex(
        (user) => user.userId === userId
      );

      if (userIndex !== -1) {
        state.allTasks[userIndex].tasks = [];

        setLocalStorageData(STORAGE_KEYS.TASKS, state.allTasks);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    deleteAccountProccess: (state, action) => {
      const { userId } = action.payload;
      state.allTasks = state.allTasks.filter((task) => task.userId !== userId);
      setLocalStorageData(STORAGE_KEYS.TASKS, state.allTasks);
    },
  },
});

export const {
  generateTasks,
  addTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
  deleteAccountProccess,
} = tasksSlice.actions;
export default tasksSlice.reducer;
