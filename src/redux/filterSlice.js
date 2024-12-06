import { createSlice } from "@reduxjs/toolkit";
//filter by priority, category, status.
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    priority: "",
    category: "",
    status: "",
  },
  reducers: {
    setFilters: (state, action) => {
      const { priority, category, status } = action.payload;
      state.priority = priority;
      state.category = category;
      state.status = status;
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;
