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
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTasks: (state, action) => {},
    deleteTasks: (state, action) => {
      const userId = action.payload.userId;
      const title = action.payload.title;
      state.tasks = state.tasks.filter((task) => !(task.title === title && task.userId === userId));
      console.log(state.tasks)
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTasks, updateTasks, deleteTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
