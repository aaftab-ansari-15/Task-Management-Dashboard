import React from "react";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { forwardRef } from "react";
import { Tooltip, Typography } from "@mui/material";
const renderPriorityIcon = (priority) => {
  switch (priority) {
    case "Low":
      return <LowPriorityIcon sx={{ color: "#00bf00" }} />;
    case "Medium":
      return <DragHandleIcon sx={{ color: "#ff8400" }} />;
    case "High":
      return <PriorityHighIcon sx={{ color: "#f10000" }} />;
    default:
      return <span>!</span>;
  }
};
const TaskPriorityIcon = ({ priority }) => {
  return (
    <Tooltip
      title={
        <Typography variant="body1">{priority} priority</Typography>
      }
    >
      {renderPriorityIcon(priority)}
    </Tooltip>
  );
};

export default TaskPriorityIcon;
