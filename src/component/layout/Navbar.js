import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode, sideBarModal } from "../../redux/modalSlice";
import { logOutUser } from "../../redux/userSlice";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ContrastIcon from "@mui/icons-material/Contrast";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import { Tooltip } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
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
        <AppBar position="static">
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
            <Typography
              fontWeight={"900"}
              textAlign="start"
              variant="h5"
              // color="#505050"
              sx={{ flexGrow: 1 }}
            >
              Timely Task Tracker
            </Typography>

            <Box mr={1}>
              <Tooltip
                title={<Typography variant="h6">{user.user.name}</Typography>}
              >
                <IconButton sx={{ color: theme.palette.text.primary }}>
                  <PersonIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <IconButton>
                <HorizontalRuleIcon
                  fontSize="large"
                  sx={{ transform: "rotate(90deg)" }}
                />
              </IconButton>
              <Tooltip
                title={<Typography variant="body1">Change theme</Typography>}
              >
                <IconButton
                  sx={{ color: theme.palette.text.primary }}
                  onClick={handleDarkModeClick}
                >
                  <ContrastIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </Box>
            {/* <Button
                variant="solid"
                color="inherit"
                onClick={handleLogOutClick}
                sx={{m:0, p:0}}
              >
                <LogoutIcon fontSize="medium"/>
              </Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
