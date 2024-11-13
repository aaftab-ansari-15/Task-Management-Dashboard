import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  addTaskFrom,
  changeComponent,
  sideBarModal,
} from "../redux/modalSlice";
import { useDispatch } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LogoutIcon from "@mui/icons-material/Logout";
import TocIcon from '@mui/icons-material/Toc';
import {
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import {
  openSignUpModal,
  openLoginModal,
  changeDarkMode,
} from "../redux/modalSlice";
import { logOutUser } from "../redux/userSlice";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
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
  const handleMyTaskClick = () => {
    dispatch(changeComponent("MyTasksListOldUi"));
  };
  const handleDashboardClick = () => {
    dispatch(changeComponent("Dashboard"));
  }
  const handleNotificationClick = () => {
    dispatch(changeComponent("TaskNotification"));
  }
  const handleTaskListClick = () => {
    dispatch(changeComponent("MyTasksListNewUi"));
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
        }}
      >
        <Box>
          <Button variant="solid" color="inherit" onClick={handleDarkModeClick}>
            <DarkModeIcon />
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">TMD</Typography>
        </Box>
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

      <Box
        sx={{
          height: "85vh",
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
                <ListItemText primary="Task List (New UI)" />
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
            <Divider sx={{my:2}}/>
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
