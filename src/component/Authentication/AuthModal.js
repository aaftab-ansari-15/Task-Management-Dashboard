import React from "react";
import SignUpDialog from "./SignUp";
import LoginDialog from "./Login";
import { useSelector } from "react-redux";
import { Box, Icon, SvgIcon, Typography } from "@mui/material";
import ImageCarousel from "../features/ImageCarousel";
import DashboardIcon from "@mui/icons-material/Dashboard";
const AuthModal = () => {
  const authState = useSelector((state) => state.ui.authComponent);

  return (
    <Box sx={{ display: "flex", flexWrap:"initial", height:"85vh"}}>
      <Box  sx={{flex:1 }}>
        <Box sx={{ pt: 4, ml: "60px", display: "flex", alignItems: "center" }}>
          <SvgIcon sx={{ fontSize: "50px", color: "#9f5aaf", mr: "15px" }}>
            <DashboardIcon />
          </SvgIcon>
          <Typography variant="h5">
            Task<span style={{ fontWeight: "bold" }}>Management</span>Dashboard
          </Typography>
        </Box>
        <Box sx={{ height:"100%", margin: "auto",width: "50%", pt:"5vh"}}>
            <Box sx={{ width: "100%", textAlign: "left" }}>
              {authState === "SignUp" && <SignUpDialog />}
              {authState === "Login" && <LoginDialog />}
            </Box>
        </Box>
      </Box>
      <Box sx={{ flex:1}}>
        <ImageCarousel />
      </Box>
    </Box>
  );
};

export default AuthModal;
