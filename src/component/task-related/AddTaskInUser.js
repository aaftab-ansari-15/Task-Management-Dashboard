import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../../redux/tasksSlice";
import { addTaskFrom } from "../../redux/modalSlice";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Dialog,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const defaultTask = {
  taskId: 0,
  userId: "",
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  category: "",
  status: "Pending",
  timeSpent: "0:0:0",
  pined: false,
};

const AddTaskInUser = () => {
  const isAddTaskForm = useSelector((state) => state.modal.isAddTaskForm);
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
  function generateRandomID() {
    return (
      Date.now().toString(36) + Math.random().toString(36).substring(2, 7)
    ).substring(0, 7);
  }
  const handleAddTaskClick = () => {
    const lastIndex = tasks.tasks.length + generateRandomID();
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
    dispatch(addTaskFrom(false));
  };
  const handleClose = () => {
    dispatch(addTaskFrom(false));
  };

  return (
    <>
      <Dialog
        open={isAddTaskForm}
        onClose={handleClose}
        PaperProps={{
          style: {
            marginTop: "70px",
            borderRadius: "20px",
            border: "3px solid #008f25",
            // height: "50vh",
            width: "40vw",
            overflow: "hidden",
          },
        }}
      >
        {isAddTaskForm && (
          <>
            <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
              <Box
                sx={{
                  textAlign: "center",
                  flexGrow: 2,
                }}
              >
                <Typography variant="h5">Add New Task</Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ mx: "15%", my: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="inherit">New Task Name</Typography>

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
                  value={newTask.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
                />
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "space-around", mb: 3 }}
              >
                <Box sx={{ width: "-webkit-fill-available", mr: 1 }}>
                  <Typography variant="inherit">Set Priority</Typography>

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
                </Box>

                <Box sx={{ width: "-webkit-fill-available", ml: 1 }}>
                  <Typography variant="inherit">Set Category</Typography>
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
                  value={newTask.dueDate}
                  onChange={handleChange}
                  error={!!errors.dueDate}
                  helperText={errors.dueDate}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ marginRight: 2, width: "50%" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleAddTaskClick}
                    fullWidth
                    disabled={!isFormValid}
                    sx={{
                      border: "2px solid #388e3c",
                      "&.Mui-disabled": {
                        backgroundColor: "success.main", // Keep the success color
                        color: "white", // Optionally, you can specify the text color too
                      },
                    }}
                  >
                    <span>Add</span>
                  </Button>
                </Box>
                <Box sx={{ marginLeft: 2, width: "50%" }}>
                  <Button
                    // sx={{ border:"2px solid #793ee0"}}
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

export default AddTaskInUser;
