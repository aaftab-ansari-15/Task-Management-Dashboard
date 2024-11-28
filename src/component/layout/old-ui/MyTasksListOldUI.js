import React, { useState } from "react";
import ShowUserTasks from "./ShowUserTasks";
import Filter from "./Filter";
import Sort from "./Sort";
import defaultTaskData from "../../../Data/defaultTasks.json";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addGeneratedTasks } from "../../../redux/tasksSlice";
import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { addTaskForm } from "../../../redux/modalSlice";
import NavigationPanel from "./NavigationPanel";
const MyTasksListOldUI = () => {
  // Get the current theme using useTheme hook
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [disableGenerateButton, setDisableGenerateButton] = useState(false);

  const handleGenerateTaskClick = () => {
    const setUsersDefaultTasks = defaultTaskData.map((task) => ({
      ...task,
      userId: user.email,
    }));
    dispatch(addGeneratedTasks(setUsersDefaultTasks));
    setDisableGenerateButton(true);
  };
  //Task Add
  const handleAddTaskClick = () => {
    dispatch(addTaskForm({ formState:true, data:{} }));
  };
  return (
   
    <Box sx={{
      border: `solid 2px ${theme.palette.primary.main}`,
      borderRadius:2, // Use primary color from theme
      m: 2,
      padding: 2,
      color: "text.primary",
    }}>
      <Box sx={{ height: "150px", display: "flex", overflow: "hidden" }}>
      {/* <Box sx={{ flex: 1 }}><NavigationPanel /></Box> */}
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
            border: `1px solid ${theme.palette.secondary.main}`, // Use secondary color for divider
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Button
            disabled={disableGenerateButton}
            onClick={handleGenerateTaskClick}
            sx={{
              mt: 2,
              ml: 2,
              width: "80%",
              height: "80%",
              display: "flex",
              bgcolor:"#0097ff",
              color:"white",
              ":hover":{
                bgcolor:"#1662ec",
              }
            }}
            variant="contained"
          >
            <Typography variant="body1">Generate-Task</Typography>
          </Button>
        </Box>
        <Divider
          sx={{
            mx: 2,
            border: `1px solid ${theme.palette.secondary.main}`, // Use secondary color for divider
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
        <Box sx={{ marginLeft: 5 }}>
          <Sort />
        </Box>
      </Box>
      </Box>

      <ShowUserTasks />
    </Box>
  );
};

export default MyTasksListOldUI;
