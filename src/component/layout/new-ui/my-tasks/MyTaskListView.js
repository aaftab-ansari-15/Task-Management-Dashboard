import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TaskCategoryIcons from "../../../icons/TaskCategoryIcon";
import { DateRangeIcon } from "@mui/x-date-pickers";
import { useDispatch } from "react-redux";
import { updateTaskForm } from "../../../../redux/uiSlice";
import { deleteTask } from "../../../../redux/tasksSlice";
const MyTaskListView = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const currentUser = useSelector((state) => state.users.currentUser);
  const myTasks = useSelector((state) => state.ui.myTasks);

  //Task Update
  const handleTaskUpdateClick = (task) => {
    dispatch(updateTaskForm({ arg1: true, arg2: task }));
  };
  //Task Delete
  const handleTaskDeleteClick = (task) => {
    dispatch(deleteTask({ userId: currentUser.email, taskId: task.taskId }));
    console.log("Task Deleted", task);
  };
  return (
    <Box
      sx={{
        maxWidth: "100%",
        overflow: "auto",
        maxHeight: { xs: "200px", sm: "250px", md: "330px" },
        "&::-webkit-scrollbar": {
          width: "0.5rem",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.scrollbar.thumb,
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.scrollbar.track,
          borderRadius: "20px",
        },
      }}
    >
      {myTasks.length > 0 ? (
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          gap={2}
          mx={"30px"}
          mt={1}
        >
          {myTasks.map((task, index) => {
            return (
              <Box
                key={index}
                width={"100%"}
                sx={{
                  bgcolor: "myTaskCard.main",
                  textAlign: "start",
                  borderRadius: 2,
                  boxShadow: 1,
                  p: 2,
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <TaskCategoryIcons category={task.category} />
                      <Typography fontWeight="bold" variant="body1">
                        {task.title}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <DateRangeIcon sx={{ fontSize: "1.2rem" }} />
                      <Typography
                        sx={{ color: "text.secondary" }}
                        variant="body2"
                      >
                        {task.dueDate}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  <Typography sx={{ color: "text.secondary", mb: 1 }}>
                    {task.description}
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box display="flex" gap={2}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <span style={{ color: "orange", fontWeight: "bold" }}>
                          Priority:{" "}
                        </span>
                        {task.priority}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <span style={{ color: "orange", fontWeight: "bold" }}>
                          Status:{" "}
                        </span>
                        {task.status}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        <span style={{ color: "orange", fontWeight: "bold" }}>
                          Time spent:{" "}
                        </span>
                        {task.timeSpent}
                      </Typography>
                    </Box>

                    <Box display="flex" gap={1}>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => handleTaskUpdateClick(task)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleTaskDeleteClick(task)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box sx={{ color: "text.disabled", m: 3 }}>
          <Typography variant="h4">Nothing in here..</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MyTaskListView;
