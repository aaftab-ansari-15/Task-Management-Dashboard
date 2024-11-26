import { Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTaskForTaskList } from "../../../../redux/useFullSlice";
import TaskStatusIcon from "../../../features/TaskStatusIcon";
import { addTaskForm } from "../../../../redux/modalSlice";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useTheme } from "@emotion/react";
import { updateTasks } from "../../../../redux/tasksSlice";
const renderPriorityIcon = (priority) => {
  console.log(priority);
  switch (priority) {
    case "Low":
      return <LowPriorityIcon sx={{ color: "#00bf00" }} />;
    case "Medium":
      return <DragHandleIcon sx={{ color: "#ff8400" }} />;
    case "High":
      return <PriorityHighIcon sx={{ color: "#f10000" }} />;
    default:
      return <>!</>;
  }
};
const TaskList = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const getPickUpDate = useSelector((state) => state.useFull.pickUpDate);
  const getTasksListData = useSelector((state) => state.useFull.taskListData);
  const user = useSelector((state) => state.user.user);
  const allTasks = useSelector((state) => state.tasks.tasks);
  const userAllTasks = allTasks.filter((task) => {
    return task.userId === user.email;
  });
  useEffect(() => {
    const getTasks = userAllTasks.filter((task) => {
      return task.dueDate === getPickUpDate;
    });
    dispatch(setTaskForTaskList(getTasks));
  }, [getPickUpDate, allTasks]);
  const handleChange = (e, task) => {
    e.preventDefault();
    const { name, checked } = e.target;
    if (name === "taskDone") {
      const updatedTask = {
        ...task,
        status: checked ? "Completed" : "Pending",
      };
      dispatch(updateTasks(updatedTask));
    }
  };
  const handleTaskClick = (task) => {
    const updatedTask = {
      ...task,
      status: task.status !== "Completed" ? "Completed" : "Pending",
    };
    dispatch(updateTasks(updatedTask));
  };
  const handleAddClick = () => {
    dispatch(
      addTaskForm({ formState: true, data: { dueDate: getPickUpDate } })
    );
  };
  return (
    <>
      <Box
        ml={2}
        mr={4}
        my={1}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography className="bottomGridHeading1" variant="h6">
          My Task ({getTasksListData.length})
        </Typography>
        <Box sx={{ alignItems: "center" }}>
          <Tooltip
            title={
              <Typography variant="body1">
                Create a task for ({getPickUpDate})
              </Typography>
            }
          >
            <IconButton
              sx={{ bgcolor: theme.palette.primary.main, borderRadius: 4 }}
              onClick={handleAddClick}
            >
              <AddIcon sx={{ color: "black" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "230px" }}>
        <Box sx={{ px: 2, py: 1 }}>
          {getTasksListData.length > 0 ? (
            getTasksListData.map((task, index) => {
              return (
                <Box
                  key={task.taskId}
                  onClick={() => handleTaskClick(task)}
                  sx={{
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: theme.palette.primary.light,
                      color: "black",
                    },
                  }}
                  className="dashboard-tasklist-task"
                >
                  <Grid container spacing={2} sx={{ mx: 1, my: 2 }}>
                    <Grid size={2}>
                      {task.status === "Completed" ? (
                        <CheckCircleOutlineIcon
                          sx={{
                            color: theme.palette.primary.dark,
                          }}
                        />
                      ) : (
                        <RadioButtonUncheckedIcon
                          sx={{
                            color: theme.palette.primary.dark,
                          }}
                        />
                      )}
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        title={
                          <Typography variant="body1">{task.title}</Typography>
                        }
                      >
                        <Typography
                          ml={2}
                          textAlign={"start"}
                          variant="body1"
                          sx={{
                            textDecoration:
                              task.status === "Completed"
                                ? "line-through"
                                : "none",
                            textOverflow: "ellipsis", // Shows ellipsis by default
                            whiteSpace: "nowrap", // Prevents text wrapping by default
                            overflow: "hidden", // Hides overflowing text
                          }}
                        >
                          {task.title}
                        </Typography>
                      </Tooltip>
                    </Grid>
                    <Grid size={2}>
                      <Tooltip
                        title={
                          <Typography variant="body1">category</Typography>
                        }
                      >
                        <Typography ml={2} textAlign={"start"} variant="body1">
                          {task.category}
                        </Typography>
                      </Tooltip>
                    </Grid>
                    <Grid size={2}>
                      <Tooltip
                        title={
                          <Typography variant="body1">
                            {task.priority} priority
                          </Typography>
                        }
                      >
                        {renderPriorityIcon(task.priority)}
                      </Tooltip>
                    </Grid>
                    <Grid size={2}>
                      <Tooltip
                        title={
                          <Typography variant="body1">
                            status - {task.status}
                          </Typography>
                        }
                      >
                        <TaskStatusIcon status={task.status} />
                        {/* {"\u00A0"} */}
                        {/* <span>{task.status}</span> */}
                      </Tooltip>
                    </Grid>
                  </Grid>
                  {getTasksListData.length - 1 > index ? <Divider /> : <></>}
                  {/* <Divider /> */}
                </Box>
              );
            })
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography fontSize="x-large" fontWeight="700">
                No Task on this date
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TaskList;
