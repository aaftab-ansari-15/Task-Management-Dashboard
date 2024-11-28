import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Tooltip, Typography } from "@mui/material";

const renderIcon = (icon) => {
  switch (icon) {
    case "Work":
      return <WorkIcon />;
    case "Study":
      return <SchoolIcon />;
    case "Personal":
      return <PersonIcon />;
    default:
      return <AddCircleOutlineIcon />;
  }
};
const CategoryIcons = ({ icon }) => {
  return (
    <Tooltip title={<Typography variant="body1">category</Typography>}>
      <Avatar>{renderIcon(icon)}</Avatar>
    </Tooltip>
  );
};

export default CategoryIcons;
