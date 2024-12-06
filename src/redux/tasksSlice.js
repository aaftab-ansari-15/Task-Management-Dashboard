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
  initialState: {
    tasks: getLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS),
    currentTask:{},
  },
    
  reducers: {
    generateTasks: (state, action) => {
      const { data, userId } = action.payload;
      state.tasks.push({ userId: userId, tasks: [data] });
      setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state.tasks);
    },
    addTask: (state, action) => {
      const { data, userId } = action.payload;
      const userIndex = state.tasks.findIndex((user) => user.userId === userId);

      if (userIndex !== -1) {
        // Update tasks for the existing user
        state.tasks[userIndex].tasks = [...state.tasks[userIndex].tasks, data];
      } else {
        // Add a new user with their first task
        state.tasks.push({ userId: userId, taskInProgress:false, tasks: [data] });
      }
      // Persist updated tasks to localStorage
      setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state.tasks);
    },
    updateTask: (state, action) => {
      const { data, userId, taskId } = action.payload;
      const userIndex = state.tasks.findIndex((user) => user.userId === userId);
      if (userIndex !== -1) {
        // Update tasks for the existing user
        state.tasks[userIndex].tasks = state.tasks[userIndex].tasks.map((task) =>
          task.taskId === taskId ? { ...task, ...data } : task
        );
        setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state.tasks);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    deleteTask: (state, action) => {
      const { userId, taskId } = action.payload;

      const userIndex = state.tasks.findIndex((user) => user.userId === userId);
      if (userIndex !== -1) {
        state.tasks[userIndex].tasks = state.tasks[userIndex].tasks.filter(
          (task) => task.taskId !== taskId
        );
        setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state.tasks);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    deleteAllTasks: (state, action) => {
      const { userId } = action.payload;

      // Find the user by userId
      const userIndex = state.tasks.findIndex((user) => user.userId === userId);

      if (userIndex !== -1) {
        // Clear all tasks for the specified user
        state.tasks[userIndex].tasks = [];

        // Persist the updated state to localStorage
        setLocalStorageData(STORAGE_KEYS.ALL_USERS_TASKS, state.tasks);
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    },
    taskTrackTimer:(state, action) => {
      const {status, task} = action.payload
      state.currentTask = task;
      state.taskInProgress= status;
  }
  },
});

export const { generateTasks, addTask, updateTask, deleteTask, updateTaskTrackTimer } =
  tasksSlice.actions;
export default tasksSlice.reducer;
