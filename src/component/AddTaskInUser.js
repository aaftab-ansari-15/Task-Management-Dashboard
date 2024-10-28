import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../redux/tasksSlice";
// import { useSelector } from "react-redux";

const defaultTask = {
  taskId: 0,
  userId: "",
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  category: "",
  status: "Pending",
  timeSpent: 0,
};

const AddTaskInUser = () => {
  const [newTask, setNewTask] = useState(defaultTask);
  const [errors, setErrors] = useState(defaultTask);

  const user = useSelector((state) => state.user);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const isFormValid =
    !errors.title &&
    !errors.description &&
    !errors.dueDate &&
    !errors.category &&
    !errors.priority &&
    newTask.title &&
    newTask.description &&
    newTask.dueDate &&
    newTask.category &&
    newTask.priority;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
    switch (name) {
      case "title":
        setErrors({
          ...errors,
          title: value.length > 4 ? "" : "title must be greater than 4",
        });
        break;
      case "description":
        setErrors({
          ...errors,
          description: value.length > 0 ? "" : "description can not be empty",
        });
        break;
      default:
        break;
    }
  };

  const handleAddTaskClick = () => {
    const lastIndex = tasks.tasks.length;
    const updatedTask = {
      ...newTask,
      userId: user.user.email,
      taskId: lastIndex,
    };
    const checkTask = tasks.tasks.find((task) => {
      return (
        task.userId === updatedTask.userId && task.title === updatedTask.title
      );
    });
    if (checkTask && checkTask.userId) {
      console.log("task already exist, title must be unique");
    } else {
      dispatch(addTasks(updatedTask));
      console.log("Task added:", updatedTask);
    }
    setNewTask(defaultTask);
  };

  return (
    <>
      <Box sx={{ mt: 4, mb: 4, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3}>
            {/* Title */}
            <Grid item="true" xs={12} sm={6}>
              <TextField
                margin="dense"
                id="title"
                name="title"
                label="Title"
                type="text"
                fullWidth
                variant="outlined"
                value={newTask.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
              />
            </Grid>

            {/* Description */}
            <Grid item="true" xs={12} sm={6}>
              <TextField
                margin="dense"
                id="description"
                name="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                value={newTask.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>

            {/* Due Date */}
            <Grid item="true" xs={12} sm={6}>
              <TextField
                margin="dense"
                id="dueDate"
                name="dueDate"
                type="date"
                fullWidth
                variant="outlined"
                value={newTask.dueDate}
                onChange={handleChange}
                error={!!errors.dueDate}
                helperText={errors.dueDate}
              />
            </Grid>

            {/* Priority */}
            <Grid item="true" xs={12} sm={6} sx={{ width: "100px" }}>
              <FormControl fullWidth margin="dense">
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select
                  labelId="priority-label"
                  id="priority"
                  name="priority"
                  value={newTask.priority}
                  onChange={handleChange}
                  // error={!!errors.priority}
                  // helperText={errors.priority}
                  label="Priority"
                  fullWidth
                  sx={{ minHeight: "60px", fontSize: "1rem" }} // Increased height and font size
                  inputProps={{ style: { fontSize: "1rem" } }} // Set font size for select input
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Category */}
            <Grid item="true" xs={12} sm={6} sx={{ width: "100px" }}>
              <FormControl fullWidth margin="dense">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={newTask.category}
                  onChange={handleChange}
                  // error={!!errors.category}
                  // helperText={errors.category}
                  label="Category"
                  fullWidth
                  sx={{ minHeight: "60px", fontSize: "1rem" }} // Increased height and font size
                  inputProps={{ style: { fontSize: "1rem" } }} // Set font size for select input
                >
                  <MenuItem value="Work">Work</MenuItem>
                  <MenuItem value="Personal">Personal</MenuItem>
                  <MenuItem value="Study">Study</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {/* Add Button */}
        </Box>
      </Box>
      <Grid container spacing={5}>
        <Grid item="true" xs={6} sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleAddTaskClick}
            fullWidth
            disabled={!isFormValid}
          >
            Add New Task
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddTaskInUser;
