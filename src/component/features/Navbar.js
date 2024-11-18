import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode, sideBarModal } from "../../redux/modalSlice";
import { logOutUser } from "../../redux/userSlice";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LoginIcon from "@mui/icons-material/Login";
export default function Navbar() {
  const dispatch = useDispatch();
  const isSignUpDialogOpen = useSelector((state) => state.modal.isSignUpOpen);
  const isLoginDialogOpen = useSelector((state) => state.modal.isLoginOpen);
  const user = useSelector((state) => state.user);
  const handleSideBarOpen = () => {
    dispatch(sideBarModal(true));
  };

  const handleSignUpClick = () => {
    if (!isLoginDialogOpen) {
    }
  };
  const handleLoginClick = () => {
    if (!isSignUpDialogOpen) {
    }
  };
  const handleLogOutClick = () => {
    dispatch(logOutUser(user.user));
  };
  const handleDarkModeClick = () => {
    dispatch(changeDarkMode());
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "#78B3CE", color: "text.primary" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleSideBarOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography textAlign="center" variant="h5" sx={{ flexGrow: 1 }}>
              Task Management Dashboard
              {/* {user.user ? " - " + user.user.name : ""} */}
            </Typography>
            <div>
              {user.user && user.user.isLogin ? (
                <Button
                  variant="solid"
                  color="inherit"
                  onClick={handleLogOutClick}
                >
                  Log Out
                </Button>
              ) : (
                <>
                  <Button
                    variant="solid"
                    color="inherit"
                    onClick={handleSignUpClick}
                  >
                    SignUp
                  </Button>
                  <Button
                    variant="solid"
                    color="inherit"
                    onClick={handleLoginClick}
                  >
                    Login
                  </Button>
                </>
              )}
            </div>
            <div>
              <Button
                variant="solid"
                color="inherit"
                onClick={handleDarkModeClick}
              >
                <DarkModeIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
