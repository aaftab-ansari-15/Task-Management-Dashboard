import React from "react";
import {
  changeComponent,
  changeDarkMode,
  sideBarModal,
} from "../../redux/modalSlice";

import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../redux/userSlice";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import TocIcon from "@mui/icons-material/Toc";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useTheme } from "@emotion/react";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const SideBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const user = useSelector((state) => state.user);
  const isSignUpDialogOpen = useSelector((state) => state.modal.isSignUpOpen);
  const isLoginDialogOpen = useSelector((state) => state.modal.isLoginOpen);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    event.preventDefault();
    setSelectedIndex(index);
  };
  const toggleDrawer = () => {
    dispatch(sideBarModal(false));
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
  const handleMyTaskClick = () => {
    dispatch(changeComponent("MyTasksListOldUi"));
    dispatch(sideBarModal(false));
  };
  const handleDashboardClick = () => {
    dispatch(changeComponent("Dashboard"));
    dispatch(sideBarModal(false));
  };
  const handleNotificationClick = () => {
    dispatch(changeComponent("TaskNotification"));
    dispatch(sideBarModal(false));
  };
  const handleTaskListClick = () => {
    dispatch(changeComponent("MyTasksList"));
    dispatch(sideBarModal(false));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          bgcolor: theme.palette.secondary.main,
          py: 2,
          pl: 1,
          // height: "10vh",
        }}
      >
        <Box sx={{ ml: 3, mr: 1, display: "flex", alignItems: "center" }}>
          <MenuOpenIcon />
          <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
            T3
          </Typography>
        </Box>
      </Box>
      <Divider />

      <Box
        sx={{
          overflow: "hidden",
          p: 4,
          color: "text.primary",
        }}
      >
        {user.user && user.user.isLogin ? (
          <>
            <List component="nav" aria-label="">
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => {
                  handleListItemClick(event, 2);
                  handleDashboardClick();
                }}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>

              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => {
                  handleListItemClick(event, 3);
                  handleTaskListClick();
                }}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Task List" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => {
                  handleListItemClick(event, 4);
                  handleMyTaskClick();
                }}
              >
                <ListItemIcon>
                  <TocIcon />
                </ListItemIcon>
                <ListItemText primary="My Task (Old  UI)" />
              </ListItemButton>

              <ListItemButton
                selected={selectedIndex === 5}
                onClick={(event) => {
                  handleListItemClick(event, 5);
                  handleNotificationClick();
                }}
              >
                <ListItemIcon>
                  <NotificationImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </List>
            <Divider sx={{ my: 2 }} />
            <List component="nav" aria-label="" sx={{ mt: 2 }}>
              <ListItemButton
                selected={selectedIndex === 6}
                onClick={(event) => {
                  handleListItemClick(event, 6);
                  handleLogOutClick();
                }}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>

                <ListItemText primary="Log Out" />
              </ListItemButton>
            </List>
          </>
        ) : (
          <List component="nav" aria-label="" sx={{}}>
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => {
                handleListItemClick(event, 0);
                handleSignUpClick();
              }}
            >
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>

              <ListItemText primary="Sign Up" />
            </ListItemButton>

            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => {
                handleListItemClick(event, 1);
                handleLoginClick();
              }}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>

              <ListItemText primary="Login" />
            </ListItemButton>
          </List>
        )}
      </Box>
    </>
  );
};

export default SideBar;
