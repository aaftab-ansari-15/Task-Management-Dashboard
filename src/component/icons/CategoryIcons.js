import React from "react";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { renderCategoryIcon } from "../../utills/iconsRener";


const CategoryIcons = ({ category }) => {
  return (
    <Tooltip title={<Typography variant="body1">category</Typography>}>
      <Avatar>{renderCategoryIcon(category)}</Avatar>
    </Tooltip>
  );
};

export default CategoryIcons;
