import { createSlice } from "@reduxjs/toolkit";
const initialData = [
  { id:0, name: "Work", icon: "WorkIcon", date: "27/11/2024" },
  { id:1, name: "Personal", icon: "PersonIcon", date: "29/11/2024" },
  { id:2, name: "Study", icon: "SchoolIcon", date: "18/11/2024" },
];
const categorySlice = createSlice({
  name: "category",
  initialState: initialData,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setFilters } = categorySlice.actions;
export default categorySlice.reducer;
