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
import { AddTask } from "@mui/icons-material";
// import { useSelector } from "react-redux";

const defaultTask = {
  title: "",
  description: "",
  dueDate: "",
  priority: "", // (Low, Medium, High)
  category: "", // (e.g., Work, Personal, Study)
};

const AddTaskInUser = () => {
  const [newTask, setNewTask] = useState(defaultTask);
  const [errors, setErrors] = useState(defaultTask);
  // const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTaskClick = () => {
    console.log("Task added:", newTask);
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
            <Grid item xs={12} sm={6}>
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
                helperText="Incorrect entry."
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12} sm={6}>
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
              />
            </Grid>

            {/* Due Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                margin="dense"
                id="dueDate"
                name="dueDate"
                type="date"
                fullWidth
                variant="outlined"
                value={newTask.dueDate}
                onChange={handleChange}
              />
            </Grid>

            {/* Priority */}
            <Grid item xs={12} sm={6} sx={{ width: "100px" }}>
              <FormControl fullWidth margin="dense">
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select
                  labelId="priority-label"
                  id="priority"
                  name="priority"
                  value={newTask.priority}
                  onChange={handleChange}
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
            <Grid item xs={12} sm={6} sx={{ width: "100px" }}>
              <FormControl fullWidth margin="dense">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={newTask.category}
                  onChange={handleChange}
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
        <Grid item xs={6} sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleAddTaskClick}
            fullWidth
          >
            Add New Task
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddTaskInUser;
