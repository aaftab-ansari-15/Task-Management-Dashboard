import { createSlice } from "@reduxjs/toolkit";

const taskTrackTime = createSlice({
  name: "taskTrackTime",
  initialState: {
    currentTask:{},
    taskInProgress:false,
  },
  reducers: {
    updateTaskTrackTimer:(state, action) => {
        const {status, task} = action.payload
        state.currentTask = task;
        state.taskInProgress= status;
    }
  },
});

export const { updateTaskTrackTimer } = taskTrackTime.actions;
export default taskTrackTime.reducer;
