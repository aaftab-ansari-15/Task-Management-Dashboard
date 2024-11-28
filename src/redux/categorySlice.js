import { createSlice } from "@reduxjs/toolkit";
const initialData = [
  { id:"asd78adx2", name: "Work", icon: "WorkIcon", date: "27/11/2024" },
  { id:"asD342fs3", name: "Personal", icon: "PersonIcon", date: "29/11/2024" },
  { id:"ja612a2fa", name: "Study", icon: "SchoolIcon", date: "18/11/2024" },
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

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
