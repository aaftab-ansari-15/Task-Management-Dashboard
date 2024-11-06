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
import { clearSorting, setSorting } from "../redux/sortSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSort = () => {
    dispatch(setSorting({ sortBy: sortBy, sortOrder: sortOrder }));
    console.log("Sorting by:", sortBy, "Order:", sortOrder);
  };

  const handleClear = () => {
    setSortBy("");
    setSortOrder("");
    dispatch(clearSorting());
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
        Sort By
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
                  onChange={handleSortByChange}
                >
                  <MenuItem value="dueDate">Due Date</MenuItem>
                  <MenuItem value="priority">Priority</MenuItem>
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
                  onChange={handleSortOrderChange}
                >
                  <MenuItem value="asc">Ascending</MenuItem>
                  <MenuItem value="desc">Descending</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        {/* Right-side Buttons (Sort and Clear) */}
        <Box
          sx={{
            width: "35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: 2,
            marginLeft: 2,
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSort}>
            Apply Sorting
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sort;
