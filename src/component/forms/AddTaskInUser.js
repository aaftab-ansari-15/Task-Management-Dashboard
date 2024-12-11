import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
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
import { useLayoutEffect } from "react";
import { addTaskForm } from "../../redux/uiSlice";
import { generateRandomID } from "../../utills/genral";
const defaultTask = {
  taskId: 0,
  title: "",
  description: "",
  dueDate: "",
  priority: "",
  category: "",
  status: "Pending",
  timeSpent: "00:00:00",
  pined: false,
};

const AddTaskInUser = () => {
  const dispatch = useDispatch();
  const isAddTaskForm = useSelector((state) => state.ui.isAddTaskForm);
  const data = useSelector((state) => state.ui.addTaskFormData);
  const newTask1 = {
    ...defaultTask,
    ...data,
  };
  const [newTask, setNewTask] = useState(newTask1);
  const [errors, setErrors] = useState(newTask1);
  const currentUser = useSelector((state) => state.users.currentUser);
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const currentUserTasks = allTasks.find(obj => obj.userId === currentUser.email)?.tasks || [];
  const isFormValid =
    !errors.title &&
    !errors.description &&
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
    const createTaskId = currentUserTasks.length + generateRandomID();
    const updatedTask = {
      ...newTask,
      taskId: createTaskId,
    };
    const checkTask = currentUserTasks.find((task) => {
      return (
        task.taskId === updatedTask.taskId || task.title === updatedTask.title
      );
    });
    if (checkTask && checkTask.taskId && checkTask.title) {
      console.log("task already exist, title must be unique.");
    } else {
      dispatch(addTask({ data: updatedTask, userId: currentUser.email }));
      console.log("Task added:", updatedTask);
    }
    setNewTask(defaultTask);
    dispatch(addTaskForm({ formState: false, data: {} }));
  };
  const handleClose = () => {
    dispatch(addTaskForm({ formState: false, data: {} }));
  };
  useLayoutEffect(() => {
    setNewTask(newTask1);
  }, [data]);
  return (
    <>
      <Dialog
        open={isAddTaskForm}
        onClose={handleClose}
        PaperProps={{
          style: {
            marginTop: "70px",
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
                <Typography variant="h5">Add new task</Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ mx: "15%", my: 4 }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="inherit">New task name</Typography>

                <TextField
                  margin="dense"
                  id="title"
                  name="title"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  color="info"
                  value={newTask.title}
                  onChange={handleChange}
                  error={!!errors.title}
                  helperText={errors.title}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="inherit">Task description</Typography>

                <TextField
                  margin="dense"
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  color="info"
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
                  <Typography variant="inherit">Set priority</Typography>

                  <FormControl fullWidth margin="dense">
                    <InputLabel id="priority-label">Priority</InputLabel>
                    <Select
                      labelId="priority-label"
                      id="priority"
                      name="priority"
                      color="info"
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
                  <Typography variant="inherit">Set category</Typography>
                  <FormControl fullWidth margin="dense">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                      labelId="category-label"
                      id="category"
                      name="category"
                      color="info"
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
                <Typography variant="inherit">Task due date</Typography>

                <TextField
                  margin="dense"
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  fullWidth
                  color="info"
                  variant="outlined"
                  value={newTask.dueDate}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ marginRight: 2, width: "50%" }}>
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
                <Box sx={{ marginLeft: 2, width: "50%" }}>
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
              </Box>
            </Box>
          </>
        )}
      </Dialog>
    </>
  );
};

export default AddTaskInUser;
