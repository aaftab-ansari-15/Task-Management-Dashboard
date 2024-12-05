import React from "react";
import { changeComponent, sideBarModal } from "../../redux/uiSlice";

import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../redux/currentUserSlice";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LogoutIcon from "@mui/icons-material/Logout";
import TocIcon from "@mui/icons-material/Toc";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from '@mui/icons-material/Person';
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  ABOUT,
  DASHBOARD,
  MY_TASKS,
  NOTIFICATIONS,
  TASKS_LIST_OLD_UI,
} from "../../constants/componentsName.";

const SideBar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const user = useSelector((state) => state.currentUser);
  const isSideBar = useSelector((state) => state.ui.isSideBar);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleSideBarClose = () => {
    dispatch(sideBarModal(false));
  };
  const handleListItemClick = (event, index) => {
    event.preventDefault();
    setSelectedIndex(index);
  };
  const handleLogOutClick = () => {
    dispatch(logOutUser(user.user));
    dispatch(sideBarModal(false));
  };
  const navigateToComponent = (componentName) => {
    dispatch(changeComponent(componentName));
    dispatch(sideBarModal(false));
  };

  return (
    <Drawer
      open={isSideBar}
      onClose={handleSideBarClose}
      PaperProps={{
        sx: {
          width: 310,
          top: 0,
          bottom: 0,
          borderRadius: 2,
          bgcolor: theme.palette.background.default,
        },
      }}
    >
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
          <Typography
            variant="h6"
            fontWeight={"900"}
            fontStyle={"oblique"}
            ml={2}
          >
            Compito
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
        <List component="sidebar-header" aria-label="">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => {
              handleListItemClick(event, 2);
              navigateToComponent(DASHBOARD);
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
              navigateToComponent(MY_TASKS);
            }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="My tasks" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => {
              handleListItemClick(event, 4);
              navigateToComponent(TASKS_LIST_OLD_UI);
            }}
          >
            <ListItemIcon>
              <TocIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks list" />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 5}
            onClick={(event) => {
              handleListItemClick(event, 5);
              navigateToComponent(NOTIFICATIONS);
            }}
          >
            <ListItemIcon>
              <NotificationImportantIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </List>
        <Divider sx={{ my: 2 }} />
        <List component="sidebar-footer" aria-label="" sx={{ mt: 2 }}>
          {/* <ListItemButton
            selected={selectedIndex === 6}
            onClick={(event) => {
              handleListItemClick(event, 6);
              navigateToComponent();
            }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>

            <ListItemText primary="Profile" />
          </ListItemButton> */}
          <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => {
              handleListItemClick(event, 7);
              navigateToComponent(ABOUT);
            }}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>

          {/* <ListItemButton
            selected={selectedIndex === 8}
            onClick={(event) => {
              handleListItemClick(event, 8);
              handleLogOutClick();
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>

            <ListItemText primary="Log Out" />
          </ListItemButton> */}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
