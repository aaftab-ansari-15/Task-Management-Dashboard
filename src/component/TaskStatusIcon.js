import React from "react";
import PendingIcon from "@mui/icons-material/Pending";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const TaskStatusIcon = ({ status }) => {
  switch (status) {
    case "Completed":
      return (
        <>
          <AssignmentTurnedInIcon color="success" /> Completed
        </>
      );
    case "In-progress":
      return (
        <>
          <EventRepeatIcon color="warning" /> In-progress
        </>
      );
    case "Pending":
      return (
        <>
          <PendingIcon color="error" /> Pending
        </>
      );
    default:
      return null; // Return null or a default icon if status is unknown
  }
};

export default TaskStatusIcon;
