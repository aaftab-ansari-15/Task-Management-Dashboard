import React from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { addTaskForm, changeComponent } from "../../../redux/uiSlice";
import { DASHBOARD } from "../../../constants/componentsName.";
import TasksPanel from "./TasksPanel";

const TasksListOldUI = () => {
  
  const theme = useTheme();
  const dispatch = useDispatch();
  
  //Task Add
  const handleAddTaskClick = () => {
    dispatch(addTaskForm({ formState: true, data: {} }));
  };
  // Goto Dashboard
  const nevigateToDashboard = () => {
    dispatch(changeComponent(DASHBOARD));
  };

  return (
    <Box
      sx={{
        border: `solid 2px ${theme.palette.primary.main}`,
        borderRadius: 2, 
        m: 2,
        padding: 2,
        color: "text.primary",
      }}
    >
      <Box sx={{ height: "150px", display: "flex", overflow: "hidden" }}>
        <Box sx={{ flex: 1 }}>
          <Button
            onClick={handleAddTaskClick}
            sx={{
              mt: 2,
              ml: 2,
              width: "80%",
              height: "80%",
              display: "flex",
            }}
            variant="contained"
            color="success"
          >
            <Typography variant="body1">Add New Task</Typography>
          </Button>
        </Box>
        <Divider
          sx={{
            mx: 2,
            border: `1px solid ${theme.palette.secondary.main}`,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Button
            onClick={nevigateToDashboard}
            sx={{
              mt: 2,
              ml: 2,
              width: "80%",
              height: "80%",
              display: "flex",
              bgcolor: "#0097ff",
              color: "white",
              ":hover": {
                bgcolor: "#1662ec",
              },
            }}
            variant="contained"
          >
            <Typography variant="body1">Dashboard</Typography>
          </Button>
        </Box>
        <Divider
          sx={{
            mx: 2,
            border: `1px solid ${theme.palette.secondary.main}`,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flex: 2,
          }}
        >
          <Box sx={{ ml: 4 }}>
            <Filter />
          </Box>
          <Box sx={{ ml: 4 }}>
            <Sort />
          </Box>
        </Box>
      </Box>
      <TasksPanel />
    </Box>
  );
};

export default TasksListOldUI;
