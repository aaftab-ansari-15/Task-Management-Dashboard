import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { clearFilters, setFilters } from "../redux/filterSlice";

const FilterBox = () => {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "priority") {
      setPriority(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "status") {
      setStatus(value);
    }
  };

  const handleClearFilters = () => {
    setPriority("");
    setCategory("");
    setStatus("");
    dispatch(clearFilters());
  };

  const handleApplyFilters = () => {
    // Apply filter logic or dispatch filters to state/store
    dispatch(
      setFilters({ priority: priority, category: category, status: status })
    );
    console.log("Filters applied:", { priority, category, status });
  };

  return (
    <>
      <h3
        style={{
          textAlign: "left",
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 20,
        }}
      >
        Filters By
      </h3>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 5,
          }}
        >
          {/* Priority */}
          <Box>
            <p>Priority</p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="priority-label">Priority</InputLabel>
                <Select
                  labelId="priority-label"
                  id="priority"
                  name="priority"
                  value={priority}
                  label="Priority"
                  onChange={handleChange}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Category */}
          <Box>
            <p>Category</p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value="Work">Work</MenuItem>
                  <MenuItem value="Personal">Personal</MenuItem>
                  <MenuItem value="Study">Study</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Status */}
          <Box>
            <p>Status</p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  value={status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="In-progress">In-progress</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        {/* Right-side Buttons (Clear & Filter) */}
        <Box
          sx={{
            width: "35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            marginLeft: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyFilters}
            sx={{ marginBottom: 2 }}
          >
            Apply Filters
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FilterBox;
