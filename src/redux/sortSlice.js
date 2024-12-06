import { createSlice } from "@reduxjs/toolkit";
//Sorting by Due date, Priority and ascending & Descending order.
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
  },
});

export const { setSorting } = sortSlice.actions;
export default sortSlice.reducer;
