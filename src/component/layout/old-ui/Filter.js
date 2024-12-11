import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/filterSlice";

const FilterBox = () => {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "priority") {
      if (value === "") {
        setPriority("");
      } else {
        setPriority(value);
      }
    } else if (name === "category") {
      if (value === "") {
        setCategory("");
      } else {
        setCategory(value);
      }
    } else if (name === "status") {
      if (value === "") {
        setStatus("");
      } else {
        setStatus(value);
      }
    }
  };
  useEffect(() => {
    dispatch(
      setFilters({ priority: priority, category: category, status: status })
    );
  }, [priority, category, status]);

  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "left",
          marginTop: 0,
          marginBottom: 0,
          fontWeight: "bold",
        }}
      >
        Filter Task By
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
          textAlign: "initial",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
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
                  <MenuItem value="">Clear</MenuItem>
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
                  <MenuItem value="">Clear</MenuItem>
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
                  <MenuItem value="">Clear</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FilterBox;
