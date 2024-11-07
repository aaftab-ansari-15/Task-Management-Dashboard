import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
} from "@mui/material";
const UserTaskTable = ({ usersFilterTasks }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Table Header */}
      <Box
        sx={{
          display: "flex",
          padding: 1,
          bgcolor: "primary.main",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <Typography sx={{ flex: 1, textAlign: "center" }}>Task ID</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Title</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>
          Description
        </Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Category</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Due Date</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Priority</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>Status</Typography>
        <Typography sx={{ flex: 1, textAlign: "center" }}>{""}</Typography>
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
                {task.taskId}
              </Typography>
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
                {task.status}
              </Typography>
              <Typography sx={{ flex: 1, textAlign: "center" }}>
                <MenuIcon />
              </Typography>
            </ListItem>
            {index < usersFilterTasks.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default UserTaskTable;
