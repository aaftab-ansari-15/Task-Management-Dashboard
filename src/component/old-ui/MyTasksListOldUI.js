import React, { useState } from "react";
import ShowUserTasks from "./ShowUserTasks";
import Filter from "./Filter";
import Sort from "./Sort";
import NavigationPanel from "./NavigationPanel";
import defaultTaskData from "../../Data/defaultTasks.json";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addGeneratedTasks } from "../../redux/tasksSlice";
import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Typography } from "@mui/material";
const MyTasksListOldUI = () => {
  // Get the current theme using useTheme hook
  const theme = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [disableGenerateButton, setDisableGenerateButton] = useState(false);

  const handleGenerateTaskClick = () => {
    console.log(defaultTaskData);
    const setUsersDefaultTasks = defaultTaskData.map((task) => ({
      ...task,
      userId: user.email,
    }));
    console.log(setUsersDefaultTasks);
    dispatch(addGeneratedTasks(setUsersDefaultTasks));
    setDisableGenerateButton(true);
  };
  return (
    <Box>
      <Box sx={{ height: "150px", display: "flex", overflow: "hidden" }}>
        <NavigationPanel />
        <Divider
          sx={{
            mr: 2,
            border: `1px solid ${theme.palette.secondary.main}`, // Use secondary color for divider
          }}
        />
        <Box
          sx={{
            width: "40vw",
            display: "flex",
          }}
        >
          <Box sx={{ ml: 4 }}>
            <Filter />
          </Box>
          <Box sx={{ marginLeft: 5 }}>
            <Sort />
          </Box>
        </Box>
        <Divider
          sx={{
            mx: 2,
            border: `1px solid ${theme.palette.secondary.main}`, // Use secondary color for divider
          }}
        />
        <Box sx={{ width: "20vw" }}>
          <Button
            disabled={disableGenerateButton}
            onClick={handleGenerateTaskClick}
            sx={{
              m: 2,
              width: "80%",
              height: "80%",
              display: "flex",
            }}
            variant="contained"
          >
            <Typography variant="h6">Generate-Task</Typography>
          </Button>
        </Box>
      </Box>
      <ShowUserTasks />
    </Box>
  );
};

export default MyTasksListOldUI;
