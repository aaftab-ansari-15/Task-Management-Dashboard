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
const tasksSlice = createSlice({
  name: "tasks",
  initialState: getLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS),
  reducers: {
    generateTasks: (state, action) => {
      const { data, userId } = action.payload;
      state.push({ userId: userId, tasks: [data] });
      setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state);
    },
    addTask: (state, action) => {
      const { data, userId } = action.payload;
      const userIndex = state.findIndex((user) => user.userId === userId);

      if (userIndex !== -1) {
        // Update tasks for the existing user
        state[userIndex].tasks = [...state[userIndex].tasks, data];
      } else {
        // Add a new user with their first task
        state.push({ userId: userId, tasks: [data] });
      }
      // Persist updated tasks to localStorage
      setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state);
    },
    updateTask: (state, action) => {
      const { data, userId, taskId } = action.payload;
      const userIndex = state.findIndex((user) => user.userId === userId);
      if (userIndex !== -1) {
        // Update tasks for the existing user
        state[userIndex].tasks = state[userIndex].tasks.map((task) =>
          task.taskId === taskId ? { ...task, ...data } : task
        );
        setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    deleteTask: (state, action) => {
      const { userId, taskId } = action.payload;

      const userIndex = state.findIndex((user) => user.userId === userId);
      if (userIndex !== -1) {
        state[userIndex].tasks = state[userIndex].tasks.filter(
          (task) => task.taskId !== taskId
        );
        setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    deleteAllTasks: (state, action) => {
      const { userId } = action.payload;

      // Find the user by userId
      const userIndex = state.findIndex((user) => user.userId === userId);

      if (userIndex !== -1) {
        // Clear all tasks for the specified user
        state[userIndex].tasks = [];

        // Persist the updated state to localStorage
        setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
  },
});

export const { generateTasks, addTask, updateTask, deleteTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
