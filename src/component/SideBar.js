import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { addTaskFrom, sideBarModal } from "../redux/modalSlice";
import { useDispatch } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import {
  openSignUpModal,
  openLoginModal,
  changeDarkMode,
} from "../redux/modalSlice";
import { logOutUser } from "../redux/userSlice";
const SideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isSignUpDialogOpen = useSelector((state) => state.modal.isSignUpOpen);
  const isLoginDialogOpen = useSelector((state) => state.modal.isLoginOpen);
  const toggleDrawer = () => {
    dispatch(sideBarModal(false));
  };
  const handleSignUpClick = () => {
    if (!isLoginDialogOpen) {
      dispatch(openSignUpModal());
    }
  };
  const handleLoginClick = () => {
    if (!isSignUpDialogOpen) {
      dispatch(openLoginModal());
    }
  };
  const handleLogOutClick = () => {
    dispatch(logOutUser(user.user));
  };
  const handleDarkModeClick = () => {
    dispatch(changeDarkMode());
  };
  const handleAddTaskClick = () => {
    dispatch(addTaskFrom(true));
  };
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button variant="solid" color="inherit" onClick={handleDarkModeClick}>
            <DarkModeIcon />
          </Button>
        </Box>
        <Box>TMD</Box>
        <Box>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
      <Box>
        {user.user && user.user.isLogin ? (
          <>
            <Box>
              <Button
                fullWidth
                variant="text"
                color="success"
                onClick={handleAddTaskClick}
              >
                Add New Task
              </Button>
            </Box>
            <Box>
              <Button
                fullWidth
                variant="text"
                color="inherit"
                onClick={handleLogOutClick}
              >
                Log Out
              </Button>
            </Box>
          </>
        ) : (
          <Box>
            <Box>
              <Button
                variant="solid"
                color="inherit"
                onClick={handleSignUpClick}
              >
                SignUp
              </Button>
            </Box>
            <Box>
              <Button
                variant="solid"
                color="inherit"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SideBar;
