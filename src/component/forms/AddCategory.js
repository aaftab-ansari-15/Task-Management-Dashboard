import { Box, Dialog } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { categoryForm } from "../../redux/modalSlice";

const AddCategory = () => {
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.modal.isCategoryForm);
  const getDate = useSelector((state) => state.modal.newCategoryDate);
  const handleClose = () => {
    dispatch(categoryForm(false));
  };
  console.log(isFormOpen, getDate)
  return (
    <Dialog
      open={isFormOpen}
      onClose={handleClose}
      PaperProps={{
        style: {
          marginTop: "70px",
          borderRadius: "20px",
          border: "3px solid #008f25",
          // height: "50vh",
          width: "40vw",
          overflow: "hidden",
        },
      }}
    >
        <Box>asdada</Box>
    </Dialog>
  );
};
export default AddCategory;
