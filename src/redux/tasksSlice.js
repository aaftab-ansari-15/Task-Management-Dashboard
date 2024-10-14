import { createSlice } from "@reduxjs/toolkit";
const tasks = JSON.parse(localStorage.getItem("tasks"));
const initialTasks = {
  tasks: tasks ? tasks : [],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    addTasks: (state, action) => {
      const newTask = action.payload;
      state.tasks = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTasks: (state, action) => {
      const updatedTask =  action.payload;
      const userId = action.payload.userId;
      const title = action.payload.title;
      state.tasks = state.tasks.map((task) => {
        return (task.userId === userId && task.title === title) ? updatedTask : task
      })
      localStorage.setItem("tasks", JSON.stringify(state.tasks));

    },
    deleteTasks: (state, action) => {
      const userId = action.payload.userId;
      const title = action.payload.title;
      state.tasks = state.tasks.filter((task) => !(task.userId === userId && task.title === title));
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTasks, updateTasks, deleteTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
