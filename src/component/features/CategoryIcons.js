import React from 'react'
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar } from '@mui/material';

const renderIcon = (icon) => {
    switch (icon) {
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
const CategoryIcons = ({icon}) => {
  return (
    <Avatar>{renderIcon(icon)}</Avatar>
  )
}

export default CategoryIcons
