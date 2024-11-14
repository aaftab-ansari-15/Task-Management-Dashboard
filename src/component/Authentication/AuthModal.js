import React from "react";
import SignUpDialog from "./SignUp";
import LoginDialog from "./Login";
import { useSelector } from "react-redux";
import { Box, Icon, SvgIcon, Typography } from "@mui/material";
import ImageCarousel from "../features/ImageCarousel";
import DashboardIcon from "@mui/icons-material/Dashboard";
const AuthModal = () => {
  const authState = useSelector((state) => state.modal.authComponent);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "50vw", height: "100vh" }}>
        <Box sx={{ mt: 4, ml: "60px", display: "flex", alignItems: "center" }}>
          <SvgIcon sx={{ fontSize: "50px", color: "#9f5aaf", mr: "15px" }}>
            <DashboardIcon />
          </SvgIcon>
          <Typography variant="h5">
            Task<span style={{ fontWeight: "bold" }}>Management</span>Dashboard
          </Typography>
        </Box>
        <Box sx={{ m: "100px" }}>
          <center>
            <Box sx={{ width: "50%", textAlign: "left" }}>
              {authState === "SignUp" && <SignUpDialog />}
              {authState === "Login" && <LoginDialog />}
            </Box>
          </center>
        </Box>
      </Box>
      <Box sx={{ width: "50vw", height: "100vh" }}>
        <ImageCarousel />
      </Box>
    </Box>
  );
};

export default AuthModal;
