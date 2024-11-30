import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTaskForm, changeComponent } from "../../../redux/modalSlice";
import { DASHBOARD, MY_TASKS, NOTIFICATIONS } from "../../../constants/componentsName.";
const NavigationPanel = () => {
  const dispatch = useDispatch();
  //Task Add
  const handleAddTaskClick = () => {
    dispatch(addTaskForm({ formState: true, data:{} }));
  };
  const handleNotificationClick = () => {
    dispatch(changeComponent(NOTIFICATIONS));
  };
  const handleDashboardClick = () => {
    dispatch(changeComponent(DASHBOARD));
  };
  const handleTaskListClick = () => {
    dispatch(changeComponent(MY_TASKS));
  };
  return (
    <Box flex={{ xs: "100%", sm: "40%" }}>
      <Box sx={{ display: "flex", my: 2 }}>
        <Box sx={{ width: "60%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleDashboardClick}
            sx={{
              backgroundColor: "#0f9ae9",
              color: "white",
            }}
          >
            <Typography variant="h6">Dashboard</Typography>
          </Button>
        </Box>
        <Box sx={{ width: "40%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleAddTaskClick}
            sx={{
              backgroundColor: "#00a173",
              color: "white",
            }}
          >
            <Typography variant="h6">Add New Task</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", my: 2 }}>
        <Box sx={{ width: "40%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleTaskListClick}
            sx={{
              backgroundColor: "#e90f99",
              color: "white",
            }}
          >
            <Typography variant="h6">Task List</Typography>
          </Button>
        </Box>
        <Box sx={{ width: "60%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleNotificationClick}
            sx={{
              backgroundColor: "#f98715",
              color: "white",
            }}
          >
            <Typography variant="h6">Notifications</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationPanel;
