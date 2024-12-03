import React from "react";
import { Box, Button, Divider, Grid2, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const TaskTrackTime = () => {
  return (
    <>
      <Grid2 container alignItems={"center"}>
        <Grid2 size={10}>
          <Typography className="bottomGridHeading" variant="h6">
            Track task time
          </Typography>
        </Grid2>
        <Grid2 size={2} >
          <IconButton sx={{p:0}} justifyContent={"right"}>
            <AddIcon />
          </IconButton>
        </Grid2>
      </Grid2>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}>
        <Typography className="bottomGridHeading" variant="body2">
          This Component is not completed yet (In-progress)
        </Typography>
      </Box>
    </>
  );
};

export default TaskTrackTime;
