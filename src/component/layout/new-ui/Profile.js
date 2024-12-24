import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
  Modal,
  TextField,
} from "@mui/material";
import { DeleteForever, AccountCircle } from "@mui/icons-material";
import {
  deleteAccountProccess,
  deleteAllTasks,
} from "../../../redux/tasksSlice";
import { deleteUser } from "../../../redux/usersSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const currentUserTasks =
    allTasks.find((obj) => obj.userId === currentUser.email)?.tasks || [];
  const [isDeleteAllTasksOpen, setIsDeleteAllTasksOpen] = useState(false);
  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const getTaskCountByPriority = (priority) =>
    currentUserTasks.filter((task) => task.priority === priority).length;
  const getTaskCountByCategory = (category) =>
    currentUserTasks.filter((task) => task.category === category).length;
  const getTaskCountByStatus = (status) =>
    currentUserTasks.filter((task) => task.status === status).length;

  const handleDeleteAllTasks = () => {
    if (confirmText === "Delete all tasks") {
      dispatch(deleteAllTasks({ userId: currentUser.email }));
      setIsDeleteAllTasksOpen(false);
      alert("All tasks deleted!");
    }
  };

  const handleDeleteUserAccount = () => {
    if (confirmText === "Delete account") {
      dispatch(deleteAccountProccess({ userId: currentUser.email }));
      dispatch(deleteUser({ userId: currentUser.email }));
      setIsDeleteAccountOpen(false);
      window.location.reload();
      alert("User account deleted!");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2, m: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{}}>
            <CardContent>
              <Box display="flex" justifyContent="center">
                <AccountCircle sx={{ width: "7rem", height: "7rem" }} />
              </Box>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "secondary.main",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  User Profile
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  mt: 1,
                  bgcolor: "myTaskCard.main",
                }}
              >
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Name: {currentUser.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  Email: {currentUser.email}
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "secondary.main",
                  fontWeight: "bold",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Manage Your Account
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  mt: 1,
                  bgcolor: "myTaskCard.main",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ mb: 3, color: "text.secondary", fontSize: "1.2rem" }}
                >
                  You can delete all tasks or your account from here. Be
                  cautious as this action cannot be undone.
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    sx={{ p: 2, width: "100%", mr: 1 }}
                    variant="contained"
                    color="error"
                    onClick={() => setIsDeleteAllTasksOpen(true)}
                  >
                    <DeleteForever />
                    Delete All Tasks
                  </Button>
                  <Button
                    sx={{ p: 2, width: "100%", ml: 1 }}
                    variant="contained"
                    color="error"
                    onClick={() => setIsDeleteAccountOpen(true)}
                  >
                    <DeleteForever />
                    Delete Account
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{}}>
            <CardContent>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "secondary.main",
                  fontWeight: "bold",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Task Overview
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  mt: 1,
                  bgcolor: "myTaskCard.main",
                }}
              >
                <Typography variant="h6">
                  Total Tasks: {currentUserTasks.length}
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  mt: 1,
                  bgcolor: "myTaskCard.main",
                }}
              >
                <Typography variant="h6">Priority</Typography>

                <Typography variant="body1" color="text.secondary">
                  Low Priority: {getTaskCountByPriority("Low")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Medium Priority: {getTaskCountByPriority("Medium")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  High Priority: {getTaskCountByPriority("High")}
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  mt: 1,
                  bgcolor: "myTaskCard.main",
                }}
              >
                <Typography variant="h6">Category</Typography>
                <Typography variant="body1" color="text.secondary">
                  Work: {getTaskCountByCategory("Work")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Personal: {getTaskCountByCategory("Personal")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Study: {getTaskCountByCategory("Study")}
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  mt: 1,
                  bgcolor: "myTaskCard.main",
                }}
              >
                <Typography variant="h6">Status</Typography>
                <Typography variant="body1" color="text.secondary">
                  Pending: {getTaskCountByStatus("Pending")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  In-Progress: {getTaskCountByStatus("In-progress")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Completed: {getTaskCountByStatus("Completed")}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Modal
        open={isDeleteAllTasksOpen}
        onClose={() => setIsDeleteAllTasksOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">
            Are you sure you want to delete your all tasks?
          </Typography>
          <TextField
            label="Type 'Delete all tasks' to confirm"
            variant="outlined"
            color="info"
            fullWidth
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            sx={{ my: 1 }}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="info"
              onClick={() => setIsDeleteAllTasksOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteAllTasks}
              disabled={confirmText !== "Delete all tasks"}
            >
              Delete All Tasks
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={isDeleteAccountOpen}
        onClose={() => setIsDeleteAccountOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">
            Are you sure you want to delete your account?
          </Typography>
          <TextField
            label="Type 'Delete account' to confirm"
            variant="outlined"
            color="info"
            fullWidth
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            sx={{ my: 1 }}
          />
          <Box display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="info"
              onClick={() => setIsDeleteAccountOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteUserAccount}
              disabled={confirmText !== "Delete account"}
            >
              Delete Account
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Profile;
