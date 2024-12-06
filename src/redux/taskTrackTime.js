import { createSlice } from "@reduxjs/toolkit";

const taskTrackTime = createSlice({
  name: "taskTrackTime",
  initialState: {
    currentTask:{},
    taskInProgress:false,
  },
  reducers: {
    
  },
});

export const {  } = taskTrackTime.actions;
export default taskTrackTime.reducer;
