import {
  Avatar,
  Box,
  Button,
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
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import { categoryForm } from "../../../../redux/modalSlice";
import AddCategory from "../../../forms/AddCategory";
const Category = () => {
  const dispatch = useDispatch();
  const getCategoryData = useSelector((state) => state.category);
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "WorkIcon":
        return <WorkIcon />;
      case "SchoolIcon":
        return <SchoolIcon />;
      case "PersonIcon":
        return <PersonIcon />;
      default:
        return <AddCircleOutlineIcon />;
    }
  };
  console.log(getCategoryData);
  const handleAddCategory = () => {
    dispatch(categoryForm(true));
  };
  return (
    <>
      <AddCategory />

      <Box display={"flex"} justifyContent={"space-between"} px={2}>
        <Box>
          <Typography className="bottomGridHeading" variant="h6">
            Caetegory
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Add new category">
            <IconButton color="inherit" onClick={handleAddCategory}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ overflow: "auto", maxHeight: "250px" }}>
        <List sx={{ width: "100%" }}>
          {getCategoryData.length > 0 &&
            getCategoryData.map((data, index) => {
              return (
                <Box key={data.id}>
                  <ListItem className="ListItemCategory">
                    <Box className="showStyleOnList" />
                    <ListItemAvatar sx={{ ml: 2 }}>
                      <Avatar>{renderIcon(data.icon)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data.name} secondary={data.date} />
                  </ListItem>
                  {getCategoryData.length - 1 > index ? (
                    <Divider sx={{ }} />
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
