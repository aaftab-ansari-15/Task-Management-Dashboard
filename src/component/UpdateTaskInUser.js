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
  Typography,
  Divider,
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
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";

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
        PaperProps={{
          style: {
            marginTop:"50px",
            borderRadius: "20px",
            border: "3px solid #eba64e",
            // height: "50vh",
            width: "40vw",
            overflow: "hidden",
          },
        }}
      >
        {isUpdateTaskForm && (
          <>
            <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  flexGrow: 2,
                }}
              >
                <Typography variant="h5">Update task</Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ mx: "15%", my: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="inherit">Task Name</Typography>

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
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="inherit">Task Description</Typography>

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
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}
              >
                <Box sx={{ width: "-webkit-fill-available", mr: 1 }}>
                  <FormControl fullWidth margin="dense">
                    <InputLabel id="priority-label">Priority</InputLabel>
                    <Select
                      labelId="priority-label"
                      id="priority"
                      name="priority"
                      defaultValue=""
                      value={updatedTask.priority || ""}
                      onChange={handleChange}
                      label="Priority"
                      fullWidth
                    >
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: "-webkit-fill-available", mx: 1 }}>
                  <FormControl fullWidth margin="dense">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                      labelId="category-label"
                      id="category"
                      name="category"
                      defaultValue=""
                      value={updatedTask.category || ""}
                      onChange={handleChange}
                      // error={!!errors.category}
                      // helperText={errors.category}
                      label="Category"
                      fullWidth
                    >
                      <MenuItem value="Work">Work</MenuItem>
                      <MenuItem value="Personal">Personal</MenuItem>
                      <MenuItem value="Study">Study</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: "-webkit-fill-available", ml: 1 }}>
                  <FormControl fullWidth margin="dense">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                      labelId="status-label"
                      id="status"
                      name="status"
                      defaultValue=""
                      value={updatedTask.status || ""}
                      onChange={handleChange}
                      label="status"
                      fullWidth
                    >
                      <MenuItem disabled value="Pending">
                        Pending
                      </MenuItem>
                      <MenuItem disabled value="In-progress">
                        In-progress
                      </MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography variant="inherit">Task Due Date</Typography>

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
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ marginRight: 2, width: "50%" }}>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={handleUpdateTaskClick}
                    fullWidth
                    disabled={!isFormValid}
                    sx={{
                      border: "2px solid #f57c00",
                      "&.Mui-disabled": {
                        backgroundColor: "warning.main", // Keep the success color
                        color: "white", // Optionally, you can specify the text color too
                      },
                    }}
                  >
                    <span>Update</span>
                  </Button>
                </Box>
                <Box sx={{ marginLeft: 2, width: "50%" }}>
                  <Button
                    // sx={{ border: "2px solid #793ee0",  }}
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={handleClose}
                  >
                    <span>Cancel</span> <CloseIcon />
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Dialog>
    </>
  );
};

export default UpdateTaskInUser;
