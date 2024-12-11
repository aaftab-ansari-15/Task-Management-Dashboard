import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskInfoModal } from "../../../redux/uiSlice";
import { styled } from "@mui/system";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  Divider,
  Button,
  Dialog,
} from "@mui/material";

const TaskCard = styled(Paper)(({ theme }) => ({
  borderRadius: "4px",
  padding: theme.spacing(3),
  backgroundColor: "#fff",
  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 15px 25px rgba(0,0,0,0.2)",
  },
}));
const TaskInfo = () => {

  const dispatch = useDispatch();
  const isTaskInfoOpen = useSelector((state) => state.ui.isTaskInfoOpen);
  const task = useSelector((state) => state.ui.taskInfoData);
  const closeTaskInfo = () => {
    dispatch(taskInfoModal({ arg1: false, arg2: {} }));
  };

  return (
    <>
      <Dialog
        open={isTaskInfoOpen}
        onClose={closeTaskInfo}
        // scroll="paper"
        PaperProps={{
          style: {
            borderRadius: "20px",
            width: "40vw",
            overflow: "hidden",
            backgroundColor: "inherit",
          },
        }}
      >
        {task ? (
          <center>
            <Box sx={{ width: "100%", maxWidth: "700px", margin: "auto" }}>
              <TaskCard>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 2,
                  }}
                >
                  <Box>
                    <Button onClick={closeTaskInfo} color="primary">
                      Close
                    </Button>
                  </Box>
                  <Box
                    sx={{ flex: 1, textAlign: "center", marginRight: "10%" }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ color: "#f7246e", fontWeight: "bold" }}
                    >
                      Task Information
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ marginBottom: 2 }} />

                <Grid container spacing={3}>
                  {/* Left Column (4 fields) */}
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Task ID:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {task.taskId}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Title:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {task.title}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Category:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {task.category}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Priority:
                    </Typography>
                    <Chip
                      label={task.priority}
                      color={
                        task.priority === "High"
                          ? "error"
                          : task.priority === "Medium"
                          ? "warning"
                          : "success"
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Description:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "gray", whiteSpace: "pre-line" }}
                    >
                      {task.description}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Due Date:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {new Date(task.dueDate).toLocaleDateString()}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Status:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {task.status}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Time Spent:
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: "gray" }}>
                  <Counter task={task} />
                </Typography> */}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        Assigned User:
                      </Typography>
                      <Typography variant="body2" sx={{ color: "gray" }}>
                        {task.userId}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </TaskCard>
            </Box>
          </center>
        ) : (
          <>
            <p>No task found</p>
            <Box>
              <Button onClick={closeTaskInfo} color="primary">
                Close
              </Button>
            </Box>
          </>
        )}
      </Dialog>
    </>
  );
};

export default TaskInfo;
