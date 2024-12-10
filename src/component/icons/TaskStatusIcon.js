import React from "react";
import { Tooltip, Typography } from "@mui/material";
import { renderStatusIcon } from "../../utills/iconsRener";

const TaskStatusIcon = (status) => {
  return (
    <Tooltip
      title={<Typography variant="body1">Status - {status.status}</Typography>}
    >
      {renderStatusIcon(status)}
    </Tooltip>
  );
};

export default TaskStatusIcon;
