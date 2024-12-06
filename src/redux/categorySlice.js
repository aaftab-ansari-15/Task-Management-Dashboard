import { createSlice } from "@reduxjs/toolkit";
import defaultCategoryData from "../Data/defaultCategory.json"
const categorySlice = createSlice({
  name: "category",
  initialState: defaultCategoryData,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    deleteCategory:(state, action) => {
      state.pop();
    }
  },
});

export const { addCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;
