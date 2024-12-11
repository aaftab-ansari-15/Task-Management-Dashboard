import React from "react";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { renderPriorityIcon } from "../../utills/iconsRener";

const TaskPriorityIcon = ({ priority }) => {
  return (
    <Tooltip title={<Typography variant="body1">{priority} priority</Typography>}>
      <Avatar>{renderPriorityIcon(priority)}</Avatar>
    </Tooltip>
  );
};

export default TaskPriorityIcon;
