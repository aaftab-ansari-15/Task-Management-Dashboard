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
      state.userTasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.allUser));
    },
    deleteTasks: (state, action) => {},
    updateTasks: (state, action) => {},
  },
});

export const {} = tasksSlice.actions;
export default tasksSlice.reducer;
