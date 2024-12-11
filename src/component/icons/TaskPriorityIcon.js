import React from "react";
import { Tooltip, Typography } from "@mui/material";
import { renderPriorityIcon } from "../../utills/iconsRener";

const TaskPriorityIcon = ({ priority }) => {
  return (
    <Tooltip title={<Typography variant="body1">{priority} priority</Typography>}>
      {renderPriorityIcon(priority)}
    </Tooltip>
  );
};

export default TaskPriorityIcon;
