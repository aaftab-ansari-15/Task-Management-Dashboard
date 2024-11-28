import { createSlice } from "@reduxjs/toolkit";
const initialData = [
  { id:"asd78adx2", name: "Work", icon: "Work", date: "27/11/2024" },
  { id:"asD342fs3", name: "Personal", icon: "Personal", date: "29/11/2024" },
  { id:"ja612a2fa", name: "Study", icon: "Study", date: "18/11/2024" },
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
