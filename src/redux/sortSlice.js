import { createSlice } from "@reduxjs/toolkit";
const sortSlice = createSlice({
  name: "sort",
  initialState: {
    sortBy: "",
    sortOrder: "",
  },
  reducers: {
    setSorting: (state, action) => {
      const { sortBy, sortOrder } = action.payload;
      state.sortBy = sortBy;
      state.sortOrder = sortOrder;
    },
    clearSorting: (state) => {
      state.sortBy = "";
      state.sortOrder = "";
    },
  },
});

export const { setSorting, clearSorting } = sortSlice.actions;
export default sortSlice.reducer;
