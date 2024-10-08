import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { openSignUpModal, openLoginModal } from "../redux/modalSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  const isSignUpDialogOpen = useSelector((state) => state.modal.isSignUpOpen);
  const isLoginDialogOpen = useSelector((state) => state.modal.isLoginOpen);
  console.log(isLoginDialogOpen);
  const handleSignUpClick = () => {
    console.log("clicked");
    if (!isLoginDialogOpen) {
      dispatch(openSignUpModal());
    }
  };
  const handleLoginClick = () => {
    console.log("clicked");
    if (!isSignUpDialogOpen) {
      dispatch(openLoginModal());
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#32383E", color: "white" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task Management Dashboard
            </Typography>
            <div>
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
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
