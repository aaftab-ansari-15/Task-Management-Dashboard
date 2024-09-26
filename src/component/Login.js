// src/components/SignUpDialog.js
import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

const LoginDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.3)", // More transparent background
          backdropFilter: "blur(5px)", // Optional: Blur effect to make it stylish
          boxShadow: "none",
        },
      }}
    >
      <DialogTitle style={{ color: "#000" }}>Login</DialogTitle>
      <DialogContent style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="black">
          Cancel
        </Button>
        <Button onClick={onClose} color="black">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
