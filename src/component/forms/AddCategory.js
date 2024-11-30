import {
  Box,
  Button,
  Dialog,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { categoryForm } from "../../redux/modalSlice";
import {addCategory} from '../../redux/categorySlice'
import CloseIcon from "@mui/icons-material/Close";
const initialCategoryData = {
  id: "",
  name: "",
  icon: "",
  date: new Date().toISOString().split("T")[0],
};
const AddCategory = () => {
  const dispatch = useDispatch();
  const isCategoryFormOpen = useSelector((state) => state.modal.isCategoryForm);
  const categoryData = useSelector((state) => state.category);
  const [newCategory, setNewCategory] = useState(initialCategoryData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
    console.log(name, value);
  };
  function generateRandomID() {
    return (
      Date.now().toString(36) + Math.random().toString(36).substring(2, 7)
    ).substring(0, 7);
  }
  const handleAddClick = () => {
    const lastIndex = categoryData.length + generateRandomID();
    const icon = "defaultIcoon";
    const updatedCategory = {
      ...newCategory,
      id: lastIndex,
      icon: icon,
    };
    console.log(updatedCategory);
    console.log(categoryData);
    dispatch(addCategory(updatedCategory));
    console.log("categoryadded");
    dispatch(categoryForm(false));

  };
  const handleCancelClick = () => {
    dispatch(categoryForm(false));
  };
  return (
    isCategoryFormOpen && (
      <Dialog
        open={isCategoryFormOpen}
        onClose={handleCancelClick}
        PaperProps={{
          style: {
            width: "40vw",
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
          <Typography variant="h5">Add new category</Typography>
        </Box>
        <Divider />
        <Box sx={{ m: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="inherit">New category name</Typography>

            <TextField
              margin="dense"
              id="name"
              name="name"
              label="name"
              type="text"
              fullWidth
              variant="outlined"
              color="info"
              value={newCategory.name}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="inherit">
              Date created (Today's date)
            </Typography>
            <TextField
              margin="dense"
              id="date"
              name="date"
              type="date"
              fullWidth
              variant="outlined"
              color="info"
              value={newCategory.date}
              disabled
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ marginRight: 2, width: "50%" }}>
              <Button
                // sx={{ border:"2px solid #793ee0"}}
                variant="contained"
                color="error"
                fullWidth
                onClick={handleCancelClick}
              >
                <span>Cancel</span> <CloseIcon />
              </Button>
            </Box>
            <Box sx={{ marginLeft: 2, width: "50%" }}>
              <Button
                variant="contained"
                color="success"
                onClick={handleAddClick}
                fullWidth
                sx={{
                  border: "2px solid #388e3c",
                  "&.Mui-disabled": {
                    backgroundColor: "success.main", // Keep the success color
                    color: "white", // Optionally, you can specify the text color too
                  },
                }}
              >
                <span>Add</span>
              </Button>
            </Box>
            
          </Box>
        </Box>
      </Dialog>
    )
  );
};
export default AddCategory;
