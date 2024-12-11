import React from "react";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { renderStatusIcon } from "../../utills/iconsRener";

const TaskStatusIcon = (status) => {
  return (
    <Tooltip title={<Typography variant="body1">Status - {status.status}</Typography>}>
      <Avatar>{renderStatusIcon(status)}</Avatar>
    </Tooltip>
  );
};

export default TaskStatusIcon;
