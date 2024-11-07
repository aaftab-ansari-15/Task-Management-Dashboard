import React, { useEffect, useState } from "react";
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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "../redux/tasksSlice";
import { updateTaskFrom } from "../redux/modalSlice";
// import { useSelector } from "react-redux";
const defaultTask = {
  taskId: "",
  userId: "",
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  category: "",
  status: "",
  timeSpent: 0,
};
const UpdateTaskInUser = () => {
  const dispatch = useDispatch();
  const isUpdateTaskForm = useSelector((state) => state.modal.isUpdateTaskForm);
  const userTask = useSelector((state) => state.modal.updateTaskInUserData);
  const [updatedTask, setUpdatedTask] = useState(userTask);
  const [errors, setErrors] = useState(defaultTask);
  useEffect(() => {
    setUpdatedTask(userTask);
  }, [userTask]);

  const isFormValid =
    !errors.description &&
    !errors.dueDate &&
    !errors.category &&
    !errors.priority &&
    updatedTask.title &&
    updatedTask.description &&
    updatedTask.dueDate &&
    updatedTask.category &&
    updatedTask.priority;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
    switch (name) {
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

  const handleUpdateTaskClick = () => {
    dispatch(updateTasks(updatedTask));
    // console.log("Task updated:", updatedTask);
    setUpdatedTask(defaultTask);
    dispatch(updateTaskFrom({ arg1: false, arg2: {} }));
  };
  const handleClose = () => {
    dispatch(updateTaskFrom({ arg1: false, arg2: {} }));
  };

  return (
    <>
      <Dialog
        open={isUpdateTaskForm}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            overflowX: "hidden",
            maxWidth: "70vw",
            width: "inherit",
            border: "solid 2px orange",
          },
        }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 2,
              backgroundColor: "orange",
              color: "white",
            }}
          >
            <h3>Update this task</h3>
          </Box>
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
                  disabled
                  value={updatedTask.title || ""}
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
                  value={updatedTask.description || ""}
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
                  value={updatedTask.dueDate || ""}
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
                    value={updatedTask.priority || ""}
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
              <Grid item="true" xs={12} sm={6} sx={{ width: "100px" }}>
                <FormControl fullWidth margin="dense">
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category"
                    name="category"
                    value={updatedTask.category || ""}
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
              {/* Status */}
              <Grid item="true" xs={12} sm={6} sx={{ width: "100px" }}>
                <FormControl fullWidth margin="dense">
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="status-label"
                    id="status"
                    name="status"
                    value={updatedTask.status || ""}
                    onChange={handleChange}
                    label="status"
                    fullWidth
                    sx={{ minHeight: "60px", fontSize: "1rem" }} // Increased height and font size
                    inputProps={{ style: { fontSize: "1rem" } }} // Set font size for select input
                  >
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="In-progress">In-progress</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
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
              color="warning"
              onClick={handleUpdateTaskClick}
              fullWidth
              disabled={!isFormValid}
            >
              Update Task
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default UpdateTaskInUser;
