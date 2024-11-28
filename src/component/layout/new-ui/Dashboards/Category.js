import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { categoryForm } from "../../../../redux/modalSlice";
import AddCategory from "../../../forms/AddCategory";
import { useTheme } from "@emotion/react";
import CategoryIcons from "../../../features/CategoryIcons";
const Category = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const getCategoryData = useSelector((state) => state.category);
  const isFormOpen = useSelector((state) => state.modal.isCategoryForm);

  const handleAddCategory = () => {
    dispatch(categoryForm(true));
  };
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} px={2}>
        <Box>
          <Typography className="bottomGridHeading" variant="h6">
            Caetegory
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Add new category">
            <IconButton
              sx={{ bgcolor: theme.palette.primary.main, borderRadius: 4 }}
              onClick={handleAddCategory}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box
        sx={{
          overflow: "auto",
          maxHeight: "240px",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.text.primary,
            borderRadius: "10px",
          },
        }}
      >
        <List sx={{ width: "100%" }}>
          {getCategoryData.length > 0 &&
            getCategoryData.map((data, index) => {
              return (
                <Box key={data.id}>
                  <ListItem className="ListItemCategory">
                    <Box className="showStyleOnList" />
                    <ListItemAvatar sx={{ ml: 2 }}>
                      <CategoryIcons icon={data.icon} />
                    </ListItemAvatar>
                    <ListItemText primary={data.name} secondary={data.date} />
                  </ListItem>
                  {getCategoryData.length - 1 > index ? (
                    <Divider sx={{}} />
                  ) : (
                    <></>
                  )}
                </Box>
              );
            })}
        </List>
      </Box>
    </>
  );
};

export default Category;
