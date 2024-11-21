import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import "../../features/Calendar.css";
import React from "react";
import { DashboardsHeading } from "../../features/DashboardsHeading";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./DashboardsInnerComponents.css";
import { useSelector, useDispatch } from "react-redux";
import { categoryForm } from "../../../redux/modalSlice";
import AddCategory from "../../forms/AddCategory";
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
    dispatch(categoryForm(true))
  }
  return (
    <>
    <AddCategory />
      <DashboardsHeading
        headingName={"Caetegory"}
        className={"bottomGridHeading"}
        width1={"50%"}
        width2={"50%"}
      />
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ overflow: "auto", maxHeight: "200px" }}>
        <List sx={{ width: "100%", bgcolor: "" }}>
          {getCategoryData.length > 0 &&
            getCategoryData.map((data) => {
              return (
                <Box key={data.id}>
                  <ListItem className="ListItemCategory">
                    <Box className="showStyleOnList">
                      <span />
                    </Box>
                    <ListItemAvatar>
                      <Avatar>{renderIcon(data.icon)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data.name} secondary={data.date} />
                  </ListItem>
                  <Divider />
                </Box>
              );
            })}
        </List>
      </Box>
      <Box sx={{ textAlign: "end", mr: 2 }}>
        <Button color="inherit" onClick={handleAddCategory} >
          <AddIcon />
          <Typography variant="body1">Category</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Category;
