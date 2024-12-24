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
import TaskStatusIcon from "../../../icons/TaskStatusIcon";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { setFilters } from "../../../../redux/filterSlice";
import { useDispatch } from "react-redux";
import {
  addTaskForm,
  setMyTaskView,
  setSearchFilterText,
} from "../../../../redux/uiSlice";
import { setSorting } from "../../../../redux/sortSlice";
import { getSortDetails } from "../../../../utills/sorting";
const TaskManagementPanel = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState("grid");
  const [sortOption, setSortOption] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  // filter
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

  // view
  const handleViewChange = () => (event, value) => {
    if (value !== null) {
      setView(value);
    }
  };
  useEffect(() => {
    dispatch(setMyTaskView(view));
  }, [view]);

  // search
  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value);
  };
  useEffect(() => {
    dispatch(setSearchFilterText(searchFilter));
  }, [searchFilter]);

  //sort
  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortOption(value);
  };
  useEffect(() => {
    const sortDetails = getSortDetails(sortOption);

    dispatch(setSorting(sortDetails));
  }, [sortOption]);

  //actions
  const handleAddTask = () => {
    dispatch(addTaskForm({ formState: true, data: {} }));
  };
  return (
    <Box sx={{ p: 0 }}>
      {/* Title */}
      <Box p={1} sx={{ bgcolor: "secondary.main" }}>
        <Typography textAlign={"start"} fontWeight={"bolder"} variant="h6">
          Task Management Panel
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box p={2}>
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
              onChange={handleViewChange()}
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
                <MenuItem value="priority-asc">
                  Priority <ArrowUpwardIcon />
                </MenuItem>
                <MenuItem value="due-date-asc">
                  Due Date <ArrowUpwardIcon />
                </MenuItem>
                <MenuItem value="priority-desc">
                  Priority <ArrowDownwardIcon />
                </MenuItem>
                <MenuItem value="due-date-desc">
                  Due Date <ArrowDownwardIcon />
                </MenuItem>
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
                <ToggleButton value="Low" sx={{ px: 2 }}>
                  <TaskPriorityIcon priority={"Low"} />
                </ToggleButton>
                <ToggleButton value="Medium" sx={{ px: 2 }}>
                  <TaskPriorityIcon priority={"Medium"} />
                </ToggleButton>
                <ToggleButton value="High" sx={{ px: 2 }}>
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
                <ToggleButton value="Work" sx={{ px: 2 }}>
                  <WorkIcon sx={{ color: "#8b2e16" }} />
                </ToggleButton>
                <ToggleButton value="Personal" sx={{ px: 2 }}>
                  <PersonIcon sx={{ color: "#fff800" }} />
                </ToggleButton>
                <ToggleButton value="Study" sx={{ px: 2 }}>
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
                <ToggleButton value="Completed" sx={{ px: 2 }}>
                  <TaskStatusIcon status="Completed" />
                </ToggleButton>
                <ToggleButton value="In-progress" sx={{ px: 2 }}>
                  <TaskStatusIcon status="In-progress" />
                </ToggleButton>
                <ToggleButton value="Pending" sx={{ px: 2 }}>
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

          <Grid2 size={8} textAlign={"start"}>
            <Button
              variant="contained"
              color="success"
              sx={{ width: "140px" }}
              onClick={handleAddTask}
            >
              Add Task
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default TaskManagementPanel;
