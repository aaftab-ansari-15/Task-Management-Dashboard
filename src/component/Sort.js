import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setSorting } from "../redux/sortSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  useEffect(() => {
    dispatch(setSorting({ sortBy: sortBy, sortOrder: sortOrder }));
  }, [sortBy, sortOrder]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "sortBy") {
      if (value === "") {
        setSortOrder("");
      }
      setSortBy(value);
    } else if (name === "sortOrder") {
      setSortOrder(value);
    }
  };

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
        Sort Task
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
          {/* Sort By */}
          <Box>
            <p>Sort By</p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="sort-by-label">Sort By</InputLabel>
                <Select
                  labelId="sort-by-label"
                  id="sort-by"
                  name="sortBy"
                  value={sortBy}
                  label="Sort By"
                  onChange={handleChange}
                >
                  <MenuItem value="dueDate">Due Date</MenuItem>
                  <MenuItem value="priority">Priority</MenuItem>
                  <MenuItem value="">Clear</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Sort Order */}
          <Box>
            <p>Sort Order</p>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="sort-order-label">Sort Order</InputLabel>
                <Select
                  labelId="sort-order-label"
                  id="sort-order"
                  name="sortOrder"
                  value={sortOrder}
                  label="Sort Order"
                  onChange={handleChange}
                >
                  <MenuItem value="asc">Ascending</MenuItem>
                  <MenuItem value="desc">Descending</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sort;
