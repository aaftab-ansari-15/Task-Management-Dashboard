import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Collapse, IconButton } from "@mui/material";
import { taskAlert } from "../../redux/uiSlice";
import { updateTask } from "../../redux/tasksSlice";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const TaskAlert = () => {
  const dispatch = useDispatch();
  const isTaskAlertOpen = useSelector((state) => state.ui.isTaskAlert);
  const alertTask = useSelector((state) => state.ui.taskAlertData);
  const handleCompleteTask = () => {
    const updatedTask = {
      ...alertTask,
      status: alertTask.status !== "Completed" ? "Completed" : "Pending",
    };
    dispatch(updateTask(updatedTask));
    dispatch(taskAlert({ alertState: false, taskAlertData: {} }));
  };
  const handleAlertClose = () => {
    dispatch(taskAlert({ alertState: false, taskAlertData: {} }));
  };
  return (
    <Collapse
      in={isTaskAlertOpen}
      sx={{
        textOverflow: "ellipsis", // Shows ellipsis by default
        whiteSpace: "nowrap", // Prevents text wrapping by default
        overflow: "hidden", // Hides overflowing text
      }}
    >
      <Alert
        severity={alertTask.status === "Completed" ? "warning" : "success"}
        action={
          <>
            <IconButton
              size="small"
              color="success"
              onClick={handleCompleteTask}
            >
              <CheckIcon />
            </IconButton>
            <IconButton size="small" color="error" onClick={handleAlertClose}>
              <CloseIcon />
            </IconButton>
          </>
        }
      >
        Do you want to make this task{" "}
        {alertTask.status === "Completed" ? "pending" : "completed"}:{" "}
        {alertTask.title}
      </Alert>
    </Collapse>
  );
};

export default TaskAlert;
