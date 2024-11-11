import { createSlice } from "@reduxjs/toolkit";
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
    clearFilters: (state) => {
      state.priority = "";
      state.category = "";
      state.status = "";
    },
  },
});

export const { setFilters, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
