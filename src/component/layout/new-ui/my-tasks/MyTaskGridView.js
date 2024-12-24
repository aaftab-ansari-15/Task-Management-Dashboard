import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import TaskCategoryIcons from "../../../icons/TaskCategoryIcon";
import { DateRangeIcon } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import { updateTask } from "../../../../redux/tasksSlice";
import { useDispatch } from "react-redux";
import {
  setInProgressTask,
  setIsAnyTaskInProgress,
} from "../../../../redux/uiSlice";

const MyTaskGridView = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const myTasks = useSelector((state) => state.ui.myTasks);
  const isAnyTaskInProgress = useSelector(
    (state) => state.ui.isAnyTaskInProgress
  );
  const inProgressTask = useSelector((state) => state.ui.inProgressTask);
  const handleTaskClick = (task) => {
    if (task.title === inProgressTask.title) {
      alert("This task is alredy in-progress.");
    } else if (task.status === "Pending") {
      // myTasks.find.inprgresstask
      if (isAnyTaskInProgress) {
        alert("Already a task is in-progress remove it first.");
      } else {
        dispatch(setIsAnyTaskInProgress(true));
        dispatch(setInProgressTask(task));
      }
    } else {
      alert("This task is completed.");
    }
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
          gap={3}
          mx={"50px"}
          pt={2}
        >
          {myTasks.map((task, index) => {
            return (
              <Card
                key={index}
                sx={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  minHeight: "300px",
                  bgcolor: "myTaskCard.main",
                  textAlign: "start",
                  cursor: "pointer",
                  "&:hover": { boxShadow: 6 },
                }}
                onClick={() => handleTaskClick(task)}
              >
                <CardContent>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box sx={{ m: 1 }}>
                      <TaskCategoryIcons category={task.category} />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      <DateRangeIcon sx={{ fontSize: "1.2rem" }} />{" "}
                      <Typography
                        sx={{ color: "text.secondary" }}
                        variant="body2"
                      >
                        {task.dueDate}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1 }} />

                  <Box px={1}>
                    <Typography
                      fontWeight={"bolder"}
                      variant="body1"
                      component="div"
                      sx={{ mt: 2 }}
                    >
                      {task.title}
                    </Typography>
                    <Typography sx={{ color: "text.secondary", mt: 1 }}>
                      {task.description}
                    </Typography>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mt: 1,
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
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mt: 1,
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
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mt: 1,
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
                  </Box>
                </CardContent>
              </Card>
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

export default MyTaskGridView;
