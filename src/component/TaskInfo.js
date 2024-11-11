import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { deleteTasks } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";
import { updateTaskFrom } from "../redux/modalSlice";
import UpdateTaskInUser from "./UpdateTaskInUser";
import Counter from "./Counter"
const TaskCard = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  border: "2px solid #f7246e",
  padding: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
  },
}));
const TaskInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { task } = location.state || {};
  const allTasks = useSelector((state) => state.tasks.tasks);
  const task1 = allTasks.find((t) => t.taskId === task.taskId);

  console.log(task1);
  useEffect(() => {}, []);
  const handleUpdateClick = () => {
    dispatch(updateTaskFrom({ arg1: true, arg2: task }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTasks(task1));
    console.log("task deleted", task1);
  };
  if (!task1) {
    return <p>No task found</p>;
  }
  return (
    <>
      <center>
        <UpdateTaskInUser />

        <Box sx={{ width: "100%", maxWidth: "700px", margin: "auto", mt: 4 }}>
          <TaskCard>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#f7246e", fontWeight: "bold" }}
            >
              Task Information
            </Typography>

            <Divider sx={{ marginBottom: 2 }} />

            <Grid container spacing={3}>
              {/* Left Column (4 fields) */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Task ID:
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {task1.taskId}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Title:
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {task1.title}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Category:
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {task1.category}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Priority:
                </Typography>
                <Chip
                  label={task1.priority}
                  color={
                    task1.priority === "High"
                      ? "error"
                      : task1.priority === "Medium"
                      ? "warning"
                      : "success"
                  }
                />
              </Grid>

              {/* Right Column (4 fields) */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Description:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "gray", whiteSpace: "pre-line" }}
                >
                  {task1.description}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Due Date:
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {new Date(task1.dueDate).toLocaleDateString()}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Status:
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {task1.status}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Time Spent:
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  <Counter task={task1}/>
                </Typography>
              </Grid>

              {/* Bottom Section for Assigned User */}
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginRight: 2 }}
                    onClick={handleUpdateClick}
                  >
                    Update
                  </Button>
                </Box>

                <Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Assigned User:
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {task.userId}
                  </Typography>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleDeleteClick}
                  >
                    Delete
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </TaskCard>
        </Box>
      </center>
    </>
  );
};

export default TaskInfo;
