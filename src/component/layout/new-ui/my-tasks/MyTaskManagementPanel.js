import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import TaskPriorityIcon from "../../../icons/TaskPriorityIcon";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import TaskStatusIcon from "../../../icons/TaskStatusIcon";
import { setFilters } from "../../../../redux/filterSlice";
import { useDispatch } from "react-redux";
import { addTaskForm, setMyTaskView, setSearchFilterText } from "../../../../redux/uiSlice";
const TaskManagementPanel = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const handleFilterChange = (name) => (event, value) => {
    console.log(name, value);
    if (name === "clear") {
      setPriority("");
      setCategory("");
      setStatus("");
    } else if (value !== null) {
      if (name === "priority") {
        setPriority(value);
      } else if (name === "category") {
        setCategory(value);
      } else if (name === "status") {
        setStatus(value);
      }
    }
  };

  useEffect(() => {
    dispatch(
      setFilters({ priority: priority, category: category, status: status })
    );
  }, [priority, category, status]);

  const handleViewChange = (name) => (event, value) => {
    console.log(name, value);
    if (value !== null) {
      if (name === "view") {
        setView(value);
      }
    }
  };
  useEffect(() => {
    dispatch(setMyTaskView(view));
  }, [view]);
  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value);
  };
  useEffect(() => {
    dispatch(setSearchFilterText(searchFilter));
  }, [searchFilter]);
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleAddTask = () => {
    dispatch(addTaskForm({ formState: true, data: {} }));
  };
  return (
    <Box sx={{ p: 3 }}>
      {/* Title */}
      <Typography fontWeight={"bolder"} variant="h6" gutterBottom>
        Task Management Panel
      </Typography>
      <Divider sx={{ my: 2 }} />
      {/* Task View Options */}
      <Grid2 container spacing={1} sx={{ alignItems: "center" }}>
        <Grid2 size={3}>
          <Typography fontWeight={"bold"} variant="body1" textAlign={"start"}>
            View
          </Typography>
        </Grid2>
        <Grid2 size={9}>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleViewChange("view")}
            aria-label="task view"
            sx={{ height: "40px" }}
          >
            <ToggleButton value="grid" aria-label="grid view">
              Grid
            </ToggleButton>
            <ToggleButton value="list" aria-label="list view">
              List
            </ToggleButton>
            <ToggleButton value="table" aria-label="table view">
              Table
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid2>
      </Grid2>
      <Divider sx={{ my: 2 }} />
      {/* Search Bar */}
      <Grid2 container spacing={1} sx={{ alignItems: "center" }}>
        <Grid2 size={3}>
          <Typography fontWeight={"bold"} variant="body1" textAlign={"start"}>
            Search
          </Typography>
        </Grid2>
        <Grid2 size={9}>
          <TextField
            fullWidth
            value={searchFilter}
            color="info"
            variant="outlined"
            placeholder="Search tasks..."
            onChange={handleSearchChange}
          />
        </Grid2>
      </Grid2>

      <Divider sx={{ my: 2 }} />

      {/* Sorting Options */}
      <Grid2 container spacing={1} alignItems="center">
        <Grid2 size={3}>
          <Typography fontWeight="bold" variant="body1" textAlign={"start"}>
            Sort
          </Typography>
        </Grid2>

        <Grid2 size={9}>
          <FormControl fullWidth variant="outlined" color="info">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              label="Sort By"
              color="info"
            >
              <MenuItem value="due-date">Due Date</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="">Clear</MenuItem>
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Divider sx={{ my: 2 }} />

      {/* Filtering Options */}
      <Box>
        <Grid2 container spacing={1} sx={{ alignItems: "center" }}>
          <Grid2 size={6}>
            <Typography fontWeight="bold" variant="body1" textAlign={"start"}>
              Filter by
            </Typography>
          </Grid2>
          <Grid2 size={6}>
            <Button
              color="warning"
              onClick={handleFilterChange("clear")}
              sx={{ fontWeight: "bold" }}
            >
              Clear
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={1} sx={{ alignItems: "center", my: 1 }}>
          <Grid2 size={3}>
            <Typography fontWeight="bold" variant="body2" textAlign={"start"}>
              Priority
            </Typography>
          </Grid2>
          <Grid2 size={9}>
            <ToggleButtonGroup
              value={priority}
              exclusive
              onChange={handleFilterChange("priority")}
              sx={{ height: "30px" }}
            >
              <ToggleButton value="Low">
                <TaskPriorityIcon priority={"Low"} />
              </ToggleButton>
              <ToggleButton value="Medium">
                <TaskPriorityIcon priority={"Medium"} />
              </ToggleButton>
              <ToggleButton value="High">
                <TaskPriorityIcon priority={"High"} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={1} sx={{ alignItems: "center", my: 1 }}>
          <Grid2 size={3}>
            <Typography fontWeight="bold" variant="body2" textAlign={"start"}>
              Category
            </Typography>
          </Grid2>
          <Grid2 size={9}>
            <ToggleButtonGroup
              value={category}
              exclusive
              onChange={handleFilterChange("category")}
              sx={{ height: "30px" }}
            >
              <ToggleButton value="Work">
                <WorkIcon sx={{ color: "#8b2e16" }} />
              </ToggleButton>
              <ToggleButton value="Personal">
                <PersonIcon sx={{ color: "#fff800" }} />
              </ToggleButton>
              <ToggleButton value="Study">
                <SchoolIcon sx={{ color: "#454141" }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={1} sx={{ alignItems: "center" }}>
          <Grid2 size={3}>
            <Typography fontWeight="bold" variant="body2" textAlign={"start"}>
              Status
            </Typography>
          </Grid2>
          <Grid2 size={9} fontSize={"2px"}>
            <ToggleButtonGroup
              value={status}
              exclusive
              onChange={handleFilterChange("status")}
              sx={{ height: "30px" }}
            >
              <ToggleButton value="Completed">
                <TaskStatusIcon status="Completed" />
              </ToggleButton>
              <ToggleButton value="In-progress">
                <TaskStatusIcon status="In-progress" />
              </ToggleButton>
              <ToggleButton value="Pending">
                <TaskStatusIcon status="Pending" />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid2>
        </Grid2>
      </Box>

      {/* Task Actions */}
      <Divider sx={{ my: 2 }} />
      <Typography fontWeight="bold" variant="body1" textAlign={"start"}>
        Actions
      </Typography>
      <Grid2 container spacing={1} sx={{ alignItems: "center", my: 1 }}>
        <Grid2 size={4}>
          <Typography fontWeight="bold" variant="body2" textAlign="start">
            Add Task
          </Typography>
        </Grid2>

        <Grid2 size={8}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TaskManagementPanel;
