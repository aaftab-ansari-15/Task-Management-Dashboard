import React, { forwardRef } from "react";
import PendingIcon from "@mui/icons-material/Pending";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Box, Tooltip, Typography } from "@mui/material";
const renderPriorityIcon = ({status}) => {
  switch (status) {
    case "Completed":
      return (
          <AssignmentTurnedInIcon color="success" />
      );

    case "In-progress":
      return (
          <EventRepeatIcon color="warning" />
      );
    case "Pending":
      return (
          <PendingIcon color="error" />
      );
    default:
      return <span>!</span>; // Return null or a default icon if status is unknown
  }
};
const TaskStatusIcon = (status) => {
  return (
    <Tooltip
      title={<Typography variant="body1">Status - {status.status}</Typography>}
    >
      {renderPriorityIcon(status)}
    </Tooltip>
  );
};

export default TaskStatusIcon;
