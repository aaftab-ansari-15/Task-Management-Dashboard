import React from "react";
import { useDispatch } from "react-redux";
import { deleteTasks } from "../../../redux/tasksSlice";
import { taskInfoModal, updateTaskFrom } from "../../../redux/modalSlice";
import TaskInfo from "./TaskInfo";
import {
  List,
  ListItem,
  Box,
  Divider,
  Button,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const UserTaskTable = ({ usersFilterTasks }) => {
  const dispatch = useDispatch();

  //Task Update
  const handleTaskUpdateClick = (task) => {
    dispatch(updateTaskFrom({ arg1: true, arg2: task }));
  };

  //Task Delete
  const handleTaskDeleteClick = (task) => {
    dispatch(deleteTasks(task));
    console.log("task deleted", task);
  };
  const openTaskInfo = (task) => {
    dispatch(taskInfoModal({ arg1: true, arg2: task }));
  };
  return (
    <Box sx={{ width: "100%" }}>
      {/* Table Header */}
      <Box
        sx={{
          display: "flex",
          padding: 1,
          bgcolor: "secondary.main",
          fontWeight: "bold",
        }}
      >
        <Typography sx={{ flex: 1, textAlign: "center" }}>Title</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Description</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Category</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Due Date</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Priority</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Pinned</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Status</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Update</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Delete</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Information</Typography>
      </Box>

      {/* Task List */}
      <List>
        {usersFilterTasks.map((task, index) => (
          <Box
            key={task.taskId}
            sx={{
              display: "flex",
              padding: 1,
            }}
          >
            <ListItem>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {task.title}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {task.description}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {task.category}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {task.dueDate}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {task.priority}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {`${task.pinned}`}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                {task.status}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => handleTaskUpdateClick(task)}
                >
                  Update
                </Button>
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleTaskDeleteClick(task)}
                >
                  Delete
                </Button>
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                <Tooltip title="Info">
                  <IconButton onClick={() => openTaskInfo(task)}>
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Typography>
            </ListItem>
            {index < usersFilterTasks.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
      <TaskInfo />
    </Box>
  );
};

export default UserTaskTable;
