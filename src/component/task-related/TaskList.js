import { CheckBox } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const getTasksListData = useSelector((state) => state.useFull.taskListData);
  const handleChange = (e) => {
    // const { name, checked } = e.target;
  };
  return (
    <Box sx={{ p: 1 }}>
      {getTasksListData.map((task, index) => {
        return (
          <Grid key={task.taskId} container spacing={2} sx={{ mx: 1, my: 2 }}>
            <Grid size={1}>
              <CheckBox
                id="taskDone"
                name="taskDone"
                checked={true}
                onChange={handleChange}
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 50 },
                  color: "#e4e236",
                  backgroundColor: "#6757e2",
                }}
              />
            </Grid>
            <Grid size={5}>
              <Typography ml={2} textAlign={"start"} variant="h6">
                {task.title}
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography ml={2} textAlign={"start"} variant="h6">
                {task.status}
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography ml={2} textAlign={"start"} variant="h6">
                {task.dueDate}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default TaskList;
