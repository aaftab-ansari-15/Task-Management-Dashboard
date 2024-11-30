import React from "react";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import ReportIcon from '@mui/icons-material/Report';
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { forwardRef } from "react";
import { colors, Tooltip, Typography } from "@mui/material";
const renderPriorityIcon = (priority) => {
  switch (priority) {
    case "Low":
      return <LowPriorityIcon sx={{ color: "#009900" }} />;
    case "Medium":
      return <PriorityHighIcon sx={{ color: "#004bad" }} />
    case "High":
      return <ReportIcon sx={{color:"#c50000"}} />;
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
