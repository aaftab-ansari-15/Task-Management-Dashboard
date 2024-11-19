import { createSlice } from "@reduxjs/toolkit";

const useFull = createSlice({
  name: "useFull",
  initialState: {
    pickUpDate: new Date().toISOString(),
    taskListData: [],
  },
  reducers: {
    changePickUpDate: (state, action) => {
      state.pickUpDate = action.payload;
    },
    setTaskForTaskList: (state, action) => {
      state.taskListData = action.payload;
    },
  },
});

export const { changePickUpDate, setTaskForTaskList } = useFull.actions;
export default useFull.reducer;
