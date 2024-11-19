import React from "react";
import {
  addTaskForm,
  changeComponent,
  changeDarkMode,
  sideBarModal,
} from "../../redux/modalSlice";

import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../redux/userSlice";
import {
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import TocIcon from "@mui/icons-material/Toc";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const SideBar = () => {
  const dispatch = useDispatch();
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
    <Box sx={{ width: 310, height: "100%" }} role="presentation">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          // bgcolor: "#139bba",
          // color: "text.primary",
          height: "10vh",
          backgroundColor: "#78B3CE",
        }}
      >
        <Box>
          <Button variant="solid" color="inherit" onClick={handleDarkModeClick}>
            <DarkModeIcon />
          </Button>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            T M D
          </Typography>
        </Box>
        <Box>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ color: "black" }}
          >
            <CloseIcon />
          </IconButton>
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
                  <TocIcon />
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
                  <AssignmentIcon />
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
    </Box>
  );
};

export default SideBar;
