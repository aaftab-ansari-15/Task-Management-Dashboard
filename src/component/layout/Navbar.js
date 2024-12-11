import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeComponent,
  changeDarkMode,
  sideBarModal,
} from "../../redux/uiSlice";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import MenuIcon from "@mui/icons-material/Menu";
import ContrastIcon from "@mui/icons-material/Contrast";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Tooltip } from "@mui/material";
import { useTheme } from "@emotion/react";
import { NOTIFICATIONS } from "../../constants/componentsName.";
import { logoutUser } from "../../redux/usersSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const componentName = useSelector((state) => state.ui.mainLayoutComponent);
  const currentUser = useSelector((state) => state.users.currentUser);
  
  const handleSideBarOpen = () => {
    dispatch(sideBarModal(true));
  };
  const handleLogOutClick = () => {
    dispatch(logoutUser(currentUser));
  };
  const handleDarkModeClick = () => {
    dispatch(changeDarkMode());
  };
  const handleNotificationClick = () => {
    dispatch(changeComponent(NOTIFICATIONS));
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
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                fontWeight={"900"}
                textAlign="start"
                fontStyle={"oblique"}
                variant="h5"
                color={theme.palette.text.primary}
              >
                {componentName}
              </Typography>
            </Box>

            <Button></Button>
            <Box mr={1}>
              <Tooltip
                title={
                  <Typography variant="body1">{currentUser.name}</Typography>
                }
              >
                <IconButton sx={{ color: theme.palette.text.primary }}>
                  <PersonIcon />
                </IconButton>
              </Tooltip>
              <IconButton>
                <HorizontalRuleIcon
                  fontSize="large"
                  sx={{ transform: "rotate(90deg)" }}
                />
              </IconButton>
              <Tooltip
                title={<Typography variant="body1">Notifications</Typography>}
              >
                <IconButton
                  sx={{ color: theme.palette.text.primary }}
                  onClick={handleNotificationClick}
                >
                  <NotificationImportantIcon />
                </IconButton>
              </Tooltip>
              <IconButton>
                <HorizontalRuleIcon
                  fontSize="large"
                  sx={{ transform: "rotate(90deg)" }}
                />
              </IconButton>
              <Tooltip title={<Typography variant="body1">Log Out</Typography>}>
                <IconButton
                  sx={{ color: theme.palette.text.primary }}
                  onClick={handleLogOutClick}
                >
                  <LogoutIcon />
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
                  <ContrastIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
